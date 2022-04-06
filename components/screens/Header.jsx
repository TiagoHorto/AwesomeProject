import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../resources';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({navigation}) => {
  
  return (
    <View style={style.header}>
        <View>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>Store Book</Text>
            <Text style={{fontSize: 38, color: COLORS.red, fontWeight: 'bold'}}>
            Online
            </Text>
        </View>
        <View style={style.icons}>
            <TouchableOpacity
                onPress={() => navigation.navigate('ShoppingCart')}> 
                <Icon name="shopping-cart" size={28} style={{marginRight: 20}}/>
            </TouchableOpacity> 
            <TouchableOpacity activeOpacity={0.8}
                onPress={() => navigation.navigate('FavoritePage')}> 
                <Icon name="favorite" size={28} />
            </TouchableOpacity>
        </View>
    </View>
  );
}

const style = StyleSheet.create({
    header: {
      marginTop: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    icons: {
        flexDirection: 'row',
      },
  });

export default Header