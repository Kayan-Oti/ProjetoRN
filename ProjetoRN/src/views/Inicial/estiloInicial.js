import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create({
   container: {   
      flex: 1, 
      justifyContent: 'center',  
      alignItems: 'center',  
   },
   fundo: {
      flexDirection: 'column',
      justifyContent: 'space-evenly',    
      alignItems: 'center',
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
   botaoContainer: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 5,
      height: 40,
      borderWidth: 2,
      borderColor: '#e8f2e9',
      backgroundColor: '#ffd45e',
      justifyContent: 'center',
      alignItems: 'center',
   },
   botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold'
   },
   botaoBG:{
       width: 140,
       height: 100,
       borderRadius: 10,
       overflow: 'hidden',
       justifyContent: 'flex-end',
       alignItems: 'center',
       padding: 10,
       borderWidth: 1,
       borderColor: '#e8f2e9'
   }
});

  export default estiloInicial;