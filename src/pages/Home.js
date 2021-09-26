import React, {useEffect, useRef} from 'react';
import {
    SafeAreaView,
    Animated,
    Text,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true
            }
        ).start();
    }, [fadeAnim])

    return (
    <SafeAreaView style={styles.container}>
        <Animated.View                 // Special animatable View
            style={{
                opacity: fadeAnim,         // Bind opacity to animated value
            }}>
          <ImageBackground style={styles.image} source={require('../assets/images/backgound.jpg')}>
              <Text style={styles.title}>Star Wars</Text>
              <Text style={styles.p}>Fonte de dados quantificada e programaticamente acessível para todos os dados do universo canônico de Star Wars!</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Filmes')}>
                  <Text style={styles.botao}>Começar</Text>
              </TouchableOpacity>
          </ImageBackground>
        </Animated.View>
    </SafeAreaView>
    );
};

export default Home;