import { criarcontamotoristaStyles as styles } from '@/styles';
import { useState } from 'react';
import {TextInput,View,Text,Pressable,Image, ScrollView} from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
const [telefone, setTelefone] = useState('');
const [telefoneEmergencia, setTelefoneEmergencia] = useState('');
const [cpf, setCpf] = useState('');
const [cep, setCep] = useState('');
const [endereco, setEndereco] = useState('');
const [complemento, setComplemento] = useState('');


  return (
    <View style={styles.telaToda}>

       <ScrollView showsVerticalScrollIndicator={false}
       showsHorizontalScrollIndicator={false}>
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

        <Text style={styles.text1}>Dados do Motorista:</Text>
        
        <Text style={styles.styledacaixinha}>Nome:</Text>
<TextInput
  style={styles.input}
  value={nome}
  onChangeText={setNome}
/>
    <Text style={styles.styledacaixinha}>E-mail:</Text>
<TextInput
  style={styles.input}
 
  keyboardType="email-address"
  value={email}
  onChangeText={setEmail}
/>
<Text style={styles.styledacaixinha}>Senha:</Text>

<TextInput
  style={styles.input}

  secureTextEntry
  value={senha}
  onChangeText={setSenha}
/>
<Text style={styles.styledacaixinha}>Telefone:</Text>
<TextInput
  style={styles.input}
 
  keyboardType="phone-pad"
  value={telefone}
  onChangeText={setTelefone}
/>
<Text style={styles.styledacaixinha}>Telefone de emergência:</Text>
<TextInput
  style={styles.input}
  
  keyboardType="phone-pad"
  value={telefoneEmergencia}
  onChangeText={setTelefoneEmergencia}
/>
<Text style={styles.styledacaixinha}>Cpf:</Text>
<TextInput
  style={styles.input}
  
  keyboardType="numeric"
  value={cpf}
  onChangeText={setCpf}
/>
<Text style={styles.styledacaixinha}>Cep:</Text>
<TextInput
  style={styles.input}

  keyboardType="numeric"
  value={cep}
  onChangeText={setCep}
/>

<Text style={styles.styledacaixinha}>Endereço:</Text>

<TextInput
  style={styles.input}
  
  value={endereco}
  onChangeText={setEndereco}
/>
<Text style={styles.styledacaixinha}>Complemento:</Text>
<TextInput
  style={styles.input}
  
  value={complemento}
  onChangeText={setComplemento}
/>

      </View>

      
      <View style={styles.parteInferior}>

        <Pressable
          style={styles.botao}
          onPress={() => router.push('/loginct copy')}
        >
          <Text style={styles.textoBotao}>Cadastrar</Text>
          
        </Pressable>
          
        

      </View>
      </ScrollView>
    </View>
    
  );
}
