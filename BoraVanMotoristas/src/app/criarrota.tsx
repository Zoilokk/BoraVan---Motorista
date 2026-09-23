import { criarrotaStyles as styles } from '@/styles';
import { useState } from 'react';
import { router } from 'expo-router';
import { Image, Modal, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

export default function CriarRotaScreen() {
  const [nomeRota, setNomeRota] = useState('');
  const [horario, setHorario] = useState('');
  const [responsaveis, setResponsaveis] = useState<{ id: string; nome: string; semConta: boolean }[]>([]);

  const [modalComConta, setModalComConta] = useState(false);
  const [modalSemConta, setModalSemConta] = useState(false);

  const [buscaConta, setBuscaConta] = useState('');
  const [nomeSemConta, setNomeSemConta] = useState('');
  const [telefoneSemConta, setTelefoneSemConta] = useState('');

  function adicionarComConta() {
    if (!buscaConta.trim()) return;
    setResponsaveis((atual) => [
      ...atual,
      { id: Date.now().toString(), nome: buscaConta, semConta: false },
    ]);
    setBuscaConta('');
    setModalComConta(false);
  }

  function adicionarSemConta() {
    if (!nomeSemConta.trim()) return;
    setResponsaveis((atual) => [
      ...atual,
      { id: Date.now().toString(), nome: nomeSemConta, semConta: true },
    ]);
    setNomeSemConta('');
    setTelefoneSemConta('');
    setModalSemConta(false);
  }

  function removerResponsavel(id: string) {
    setResponsaveis((atual) => atual.filter((r) => r.id !== id));
  }

  return (
    <View style={styles.telaToda}>

      <View style={styles.cabecalho}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Image
            source={require('../../assets/images/seta.png')}
            style={styles.iconeVoltar}
          />
        </Pressable>

        <Text style={styles.textoCabecalho}>Criar Rota</Text>

        <View style={styles.espacoVazio} />
      </View>
      <View style={styles.linhaAmarela} />

      <ScrollView style={styles.conteudo} contentContainerStyle={styles.conteudoInterno}>

        <Text style={styles.label}>Nome da rota</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Rota Manhã - Zona Sul"
          placeholderTextColor="#999999"
          value={nomeRota}
          onChangeText={setNomeRota}
        />

        <Text style={styles.label}>Horário de saída</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 07:00"
          placeholderTextColor="#999999"
          value={horario}
          onChangeText={setHorario}
        />

        <Text style={styles.label}>Responsáveis</Text>

        <Pressable style={styles.botaoAdicionar} onPress={() => setModalComConta(true)}>
          <Text style={styles.textoBotaoAdicionar}>+ Adicionar responsável</Text>
        </Pressable>

        <Pressable
          style={[styles.botaoAdicionar, styles.botaoAdicionarSecundario]}
          onPress={() => setModalSemConta(true)}
        >
          <Text style={styles.textoBotaoAdicionarSecundario}>+ Adicionar responsável sem conta</Text>
        </Pressable>

      </ScrollView>

      <View style={styles.rodape}>
        <Pressable style={styles.botaoCriar} onPress={() => router.back()}>
          <Text style={styles.textoBotaoCriar}>Criar rota</Text>
        </Pressable>
      </View>

      <Modal
        visible={modalComConta}
        transparent
        animationType="fade"
        onRequestClose={() => setModalComConta(false)}
      >
        <View style={styles.fundoPopup}>
          <View style={styles.caixaPopup}>
            <Text style={styles.tituloPopup}>Adicionar responsável</Text>
            <Text style={styles.textoPopup}>
              Busque pelo nome, email ou telefone da conta já cadastrada.
            </Text>

            <TextInput
              style={styles.inputPopup}
              placeholder="Nome, email ou telefone"
              placeholderTextColor="#999999"
              value={buscaConta}
              onChangeText={setBuscaConta}
            />

            <View style={styles.botoesPopup}>
              <Pressable
                style={[styles.botaoPopup, styles.botaoCancelar]}
                onPress={() => setModalComConta(false)}
              >
                <Text style={styles.textoBotaoCancelar}>Cancelar</Text>
              </Pressable>

              <Pressable
                style={[styles.botaoPopup, styles.botaoConfirmarAzul]}
                onPress={adicionarComConta}
              >
                <Text style={styles.textoBotaoConfirmar}>Adicionar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        visible={modalSemConta}
        transparent
        animationType="fade"
        onRequestClose={() => setModalSemConta(false)}
      >
        <View style={styles.fundoPopup}>
          <View style={styles.caixaPopup}>
            <Text style={styles.tituloPopup}>Responsável sem conta</Text>
            <Text style={styles.textoPopup}>
              Preencha os dados manualmente. O responsável poderá vincular uma conta depois.
            </Text>

            <TextInput
              style={styles.inputPopup}
              placeholder="Nome completo"
              placeholderTextColor="#999999"
              value={nomeSemConta}
              onChangeText={setNomeSemConta}
            />

            <TextInput
              style={styles.inputPopup}
              placeholder="Telefone"
              placeholderTextColor="#999999"
              keyboardType="phone-pad"
              value={telefoneSemConta}
              onChangeText={setTelefoneSemConta}
            />

            <View style={styles.botoesPopup}>
              <Pressable
                style={[styles.botaoPopup, styles.botaoCancelar]}
                onPress={() => setModalSemConta(false)}
              >
                <Text style={styles.textoBotaoCancelar}>Cancelar</Text>
              </Pressable>

              <Pressable
                style={[styles.botaoPopup, styles.botaoConfirmarAzul]}
                onPress={adicionarSemConta}
              >
                <Text style={styles.textoBotaoConfirmar}>Adicionar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
}
