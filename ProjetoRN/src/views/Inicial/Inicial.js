import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import estiloInicial from './estiloInicial';
import { LinearGrandient, LinearGradient } from 'expo-linear-gradient';

import { Fontisto } from '@expo/vector-icons';

function Inicial({ navigation }) {

    const abrirPerfil = () => {
        navigation.navigate('Perfil')
    }
    
    const abrirItem = () => {
        navigation.navigate('Item')
    }
    
    return (
        <View style={estiloInicial.container}>

            <ImageBackground source={require('../../../assets/Imagens/Cafeteria.jpg')} style={estiloInicial.fundo}>
                <View style={estiloInicial.logoContainer}>
                    <LinearGradient colors={['#804000', '#ff9933', '#804000']} style={estiloInicial.logo}>
                        <Fontisto name="coffeescript" size={50} color="white" />
                    </LinearGradient>
                </View>

                <TouchableOpacity onPress={abrirPerfil}>
                    <ImageBackground source={require('../../../assets/Imagens/Perfil.jpg')} style={estiloInicial.botaoBG}>
                        <Text style={estiloInicial.botaoTexto}>Perfil</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress={abrirItem}>
                    <ImageBackground source={require('../../../assets/Imagens/Item.jpg')} style={estiloInicial.botaoBG}>
                        <Text style={estiloInicial.botaoTexto}>Item</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default Inicial;