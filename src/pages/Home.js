import React from 'react';
import {
  SafeAreaView,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.image} source={require('../assets/images/backgound.jpg')}>
          <Text style={styles.title}>Star Wars</Text>
          <Text style={styles.p}>Fonte de dados quantificada e programaticamente acessível para todos os dados do universo canônico de Star Wars!</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Filmes')}>
              <Text style={styles.botao}>Começar</Text>
          </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
    );
};

export default Home;