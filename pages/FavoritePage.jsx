import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import WishList from '../components/screens/WishList';
import { COLORS } from '../resources';

const FavoritePage = ({navigation}) => {
  
  return (
    <SafeAreaView
          style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      
      <WishList navigation={navigation} />
    </SafeAreaView>
    );
}

export default FavoritePage