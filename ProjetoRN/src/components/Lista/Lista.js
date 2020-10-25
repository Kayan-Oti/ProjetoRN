import React, { useState } from 'react';
import { Text, View, Image} from 'react-native';
import estiloLista from './estiloLista';

const Lista = ({data}) => {

    const [item, setItem] = useState(data);

    return (
        <View style={estiloLista.areaItens}>
            <Text style={estiloLista.itemNome}> {item.nome} </Text>
            <Image source={item.foto} style={estiloLista.itemFoto} resizeMode='contain'/>
        </View>
    );
}

export default Lista;