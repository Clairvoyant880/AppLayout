import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const urlImagem1 = "https://th.bing.com/th/id/OIP.a4IjmomZra7KH6yd8Uv7egHaFs?w=264&h=203&c=7&r=0&o=5&pid=1.7"
  const urlImagem2 = "https://icons.getbootstrap.com/icons/list/"
  return (
    <View style={styles.container}>
    <View style={styles.segundoContainer}>
      <Ionicons name="menu" size={24} color="white"/> 
      <AntDesign name="search1" size={24} color="white" />
      <Text style={styles.nome1}>Astra Computers</Text></View>
    <View style={styles.terceiroContainer}></View>
    <Text style={styles.texto}></Text>
    <Image
      source={{uri:urlImagem1}}
      style={styles.imagem}
    />
    <Text style={styles.nomeproduto}>Monitor Astra 4k</Text>
    <Text style={styles.descricao}>O monitor Astra 4K é um equipamento de alta qualidade desenvolvido para proporcionar uma experiência visual superior. Com uma resolução de 3840 x 2160 pixels, este monitor oferece imagens incrivelmente nítidas e detalhadas, tornando-o ideal para profissionais que trabalham com design gráfico, edição de vídeo e fotografia, bem como para gamers e entusiastas de tecnologia que buscam a melhor qualidade de imagem.</Text>
    <Button
    title='Add to Cart'
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  segundoContainer:
  {
    backgroundColor: '#005ac3',
    width: 500,
    height: 80
  },

  nome1:
  {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  terceiroContainer:
  {
    backgroundColor: '#0075ff',
    width:500,
    height: 80,
  },

  texto:
  {
    backgroundColor: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },

  imagem:
  {
    marginTop: 30,
    alignSelf: 'center',
    width: 300,
    height: 350,
    resizeMode: 'contain',
  },

  nomeproduto:
  {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding:10
  },

  descricao:
  {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    padding: 10
  }
});
