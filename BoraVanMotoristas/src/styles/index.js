// Estilos de todas as telas e valores globais do tema.
import { Platform, StyleSheet } from 'react-native';

export const Colors = /** @type {const} */ ({
  light: {
    text: '#000000',
    background: '#ffffff',
    backgroundElement: '#F0F0F3',
    backgroundSelected: '#E0E1E6',
    textSecondary: '#60646C',
  },
  dark: {
    text: '#ffffff',
    background: '#000000',
    backgroundElement: '#212225',
    backgroundSelected: '#2E3135',
    textSecondary: '#B0B4BA',
  },
});


export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "Spline Sans, Inter, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  },
});

export const Spacing = /** @type {const} */ ({
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
});

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;

const NAVY = '#0E2A4E';
const YELLOW = '#F4B400';
const WHITE = 'rgb(255, 255, 255)';

// ajuda.tsx
export const ajudaStyles = StyleSheet.create({

  telaToda: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  cabecalho: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },

  backButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  iconeVoltar: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

  textoCabecalho: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
  },

  espacoVazio: {
    width: 36,
  },

  linhaAmarela: {
    height: 3,
    backgroundColor: '#F4B400',
  },

  conteudo: {
    flex: 1,
  },

  conteudoInterno: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
    gap: 12,
  },

  cardPergunta: {
    backgroundColor: '#F0F4F8',
    borderRadius: 12,
    padding: 14,
  },

  textoPergunta: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '700',
    color: '#0E2A4E',
    marginBottom: 6,
  },

  textoResposta: {
    fontSize: 13,
    color: '#555555',
    lineHeight: 18,
  },

  cardContato: {
    backgroundColor: '#0E2A4E',
    borderRadius: 12,
    padding: 16,
    marginTop: 4,
  },

  textoContatoTitulo: {
    color: '#F4B400',
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '700',
    marginBottom: 6,
  },

  textoContato: {
    color: '#FFFFFF',
    fontSize: 13,
    lineHeight: 18,
  },

  barraInferior: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: '#F4B400',
  },

  itemTab: {
    backgroundColor: '#001E47',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemTabAtivo: {
    backgroundColor: '#0E2A4E',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Casinha: {
    marginLeft: 10,
    width: 70,
    height: 100,
    resizeMode: 'contain',
  },

  Localizacao: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  Risco: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
  },

});

// ajudamotorista.tsx
export const ajudamotoristaStyles = StyleSheet.create({

  telaToda: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  cabecalho: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },

  backButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  iconeVoltar: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

  textoCabecalho: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
  },

  espacoVazio: {
    width: 36,
  },

  linhaAmarela: {
    height: 3,
    backgroundColor: '#F4B400',
  },

  conteudo: {
    flex: 1,
  },

  conteudoInterno: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
    gap: 12,
  },

  cardPergunta: {
    backgroundColor: '#F0F4F8',
    borderRadius: 12,
    padding: 14,
  },

  textoPergunta: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '700',
    color: '#0E2A4E',
    marginBottom: 6,
  },

  textoResposta: {
    fontSize: 13,
    color: '#555555',
    lineHeight: 18,
  },

  cardContato: {
    backgroundColor: '#0E2A4E',
    borderRadius: 12,
    padding: 16,
    marginTop: 4,
  },

  textoContatoTitulo: {
    color: '#F4B400',
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '700',
    marginBottom: 6,
  },

  textoContato: {
    color: '#FFFFFF',
    fontSize: 13,
    lineHeight: 18,
  },

  barraInferior: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: '#F4B400',
  },

  itemTab: {
    backgroundColor: '#001E47',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemTabAtivo: {
    backgroundColor: '#0E2A4E',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Casinha: {
    marginLeft: 10,
    width: 70,
    height: 100,
    resizeMode: 'contain',
  },

  Localizacao: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  Risco: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
  },

});

// cadastroresp.tsx
export const cadastrorespStyles = StyleSheet.create({
styledacaixinha: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 6,
},


    nomeresponsavel: {
    color: '#FFFFFF',
  fontSize: 13,
  fontStyle: 'italic',
  fontWeight: '400',
  
   },

  telaToda: {
    flex: 1,
    backgroundColor: '#062653',
    paddingHorizontal: 31,
    paddingTop: 60,
  },
text1: {
     color: '#FFFFFF',
    fontSize: 21,
    fontStyle: 'italic',
    marginBottom: 3,
    textAlign: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },

  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  bora: {
    color: '#FFFFFF',
  },

  van: {
    color: '#F5B800',
  },

  formulario: {
    marginTop: 17,
  },


  input: {
   height: 38,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 22,
    fontSize: 14,
  },

  recuperarContainer: {
    alignItems: 'center',
    marginTop: 0,
  },

  tenhoconta: {
    color: '#FFFFFF',
    fontSize: 12,
    textDecorationLine: 'underline',
  },

  parteInferior: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 69,
  },

  botao: {
    width: '100%',
    height: 39,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotao: {
    color: '#333333',
    fontSize: 16,
    fontStyle: 'italic',
  },

  linkCriar: {
    color: '#FFFFFF',
    fontSize: 12,
    textDecorationLine: 'underline',
    marginTop: 8,
  },

  backButton: {
    position: 'absolute',
    left: 23,
    top: 62,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  foto: {
    
    height: 22,
    marginRight: 10,
    resizeMode: 'contain',
    marginTop: -110,
  },

});

// config.tsx
export const configStyles = StyleSheet.create({

  telaToda: {
    flex: 1,
    backgroundColor: '#0E2A4E',
  },

  cabecalho: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },

  backButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  iconeVoltar: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

  textoCabecalho: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
  },

  espacoVazio: {
    width: 36,
  },

  linhaAmarela: {
    height: 3,
    backgroundColor: '#F4B400',
  },

  conteudo: {
    flex: 1,
  },

  conteudoInterno: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },

  tituloSecao: {
    fontSize: 13,
    fontStyle: 'italic',
    fontWeight: '700',
    color: '#F4B400',
    marginTop: 16,
    marginBottom: 8,
    textTransform: 'uppercase',
  },

  cardOpcao: {
    backgroundColor: '#001E47',
    borderRadius: 12,
    overflow: 'hidden',
  },

  itemOpcao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },

  itemOpcaoLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },

  textoOpcao: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#FFFFFF',
  },

  textoVersao: {
    fontSize: 14,
    fontStyle: 'italic',
    color: 'rgba(255,255,255,0.5)',
  },

  seta: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.5)',
  },

  divisor: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginLeft: 16,
  },

  barraInferior: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: '#F4B400',
  },

  itemTab: {
    backgroundColor: '#001E47',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemTabAtivo: {
    backgroundColor: '#0E2A4E',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Casinha: {
    marginLeft: 10,
    width: 70,
    height: 100,
    resizeMode: 'contain',
  },

  Localizacao: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  Risco: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
  },

});

// configmotorista.tsx
export const configmotoristaStyles = StyleSheet.create({

  telaToda: {
    flex: 1,
    backgroundColor: '#0E2A4E',
  },

  cabecalho: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },

  backButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  iconeVoltar: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

  textoCabecalho: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
  },

  espacoVazio: {
    width: 36,
  },

  linhaAmarela: {
    height: 3,
    backgroundColor: '#F4B400',
  },

  conteudo: {
    flex: 1,
  },

  conteudoInterno: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },

  tituloSecao: {
    fontSize: 13,
    fontStyle: 'italic',
    fontWeight: '700',
    color: '#F4B400',
    marginTop: 16,
    marginBottom: 8,
    textTransform: 'uppercase',
  },

  cardOpcao: {
    backgroundColor: '#001E47',
    borderRadius: 12,
    overflow: 'hidden',
  },

  itemOpcao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },

  itemOpcaoLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },

  textoOpcao: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#FFFFFF',
  },

  textoVersao: {
    fontSize: 14,
    fontStyle: 'italic',
    color: 'rgba(255,255,255,0.5)',
  },

  seta: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.5)',
  },

  divisor: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginLeft: 16,
  },

  barraInferior: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: '#F4B400',
  },

  itemTab: {
    backgroundColor: '#001E47',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemTabAtivo: {
    backgroundColor: '#0E2A4E',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Casinha: {
    marginLeft: 10,
    width: 70,
    height: 100,
    resizeMode: 'contain',
  },

  Localizacao: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  Risco: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
  },

});

// crianca.tsx
export const criancaStyles = StyleSheet.create({
nomecrianca: {
    color: '#FFFFFF',
  fontSize: 13,
  fontStyle: 'italic',
  fontWeight: '400',
  
   },

  telaToda: {
    flex: 1,
    backgroundColor: '#062653',
    paddingHorizontal: 31,
    paddingTop: 60,
  },
text1: {
     color: '#FFFFFF',
    fontSize: 21,
    fontStyle: 'italic',
    marginBottom: 3,
    textAlign: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },

  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  bora: {
    color: '#FFFFFF',
  },

  van: {
    color: '#F5B800',
  },

  formulario: {
    marginTop: 17,
  },

  label: {
    color: '#FFFFFF',
    fontSize: 13,
    fontStyle: 'italic',
    marginBottom: 3,
  },

  input: {
    height: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginBottom: 29,
    fontSize: 12,
  },

  recuperarContainer: {
    alignItems: 'center',
    marginTop: 0,
  },

  tenhoconta: {
    color: '#FFFFFF',
    fontSize: 12,
    textDecorationLine: 'underline',
  },

  parteInferior: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 69,
  },

  botao: {
    width: '100%',
    height: 39,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotao: {
    color: '#333333',
    fontSize: 16,
    fontStyle: 'italic',
  },

  linkCriar: {
    color: '#FFFFFF',
    fontSize: 12,
    textDecorationLine: 'underline',
    marginTop: 8,
  },

  backButton: {
    position: 'absolute',
    left: 23,
    top: 62,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  foto: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

});

// criarcontamotorista.tsx
export const criarcontamotoristaStyles = StyleSheet.create({
styledacaixinha: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 6,
},


    nomeresponsavel: {
    color: '#FFFFFF',
  fontSize: 13,
  fontStyle: 'italic',
  fontWeight: '400',
  
   },

  telaToda: {
    flex: 1,
    backgroundColor: '#062653',
    paddingHorizontal: 31,
    paddingTop: 60,
  },
text1: {
     color: '#FFFFFF',
    fontSize: 21,
    fontStyle: 'italic',
    marginBottom: 3,
    textAlign: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },

  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  bora: {
    color: '#FFFFFF',
  },

  van: {
    color: '#F5B800',
  },

  formulario: {
    marginTop: 17,
  },


  input: {
   height: 38,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 22,
    fontSize: 14,
  },

  recuperarContainer: {
    alignItems: 'center',
    marginTop: 0,
  },

  tenhoconta: {
    color: '#FFFFFF',
    fontSize: 12,
    textDecorationLine: 'underline',
  },

  parteInferior: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 69,
  },

  botao: {
    width: '100%',
    height: 39,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotao: {
    color: '#333333',
    fontSize: 16,
    fontStyle: 'italic',
  },

  linkCriar: {
    color: '#FFFFFF',
    fontSize: 12,
    textDecorationLine: 'underline',
    marginTop: 8,
  },

  backButton: {
    position: 'absolute',
    left: 23,
    top: 62,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  foto: {
    
    height: 22,
    marginRight: 10,
    resizeMode: 'contain',
    marginTop: -110,
  },

});

// criarrota.tsx
export const criarrotaStyles = StyleSheet.create({

  telaToda: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  cabecalho: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },

  backButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  iconeVoltar: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

  textoCabecalho: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
  },

  espacoVazio: {
    width: 36,
  },

  linhaAmarela: {
    height: 3,
    backgroundColor: '#F4B400',
  },

  conteudo: {
    flex: 1,
  },

  conteudoInterno: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },

  label: {
    fontSize: 13,
    fontStyle: 'italic',
    fontWeight: '700',
    color: '#0E2A4E',
    marginTop: 14,
    marginBottom: 6,
  },

  input: {
    height: 44,
    backgroundColor: '#F0F4F8',
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#333333',
  },

  textoVazio: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#999999',
    marginBottom: 8,
  },

  cardResponsavel: {
    backgroundColor: '#F0F4F8',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  nomeResponsavel: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#333333',
  },

  tagResponsavel: {
    fontSize: 11,
    color: '#999999',
    marginTop: 2,
  },

  botaoRemover: {
    fontSize: 16,
    color: '#E74C3C',
    fontWeight: '700',
  },

  botaoAdicionar: {
    backgroundColor: '#0E2A4E',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBotaoAdicionar: {
    color: '#FFFFFF',
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '600',
  },

  botaoAdicionarSecundario: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#0E2A4E',
  },

  textoBotaoAdicionarSecundario: {
    color: '#0E2A4E',
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '600',
  },

  rodape: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },

  botaoCriar: {
    backgroundColor: '#F4B400',
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
  },

  textoBotaoCriar: {
    color: '#0E2A4E',
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: '700',
  },

  fundoPopup: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  caixaPopup: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: '85%',
  },

  tituloPopup: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0E2A4E',
    marginBottom: 8,
  },

  textoPopup: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 16,
  },

  inputPopup: {
    height: 44,
    backgroundColor: '#F0F4F8',
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#333333',
    marginBottom: 10,
  },

  botoesPopup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: 6,
  },

  botaoPopup: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
  },

  botaoCancelar: {
    backgroundColor: '#EEEEEE',
  },

  botaoConfirmarAzul: {
    backgroundColor: '#0E2A4E',
  },

  textoBotaoCancelar: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '600',
  },

  textoBotaoConfirmar: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

});

// index.tsx
export const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NAVY,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.four,
    paddingBottom: Spacing.four,
  },
  logoWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Spacing.four * 2,
  },
  logo: {
    fontSize: 28,
    fontWeight: '800',
    fontStyle: 'italic',
    color: WHITE,
    letterSpacing: 0.5,
  },
  logoAccent: {
    color: YELLOW,
  },
  buttonsWrapper: {
    gap: Spacing.three,
  },
  button: {
    backgroundColor: WHITE,
    borderRadius: 999,
    paddingVertical: Spacing.four,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: NAVY,
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: '600',
  },
});

// loginct copy.tsx
export const loginctCopyStyles = StyleSheet.create({

  telaToda: {
    flex: 1,
    backgroundColor: '#062653',
    paddingHorizontal: 31,
    paddingTop: 60,
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },

  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  bora: {
    color: '#FFFFFF',
  },

  van: {
    color: '#F4B400',
  },

  formulario: {
    marginTop: 17,
  },

  label: {
    color: '#FFFFFF',
    fontSize: 13,
    fontStyle: 'italic',
    marginBottom: 3,
  },

  input: {
    height: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginBottom: 29,
    fontSize: 12,
  },

  recuperarContainer: {
    alignItems: 'center',
    marginTop: 0,
  },

  link: {
    color: '#FFFFFF',
    fontSize: 12,
    textDecorationLine: 'underline',
  },

  parteInferior: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 69,
  },

  botao: {
    width: '100%',
    height: 39,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotao: {
    color: '#333333',
    fontSize: 16,
    fontStyle: 'italic',
  },

  linkCriar: {
    color: '#FFFFFF',
    fontSize: 12,
    textDecorationLine: 'underline',
    marginTop: 8,
  },

  backButton: {
    position: 'absolute',
    left: 23,
    top: 62,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  foto: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

});

// loginct.tsx
export const loginctStyles = StyleSheet.create({

  telaToda: {
    flex: 1,
    backgroundColor: '#062653',
    paddingHorizontal: 31,
    paddingTop: 60,
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },

  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  bora: {
    color: '#FFFFFF',
  },

  van: {
    color: '#F4B400',
  },

  formulario: {
    marginTop: 17,
  },

  label: {
    color: '#FFFFFF',
    fontSize: 13,
    fontStyle: 'italic',
    marginBottom: 3,
  },

  input: {
    height: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginBottom: 29,
    fontSize: 12,
  },

  recuperarContainer: {
    alignItems: 'center',
    marginTop: 0,
  },

  link: {
    color: '#FFFFFF',
    fontSize: 12,
    textDecorationLine: 'underline',
  },

  parteInferior: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 69,
  },

  botao: {
    width: '100%',
    height: 39,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotao: {
    color: '#333333',
    fontSize: 16,
    fontStyle: 'italic',
  },

  linkCriar: {
    color: '#FFFFFF',
    fontSize: 12,
    textDecorationLine: 'underline',
    marginTop: 8,
  },

  backButton: {
    position: 'absolute',
    left: 23,
    top: 62,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  foto: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

});

// mapa.tsx
export const mapaStyles = StyleSheet.create({

  telaToda: {
    flex: 1,
    backgroundColor: '#0E2A4E',
  },

  cabecalho: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },

  textoCabecalho: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
  },

  avatar: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconeAvatar: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  linhaAmarela: {
    height: 3,
    backgroundColor: '#F4B400',
  },

  conteudo: {
    flex: 1,
  },

  imagemMapa: {
    width: '100%',
    height: '100%',
  },

  badgeTempo: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#0E2A4E',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  textoBadgeTempo: {
    color: '#FFFFFF',
    fontSize: 13,
    fontStyle: 'italic',
    fontWeight: '700',
  },

  badgeParadas: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#F4B400',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  textoBadgeParadas: {
    color: '#0E2A4E',
    fontSize: 13,
    fontStyle: 'italic',
    fontWeight: '700',
  },

  barraInferior: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: '#F4B400',
  },

  itemTab: {
    backgroundColor: '#001E47',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemTabAtivo: {
    backgroundColor: '#0E2A4E',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Casinha: {
    marginLeft: 10,
    width: 70,
    height: 100,
    resizeMode: 'contain',
  },

  Localizacao: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  Risco: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
  },

});

// mapamotorista.tsx
export const mapamotoristaStyles = StyleSheet.create({

  telaToda: {
    flex: 1,
    backgroundColor: '#0E2A4E',
  },

  cabecalho: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },

  textoCabecalho: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
  },

  avatar: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconeAvatar: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  linhaAmarela: {
    height: 3,
    backgroundColor: '#F4B400',
  },

  conteudo: {
    flex: 1,
  },

  imagemMapa: {
    width: '100%',
    height: '100%',
  },

  badgeTempo: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#0E2A4E',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  textoBadgeTempo: {
    color: '#FFFFFF',
    fontSize: 13,
    fontStyle: 'italic',
    fontWeight: '700',
  },

  badgeParadas: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#F4B400',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  textoBadgeParadas: {
    color: '#0E2A4E',
    fontSize: 13,
    fontStyle: 'italic',
    fontWeight: '700',
  },

  barraInferior: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: '#F4B400',
  },

  itemTab: {
    backgroundColor: '#001E47',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemTabAtivo: {
    backgroundColor: '#0E2A4E',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Casinha: {
    marginLeft: 10,
    width: 70,
    height: 100,
    resizeMode: 'contain',
  },

  Localizacao: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  Risco: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
  },

});

// menu.tsx
export const menuStyles = StyleSheet.create({

  telaToda: {
    flex: 1,
    backgroundColor: '#0E2A4E',
  },

  cabecalho: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },

  textoCabecalho: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
  },

  linhaAmarela: {
    height: 3,
    backgroundColor: '#F4B400',
  },

  conteudo: {
    flex: 1,
    paddingTop: 10,
  },

  itemMenu: {
    paddingVertical: 18,
    paddingHorizontal: 24,
  },

  textoItemMenu: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#FFFFFF',
  },

  textoItemMenuSair: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#FF8080',
  },

  divisorMenu: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.15)',
    marginHorizontal: 24,
  },

  barraInferior: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: '#F4B400',
  },

  itemTab: {
    backgroundColor: '#001E47',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemTabAtivo: {
    backgroundColor: '#0E2A4E',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Casinha: {
    marginLeft: 10,
    width: 70,
    height: 100,
    resizeMode: 'contain',
  },

  Localizacao: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  Risco: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
  },

  fundoPopup: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  caixaPopup: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: '80%',
  },

  tituloPopup: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0E2A4E',
    marginBottom: 8,
  },

  textoPopup: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 20,
  },

  botoesPopup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },

  botaoPopup: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
  },

  botaoCancelar: {
    backgroundColor: '#EEEEEE',
  },

  botaoConfirmar: {
    backgroundColor: '#E74C3C',
  },

  textoBotaoCancelar: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '600',
  },

  textoBotaoConfirmar: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

});

// menumotorista.tsx
export const menumotoristaStyles = StyleSheet.create({

  telaToda: {
    flex: 1,
    backgroundColor: '#0E2A4E',
  },

  cabecalho: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },

  textoCabecalho: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
  },

  linhaAmarela: {
    height: 3,
    backgroundColor: '#F4B400',
  },

  conteudo: {
    flex: 1,
    paddingTop: 10,
  },

  itemMenu: {
    paddingVertical: 18,
    paddingHorizontal: 24,
  },

  textoItemMenu: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#FFFFFF',
  },

  textoItemMenuSair: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#FF8080',
  },

  divisorMenu: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.15)',
    marginHorizontal: 24,
  },

  barraInferior: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: '#F4B400',
  },

  itemTab: {
    backgroundColor: '#001E47',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemTabAtivo: {
    backgroundColor: '#0E2A4E',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Casinha: {
    marginLeft: 10,
    width: 70,
    height: 100,
    resizeMode: 'contain',
  },

  Localizacao: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  Risco: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
  },

  fundoPopup: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  caixaPopup: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: '80%',
  },

  tituloPopup: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0E2A4E',
    marginBottom: 8,
  },

  textoPopup: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 20,
  },

  botoesPopup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },

  botaoPopup: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
  },

  botaoCancelar: {
    backgroundColor: '#EEEEEE',
  },

  botaoConfirmar: {
    backgroundColor: '#E74C3C',
  },

  textoBotaoCancelar: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '600',
  },

  textoBotaoConfirmar: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

});

// motorista.tsx
export const motoristaStyles = StyleSheet.create({

  telaToda: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  cabecalho: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },

  textoCabecalho: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
  },

  avatar: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconeAvatar: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  linhaAmarela: {
    height: 3,
    backgroundColor: '#F4B400',
  },

  conteudo: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  imagemMapa: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 14,
  },

  listaContainer: {
    gap: 10,
    paddingBottom: 20,
  },

  cardAluno: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  nomeAluno: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#333333',
  },

  iconesStatus: {
    flexDirection: 'row',
    gap: 8,
  },

  circuloIcone: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoIcone: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  botaoRedondo: {
    position: 'absolute',
    right: 16,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#0E2A4E',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },

  botaoRedondoAmarelo: {
    backgroundColor: '#F4B400',
  },

  botaoEsquerda: {
    right: undefined,
    left: 16,
  },

  iconeBotaoMais: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },

  iconeBotaoSirene: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  barraInferior: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
  },

  itemTab: {
    backgroundColor: '#001E47',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemTabAtivo: {
    backgroundColor: '#0E2A4E',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Casinha: {
    marginLeft: 10,
    width: 70,
    height: 100,
    resizeMode: 'contain',
  },

  Localizacao: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  Risco: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
  },


    fundoChat: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },

    fundoChat: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },

  areaFecharChat: {
    flex: 1,
  },

  caixaChat: {
    height: '50%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },

  cabecalhoChat: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },

  tituloChat: {
    color: '#FFFFFF',
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: '600',
  },

  botaoFecharChat: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

  corpoChat: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },

  textoVazioChat: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#999999',
    textAlign: 'center',
    marginTop: 20,
  },

  rodapeChat: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },

  botaoFrase: {
    backgroundColor: '#F0F4F8',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignItems: 'center',
  },

  textoBotaoFrase: {
    color: '#0E2A4E',
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '600',
  },

  botaoFrasePersonalizada: {
    backgroundColor: '#F4B400',
  },

  textoBotaoFrasePersonalizada: {
    color: '#0E2A4E',
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '700',
  },
  });

// nvai.tsx
export const nvaiStyles = StyleSheet.create({

  telaToda: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  cabecalho: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },

  textoCabecalho: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
  },

  avatar: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconeAvatar: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  linhaAmarela: {
    height: 3,
    backgroundColor: '#F4B400',
  },

  conteudo: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  cardStatus: {
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  textoStatus: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#333333',
  },

  iconesStatus: {
    flexDirection: 'row',
    gap: 8,
  },

  circuloIcone: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoIcone: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  linha: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#333333',
    marginBottom: 10,
  },

  linhaValor: {
    fontWeight: '600',
    fontStyle: 'italic',
  },

  imagemMapa: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 10,
    resizeMode: 'cover',
  },

  cardMotorista: {
    backgroundColor: '#F0F4F8',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },

  fotoMotorista: {
    width: 46,
    height: 46,
    borderRadius: 23,
    resizeMode: 'cover',
  },

  infoMotorista: {
    flex: 1,
    marginLeft: 12,
  },

  nomeMotorista: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '700',
    color: '#0E2A4E',
  },

  textoSecundarioMotorista: {
    fontSize: 12,
    color: '#777777',
    marginTop: 2,
  },

  botaoLigar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F4B400',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotaoLigar: {
    fontSize: 18,
  },

  botaoRedondo: {
    position: 'absolute',
    right: 16,
    bottom: 110,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#0E2A4E',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },

  iconeBotaoRedondo: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },

  barraInferior: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: '#F4B400',
  },

  itemTab: {
    backgroundColor: '#001E47',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemTabAtivo: {
    backgroundColor: '#0E2A4E',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Casinha: {
    marginLeft: 10,
    width: 70,
    height: 100,
    resizeMode: 'contain',
  },

  Localizacao: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  Risco: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
  },

  fundoPopup: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  caixaPopup: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: '80%',
  },

  tituloPopup: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0E2A4E',
    marginBottom: 8,
  },

  textoPopup: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 20,
  },

  botoesPopup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },

  botaoPopup: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
  },

  botaoCancelar: {
    backgroundColor: '#EEEEEE',
  },

  botaoConfirmar: {
    backgroundColor: '#E74C3C',
  },

  textoBotaoCancelar: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '600',
  },

  textoBotaoConfirmar: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  fundoChat: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },

  areaFecharChat: {
    flex: 1,
  },

  caixaChat: {
    height: '50%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },

  cabecalhoChat: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },

  tituloChat: {
    color: '#FFFFFF',
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: '600',
  },

  botaoFecharChat: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

  corpoChat: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },

  textoVazioChat: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#999999',
    textAlign: 'center',
    marginTop: 20,
  },

  rodapeChat: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },

  botaoFrase: {
    backgroundColor: '#F0F4F8',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignItems: 'center',
  },

  textoBotaoFrase: {
    color: '#0E2A4E',
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '600',
  },

  botaoFrasePersonalizada: {
    backgroundColor: '#F4B400',
  },

  textoBotaoFrasePersonalizada: {
    color: '#0E2A4E',
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '700',
  },

});

// perfil.tsx
export const perfilStyles = StyleSheet.create({
  cabecalho: {
    backgroundColor: '#0E2A4E',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },

  logoContainer: {
    flexDirection: 'row',
  },

  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  bora: {
    color: '#FFFFFF',
  },

  van: {
    color: '#F5B800',
  },

  backButton: {
    position: 'absolute',
    left: 16,
    top: 60,
    width: 36,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  foto: {
    width: 22,
    height: 22,
  },

  linhaAmarela: {
    height: 3,
    backgroundColor: '#F4B400',
  },

  barraInferior: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
  },

  itemTab: {
    backgroundColor: '#001E47',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemTabAtivo: {
    backgroundColor: '#001E47',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Casinha: {
    marginLeft: 10,
    width: 70,
    height: 100,
    resizeMode: 'contain',
  },

  Localizacao: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  Risco: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
  },

 


container: {
  flex: 1,
  backgroundColor: '#FFFFFF',
  paddingTop: 10,
  paddingHorizontal: 15,
},

campo: {
  height: 31,
  backgroundColor: '#F0F0F0',
  marginBottom: 13,
  justifyContent: 'center',
  paddingHorizontal: 5,
},

texto: {
  fontSize: 13,
  fontStyle: 'italic',
  color: '#222222',
},

botao: {
  alignSelf: 'center',
  marginTop: 16,
  backgroundColor: '#F0F0F0',
  paddingHorizontal: 24,
  paddingVertical: 5,
  borderRadius: 10,

  elevation: 3,
},

textoBotao: {
  fontSize: 20,
  fontStyle: 'italic',
},
perfilContainer: {
  alignItems: 'center',
  marginTop: 20,
},

perfil: {
  position: 'relative',
},

imagemPerfil: {
  width: 170,
  height: 170,
  resizeMode: 'contain',
},



botaoEditar: {
  position: 'absolute',
  right: 10,
  top: 10,
},

iconeEditar: {
  width: 22,
  height: 22,
  resizeMode: 'contain',
},

nomePerfil: {
  fontSize: 16,
  fontStyle: 'italic',
  marginTop: 5,
},
});

// perfilmot.tsx
export const perfilmotStyles = StyleSheet.create({
  cabecalho: {
    backgroundColor: '#0E2A4E',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },

  logoContainer: {
    flexDirection: 'row',
  },

  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  bora: {
    color: '#FFFFFF',
  },

  van: {
    color: '#F5B800',
  },

  backButton: {
    position: 'absolute',
    left: 16,
    top: 60,
    width: 36,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  foto: {
    width: 22,
    height: 22,
  },

  linhaAmarela: {
    height: 3,
    backgroundColor: '#F4B400',
  },

  barraInferior: {
    backgroundColor: '#0E2A4E',
    flexDirection: 'row',
    alignItems: 'center',
  },

  itemTab: {
    backgroundColor: '#001E47',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemTabAtivo: {
    backgroundColor: '#001E47',
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Casinha: {
    marginLeft: 10,
    width: 70,
    height: 100,
    resizeMode: 'contain',
  },

  Localizacao: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  Risco: {
    width: 50,
    height: 100,
    resizeMode: 'contain',
  },

 


container: {
  flex: 1,
  backgroundColor: '#FFFFFF',
  paddingTop: 10,
  paddingHorizontal: 15,
},

campo: {
  height: 31,
  backgroundColor: '#F0F0F0',
  marginBottom: 13,
  justifyContent: 'center',
  paddingHorizontal: 5,
},

texto: {
  fontSize: 13,
  fontStyle: 'italic',
  color: '#222222',
},

botao: {
  alignSelf: 'center',
  marginTop: 16,
  backgroundColor: '#F0F0F0',
  paddingHorizontal: 24,
  paddingVertical: 5,
  borderRadius: 10,

  elevation: 3,
},

textoBotao: {
  fontSize: 20,
  fontStyle: 'italic',
},
perfilContainer: {
  alignItems: 'center',
  marginTop: 20,
},

perfil: {
  position: 'relative',
},

imagemPerfil: {
  width: 170,
  height: 170,
  resizeMode: 'contain',
},



botaoEditar: {
  position: 'absolute',
  right: 10,
  top: 10,
},

iconeEditar: {
  width: 22,
  height: 22,
  resizeMode: 'contain',
},

nomePerfil: {
  fontSize: 16,
  fontStyle: 'italic',
  marginTop: 5,
},
});
