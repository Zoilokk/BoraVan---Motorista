import { configmotoristaStyles as styles } from '@/styles';
import { useState } from 'react';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, Switch, Text, View } from 'react-native';

export default function ConfiguracoesScreen() {
  const [notificacoes, setNotificacoes] = useState(true);
  const [alertasAtraso, setAlertasAtraso] = useState(true);

  return (
    <View style={styles.telaToda}>

      <View style={styles.cabecalho}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Image
            source={require('../../assets/images/seta.png')}
            style={styles.iconeVoltar}
          />
        </Pressable>

        <Text style={styles.textoCabecalho}>Configurações</Text>

        <View style={styles.espacoVazio} />
      </View>
      <View style={styles.linhaAmarela} />

      <ScrollView style={styles.conteudo} contentContainerStyle={styles.conteudoInterno}>

        <Text style={styles.tituloSecao}>Notificações</Text>

        <View style={styles.cardOpcao}>
          <View style={styles.itemOpcao}>
            <Text style={styles.textoOpcao}>Notificações gerais</Text>
            <Switch
              value={notificacoes}
              onValueChange={setNotificacoes}
              trackColor={{ false: '#333333', true: '#F4B400' }}
              thumbColor="#FFFFFF"
            />
          </View>

          <View style={styles.divisor} />

          <View style={styles.itemOpcao}>
            <Text style={styles.textoOpcao}>Alertas de atraso</Text>
            <Switch
              value={alertasAtraso}
              onValueChange={setAlertasAtraso}
              trackColor={{ false: '#333333', true: '#F4B400' }}
              thumbColor="#FFFFFF"
            />
          </View>
        </View>

        <Text style={styles.tituloSecao}>Conta</Text>

        <View style={styles.cardOpcao}>
          <Pressable style={styles.itemOpcaoLink} onPress={() => router.push('/perfilmot')}>
            <Text style={styles.textoOpcao}>Editar perfil</Text>
            <Text style={styles.seta}>›</Text>
          </Pressable>

          <View style={styles.divisor} />

          <Pressable style={styles.itemOpcaoLink} onPress={() => router.push('/')}>
            <Text style={styles.textoOpcao}>Alterar senha</Text>
            <Text style={styles.seta}>›</Text>
          </Pressable>
        </View>

        <Text style={styles.tituloSecao}>Sobre</Text>

        <View style={styles.cardOpcao}>
          <View style={styles.itemOpcao}>
            <Text style={styles.textoOpcao}>Versão do app</Text>
            <Text style={styles.textoVersao}>1.0.0</Text>
          </View>
        </View>

      </ScrollView>

      <View style={styles.barraInferior}>

        <Pressable style={styles.itemTab} onPress={() => router.push('/mapamotorista')}>
          <Image
            source={require('../../assets/images/localizacao.png')}
            style={styles.Localizacao}
          />
        </Pressable>

        <Pressable style={styles.itemTab} onPress={() => router.push('/motorista')}>
          <Image
            source={require('../../assets/images/home.png')}
            style={styles.Casinha}
          />
        </Pressable>

        <Pressable style={styles.itemTabAtivo} onPress={() => router.push('/menumotorista')}>
          <Image
            source={require('../../assets/images/menu.png')}
            style={styles.Risco}
          />
        </Pressable>

      </View>

    </View>
  );
}
