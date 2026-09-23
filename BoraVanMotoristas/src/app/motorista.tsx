import { motoristaStyles as styles } from '@/styles';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, Text, View, FlatList, Modal } from 'react-native';

const ALUNOS = [
  { id: '1', nome: 'Lucas Arantes', vai: true },
  { id: '2', nome: 'Robson Silva', vai: true },
  { id: '3', nome: 'Thiago Santos', vai: true },
  { id: '4', nome: 'Jairo Almeida', vai: true },
  { id: '5', nome: 'Janete Costa', vai: false },
  { id: '6', nome: 'Luciano Aldo', vai: false },
  { id: '7', nome: 'Jade Benedito', vai: false },
];

export default function ListaAlunosScreen() {
  const [chatAberto, setChatAberto] = useState(false);

  return (
    <View style={styles.telaToda}>

      <View style={styles.cabecalho}>
        <Text style={styles.textoCabecalho}>Bem Vindo Alexandre</Text>

        <Pressable style={styles.avatar} onPress={() => router.push('/perfilmot')}>
          <Image
            source={require('../../assets/images/perfil.png')}
            style={styles.iconeAvatar}
          />
        </Pressable>
      </View>
      <View style={styles.linhaAmarela} />

      <View style={styles.conteudo}>

        <Image
          source={require('../../assets/images/mapa.png')}
          style={styles.imagemMapa}
          resizeMode="cover"
        />

        <FlatList
          data={ALUNOS}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listaContainer}
          renderItem={({ item }) => (
            <View
              style={[
                styles.cardAluno,
                {
                  backgroundColor: item.vai ? '#2af37dff' : '#FFC1C1',
                  borderColor: item.vai ? '#2ECC71' : '#E74C3C',
                },
              ]}
            >
              <Text style={styles.nomeAluno}>{item.nome}</Text>

              <View style={styles.iconesStatus}>
                <View
                  style={[
                    styles.circuloIcone,
                    { backgroundColor: item.vai ? '#2ECC71' : '#B0B0B0' },
                  ]}
                >
                  <Text style={styles.textoIcone}>✓</Text>
                </View>

                <View
                  style={[
                    styles.circuloIcone,
                    { backgroundColor: !item.vai ? '#E74C3C' : '#B0B0B0' },
                  ]}
                >
                  <Text style={styles.textoIcone}>✕</Text>
                </View>
              </View>
            </View>
          )}
        />

        <Modal
                visible={chatAberto}
                transparent
                animationType="slide"
                onRequestClose={() => setChatAberto(false)}
              >
                <View style={styles.fundoChat}>
                  <Pressable style={styles.areaFecharChat} onPress={() => setChatAberto(false)} />
        
                  <View style={styles.caixaChat}>
        
                    <View style={styles.cabecalhoChat}>
                      <Text style={styles.tituloChat}>Fale com os responsáveis</Text>
        
                      <Pressable onPress={() => setChatAberto(false)}>
                        <Text style={styles.botaoFecharChat}>✕</Text>
                      </Pressable>
                    </View>
        
                    <View style={styles.corpoChat}>
                      <Text style={styles.textoVazioChat}>
                        Nenhuma mensagem ainda. Escolha uma opção abaixo:
                      </Text>
                    </View>
        
                    <View style={styles.rodapeChat}>
        
                      <Pressable style={styles.botaoFrase}>
                        <Text style={styles.textoBotaoFrase}>Vou me atrasar por conta do trânsito</Text>
                      </Pressable>
        
                      <Pressable style={styles.botaoFrase}>
                        <Text style={styles.textoBotaoFrase}>Problema mecânico</Text>
                      </Pressable>
        
                      <Pressable style={[styles.botaoFrase, styles.botaoFrasePersonalizada]}>
                        <Text style={styles.textoBotaoFrasePersonalizada}>Mensagem Personalizada</Text>
                      </Pressable>
        
                    </View>
        
                  </View>
                </View>
              </Modal>

      </View>

      <Pressable
        style={[styles.botaoRedondo, styles.botaoRedondoAmarelo, styles.botaoEsquerda, { bottom: 110 }]}
        onPress={() => router.push('/criarrota')}
      >
        <Image
          source={require('../../assets/images/mais.png')}
          style={styles.iconeBotaoMais}
        />
      </Pressable>

      <Pressable 
        style={[styles.botaoRedondo, { bottom: 110 }]}
        onPress={() => setChatAberto(true)}
      >



        <Image
          source={require('../../assets/images/sirene.png')}
          style={styles.iconeBotaoSirene}
        />
      </Pressable>

      <View style={styles.barraInferior}>

        <Pressable style={styles.itemTab}onPress={() => router.push('/mapamotorista')}>
          <Image
            source={require('../../assets/images/localizacao.png')}
            style={styles.Localizacao}
          />
        </Pressable>

        <Pressable style={styles.itemTabAtivo}>
          <Image
            source={require('../../assets/images/home.png')}
            style={styles.Casinha}
          />
        </Pressable>

        <Pressable style={styles.itemTab} onPress={() => router.push('/menumotorista')}>
          <Image
            source={require('../../assets/images/menu.png')}
            style={styles.Risco}
          />
        </Pressable>

      </View>

    </View>
  );
}
