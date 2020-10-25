import { StyleSheet } from 'react-native';

const estiloLogin = StyleSheet.create({
   container: {   
      flex: 1,   
   },
   fundo: {
      justifyContent: 'center',    
      width: '100%',
      height: '100%',
   },
   logoContainer: {
      alignItems: 'center',
      marginBottom: 20,
   },
   logo: {
       width: 90,
       height: 90,
       borderRadius: 50,
       justifyContent: 'center',
       alignItems: 'center',
       padding: 20,
   },
   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
   campo: {
      backgroundColor: '#ffd45e',
      fontSize: 18,
      marginLeft: 40,
      marginRight: 40,    
      marginTop: 5,
      borderRadius: 5,
      height: 40,
      paddingLeft: 10
    },
   botaoContainer: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 5,
      height: 40,
      borderWidth: 2,
      borderColor: '#000',
      backgroundColor: '#ffd45e',
      justifyContent: 'center',
      alignItems: 'center',
   },
      botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold'
   },
      botaoLinearGradient: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 20,
          marginLeft: 50,
          marginRight: 50,
          height: 50,
          paddingLeft: 15,
          paddingRight: 15,
          borderRadius: 8,
      },
});

  export default estiloLogin;