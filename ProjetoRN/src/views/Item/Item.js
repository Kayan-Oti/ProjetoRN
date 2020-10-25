import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import estiloItem from './estiloItem';
import Lista from '../../components/Lista/Lista';
import { LinearGrandient, LinearGradient } from 'expo-linear-gradient';

import { Fontisto } from '@expo/vector-icons';

function Item({ navigation }) {

    const [colecao, setColecao] = useState( [
        {
            id: '1',
            nome: 'Café expresso',
            foto: require('../../../assets/Itens/Cafe_Expresso.jpg'),
        },
        {
            id: '2',
            nome: 'Café com leite',
            foto: require('../../../assets/Itens/Cafe_Leite.jpg'),
        },
        {
            id: '3',
            nome: 'Cappuccino',
            foto: require('../../../assets/Itens/Cappuccino.jpg'),
        },
        {
            id: '4',
            nome: 'Affogato',
            foto: require('../../../assets/Itens/Affogato.jpg'),
        },
    ]    )

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloItem.container}>

                <ImageBackground source={require('../../../assets/Imagens/Cafeteria.jpg')} style={estiloItem.fundo}>
                <View style={estiloItem.logoContainer}>
                    <LinearGradient colors={['#804000', '#ff9933', '#804000']} style={estiloItem.logo}>
                        <Fontisto name="coffeescript" size={50} color="white" />
                    </LinearGradient>
                </View>
                <FlatList
                    showsHorizontalScrollIndicator = {false}
                    data={colecao}
                    keyExtractor = {(item) => item.id}
                    renderItem = { ({item}) => <Lista data={item} />}
                />
                <TouchableOpacity style={estiloItem.botaoContainer} onPress={voltar}>
                    <Text style={estiloItem.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

                </ImageBackground>
        </View>
    )
}

export default Item;