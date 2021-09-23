
//Inport
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Touchable, TouchableOpacityComponent } from 'react-native';

//Funções
const alertar = ()=>{
  alert("Testando")
}

//Renderização
export default function App() {
  const {container,title,p,image,botao} = styles
  return (
    <View style={container}>
      <ImageBackground style={image}  source={require('./public/img/backgound.jpg')}> 
      <Text style={title}>Star Wars</Text>
      <Text style={p}>Fonte de dados quantificada e programaticamente acessível para todos os dados do universo canônico de Star Wars!</Text>
      <TouchableOpacity enabled onPress={alertar}><Text style={botao}>Começar</Text></TouchableOpacity>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

//Formatações
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    flex:1,
    justifyContent:'center',
    paddingBottom:40
  },
  title:{
    textAlign:'center',
    fontSize:60,
    fontWeight:'900',
    color:'white',
    marginTop:40
  },
  p:{
    textAlign:'center',
    paddingTop:10,
    paddingBottom:20,
    paddingHorizontal:40,
    color:'black'
  },
  botao:{
    backgroundColor:'#48BBEC',
    paddingHorizontal:20,
    marginHorizontal:100,
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20,
    color:'white',
    borderColor:'#1d8eb8',
    borderWidth:1,
    borderRadius:8
  }
});
