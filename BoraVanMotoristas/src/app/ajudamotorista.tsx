import { ajudamotoristaStyles as styles } from '@/styles';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View,} from 'react-native';

const PERGUNTAS = [
  {
    pergunta: 'Como eu marco que aviso que tive um problema?',
    resposta: 'Na tela inicial, toque no ícone de aviso e escolha uma das mensagens predefinidas.',
  },
  {
    pergunta: 'Como crio uma rota nova?',
    resposta: 'Toque no botão redondo azul com o ícone de mais na tela inicial e crie uma nova rota.',
  },
  {
    pergunta: 'Como sei quem vai ou não vai?',
    resposta: 'Na tela inicial, existe uma lista com os nomes dos alunos e um ícone ao lado de cada um para saber se vão ou não vão.',
  },
  {
    pergunta: 'Esqueci minha senha, o que fazer?',
    resposta: 'Na tela de login, toque em "recuperar senha" e siga as instruções enviadas para o seu email.',
  },
];

export default function AjudaScreen() {
  return (
    <View style={styles.telaToda}>

      <View style={styles.cabecalho}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Image
            source={require('../../assets/images/seta.png')}
            style={styles.iconeVoltar}
          />
        </Pressable>

        <Text style={styles.textoCabecalho}>Ajuda</Text>

        <View style={styles.espacoVazio} />
      </View>
      <View style={styles.linhaAmarela} />

      <ScrollView style={styles.conteudo} contentContainerStyle={styles.conteudoInterno}>

        {PERGUNTAS.map((item, index) => (
          <View key={index} style={styles.cardPergunta}>
            <Text style={styles.textoPergunta}>{item.pergunta}</Text>
            <Text style={styles.textoResposta}>{item.resposta}</Text>
          </View>
        ))}

        <View style={styles.cardContato}>
          <Text style={styles.textoContatoTitulo}>Ainda precisa de ajuda?</Text>
          <Text style={styles.textoContato}>
            Fale com nossa equipe de suporte pelo email boravantcc@gmail.com
          </Text>
        </View>

      </ScrollView>

      <View style={styles.barraInferior}>

        <Pressable style={styles.itemTab} onPress={() => router.push('/mapa')}>
          <Image
            source={require('../../assets/images/localizacao.png')}
            style={styles.Localizacao}
          />
        </Pressable>

        <Pressable style={styles.itemTab} onPress={() => router.push('/nvai')}>
          <Image
            source={require('../../assets/images/home.png')}
            style={styles.Casinha}
          />
        </Pressable>

        <Pressable style={styles.itemTabAtivo} onPress={() => router.push('/menu')}>
          <Image
            source={require('../../assets/images/menu.png')}
            style={styles.Risco}
          />
        </Pressable>

      </View>

    </View>
  );
}
