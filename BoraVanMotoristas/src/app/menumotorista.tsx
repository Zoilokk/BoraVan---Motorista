import { menumotoristaStyles as styles } from '@/styles';
import { useState } from 'react';
import { router } from 'expo-router';
import { Image, Modal, Pressable, Text, View } from 'react-native';

export default function MeuScreen() {
  const [mostrarPopupSair, setMostrarPopupSair] = useState(false);

  function confirmarSaida() {
    setMostrarPopupSair(false);
    router.push('/');
  }

  return (
    <View style={styles.telaToda}>

      <View style={styles.cabecalho}>
        <Text style={styles.textoCabecalho}>Menu</Text>
      </View>
      <View style={styles.linhaAmarela} />

      <View style={styles.conteudo}>

        <Pressable style={styles.itemMenu} onPress={() => router.push('/perfilmot')}>
          <Text style={styles.textoItemMenu}>Perfil</Text>
        </Pressable>

        <View style={styles.divisorMenu} />

        <Pressable style={styles.itemMenu} onPress={() => router.push('/configmotorista')}>
          <Text style={styles.textoItemMenu}>Configurações</Text>
        </Pressable>

        <View style={styles.divisorMenu} />

        <Pressable style={styles.itemMenu} onPress={() => router.push('/ajudamotorista')}>
          <Text style={styles.textoItemMenu}>Ajuda</Text>
        </Pressable>

        <View style={styles.divisorMenu} />

        <Pressable style={styles.itemMenu} onPress={() => setMostrarPopupSair(true)}>
          <Text style={styles.textoItemMenuSair}>Sair</Text>
        </Pressable>

        <View style={styles.divisorMenu} />

      </View>

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

        <Pressable style={styles.itemTabAtivo}>
          <Image
            source={require('../../assets/images/menu.png')}
            style={styles.Risco}
          />
        </Pressable>

      </View>

      <Modal
        visible={mostrarPopupSair}
        transparent
        animationType="fade"
        onRequestClose={() => setMostrarPopupSair(false)}
      >
        <View style={styles.fundoPopup}>
          <View style={styles.caixaPopup}>
            <Text style={styles.tituloPopup}>Sair</Text>
            <Text style={styles.textoPopup}>
              Tem certeza que deseja sair da sua conta?
            </Text>

            <View style={styles.botoesPopup}>
              <Pressable
                style={[styles.botaoPopup, styles.botaoCancelar]}
                onPress={() => setMostrarPopupSair(false)}
              >
                <Text style={styles.textoBotaoCancelar}>Cancelar</Text>
              </Pressable>

              <Pressable
                style={[styles.botaoPopup, styles.botaoConfirmar]}
                onPress={confirmarSaida}
              >
                <Text style={styles.textoBotaoConfirmar}>Sair</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
}
