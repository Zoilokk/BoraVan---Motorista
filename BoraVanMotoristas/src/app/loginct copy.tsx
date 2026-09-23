import { loginctCopyStyles as styles } from '@/styles';
import { useState } from 'react';
import {TextInput,View,Text,Pressable,Image} from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.telaToda}>


      <Pressable style={styles.backButton} onPress={() => router.push('/')}>
        <Image
          source={require('../../assets/images/seta.png')}
          style={styles.foto}
        />
      </Pressable>

      <View style={styles.logoContainer}>
        <Text style={[styles.logo, styles.bora]}>BORA</Text>
        <Text style={[styles.logo, styles.van]}>VAN</Text>
      </View>


      
      <View style={styles.formulario}>

        <Text style={styles.label}>Email:</Text>

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha:</Text>

        <TextInput
          style={styles.input}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <Pressable
          style={styles.recuperarContainer}
          onPress={() => router.push('/')}
        >
          <Text style={styles.link}>
            recuperar senha
          </Text>
        </Pressable>

      </View>

      
      <View style={styles.parteInferior}>

        <Pressable
          style={styles.botao}
          onPress={() => router.push('/motorista')}
        >
          <Text style={styles.textoBotao}>
            Entrar
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push('/criarcontamotorista')}
        >
          <Text style={styles.linkCriar}>
            criar conta
          </Text>
        </Pressable>

      </View>

    </View>
  );
}
