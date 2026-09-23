import { perfilmotStyles as styles } from '@/styles';
import { useState } from 'react';
import {View,Text,Pressable,Image,Modal,}
from 'react-native';
import { router } from 'expo-router';

export default function Cadastro() {
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const confirmarFalta = () => {
    setMostrarPopup(false);
  };

  return (
    <>
      <View style={styles.cabecalho}>

        <View style={styles.logoContainer}>
          <Text style={[styles.logo, styles.bora]}>BORA</Text>
          <Text style={[styles.logo, styles.van]}>VAN</Text>
        </View>

        <Pressable
          style={styles.backButton}
          onPress={() => router.push('/motorista')}
        >
          <Image
            source={require('../../assets/images/seta.png')}
            style={styles.foto}
          />
        </Pressable>

      </View>

      <View style={styles.linhaAmarela} />


<View style={styles.perfilContainer}>

  <View style={styles.perfil}>
    <Image
      source={require('../../assets/images/perfil.png')}
      style={styles.imagemPerfil}
    />

    <Pressable
      style={styles.botaoEditar}
      onPress={() => router.push('/')}
    >
        <Image
      source={require('../../assets/images/user.png')}
      style={styles.iconeEditar}
    />

    </Pressable>
  </View>

  <Text style={styles.nomePerfil}>
    Alexandre Amorim
  </Text>

</View>



<View style={styles.container}>

  <View style={styles.campo}>
    <Text style={styles.texto}>
      alexandre.amorim@gmail.com
    </Text>
  </View>

  <View style={styles.campo}>
    <Text style={styles.texto}>
      Rua Passaros 24, Recanto das Aves
    </Text>
  </View>

  <View style={styles.campo}>
    <Text style={styles.texto}>
      
    </Text>
  </View>

  <View style={styles.campo}>
    <Text style={styles.texto}>
      +55 11 91234-5678
    </Text>
  </View>

  <Pressable
  style={styles.botao}
  onPress={() => router.push('/')}
>
  <Text style={styles.textoBotao}>
    editar perfil
  </Text>
</Pressable>

</View>










      <View style={styles.barraInferior}>

        <Pressable
          style={styles.itemTab}
          onPress={() => router.push('/mapamotorista')}
        >
          <Image
            source={require('../../assets/images/localizacao.png')}
            style={styles.Localizacao}
          />
        </Pressable>

        <Pressable style={styles.itemTabAtivo}
        onPress={()=> router.push('/motorista')}>
          <Image
            source={require('../../assets/images/home.png')}
            style={styles.Casinha}
          />
        </Pressable>

        <Pressable
          style={styles.itemTab}
          onPress={() => router.push('/menumotorista')}
        >
          <Image
            source={require('../../assets/images/menu.png')}
            style={styles.Risco}
          />
        </Pressable>

    </View>
    </>
  );
}
