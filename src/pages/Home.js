import React from 'react';
import {
  SafeAreaView,
  Text, 
  ImageBackground, 
  TouchableOpacity
} from 'react-native';
import { styles } from '../styles/styles';

//Funções
const alertar = ()=>{
  alert("Testando");
}

const Home = (navigation) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.image} source={require('../../public/assets/images/backgound.jpg')}>
      <Text style={styles.title}>Star Wars</Text>
      <Text style={styles.p}>Fonte de dados quantificada e programaticamente acessível para todos os dados do universo canônico de Star Wars!</Text>
      <TouchableOpacity enabled onPress={() => navigation.navigate('Films')}><Text style={styles.botao}>Começar</Text></TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;