import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../../views/Perfil/Perfil';
import Item from '../../views/Item/Item';
import RotasDrawer from '../RotasDrawer/RotasDrawer';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


const RotasTab = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={
      {
        style: {backgroundColor: '#ffd45e'},
        activeTintColor: '#FFFFFF' ,
        showLabel: false,
      }
      }
    >
      <Tab.Screen
      name="Inicial"
      component={RotasDrawer} 
      options={{
          unmountOnBlur: true,
          tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
          ),
      }}
      />
      <Tab.Screen
      name="Perfil"
      component={Perfil}
      options={{
          unmountOnBlur: true,
          tabBarIcon: ({ color }) => (
              <MaterialIcons name="person" size={24} color={color} />
          ),
      }}
      />
      <Tab.Screen
      name="Item"
      component={Item}
      options={{
          unmountOnBlur: true,
          tabBarIcon: ({ color }) => (
             <AntDesign name="profile" size={24} color={color} />
          ),
      }}
      />
    </Tab.Navigator>
  );
}

export default RotasTab;