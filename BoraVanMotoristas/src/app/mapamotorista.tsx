import { mapamotoristaStyles as styles } from '@/styles';
import { router } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';

export default function MapaScreen() {
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

        <View style={styles.badgeTempo}>
          <Text style={styles.textoBadgeTempo}>5 min</Text>
        </View>

        <View style={styles.badgeParadas}>
          <Text style={styles.textoBadgeParadas}>3 PARADAS</Text>
        </View>

      </View>

      <View style={styles.barraInferior}>

        <Pressable style={styles.itemTabAtivo}>
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
