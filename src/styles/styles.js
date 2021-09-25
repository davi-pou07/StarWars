import { StyleSheet} from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
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
    content:{
        color: 'rgb(195,210,250)'
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