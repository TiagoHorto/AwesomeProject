import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { getBooksAddedToShoppingCart } from '../../redux/selectors';
import { COLORS } from '../../resources';
import ItemCart from './ItemCart';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ShoppingCart = ({navigation}) => {
  let addedBooks = useSelector(getBooksAddedToShoppingCart);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 10,
      }}>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      <View style={{alignItems: 'center', flexDirection: 'row', marginBottom: 10}}>
            <Text style={{fontSize: 25, fontWeight: 'bold', marginRight: 10}}>Shopping</Text>
            <Text style={{fontSize: 30, color: COLORS.red, fontWeight: 'bold'}}>
            Cart
            </Text>
        </View>
      <View style={{ height: 360}}>
        
        <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          maxHeight: 450,
          paddingBottom: 110,
        }}
        keyExtractor={(item) => item.id}
          data={addedBooks}
          renderItem={({item}) => {
            return <ItemCart item={item} navigation={navigation} />;
          }}
        />
      </View>
      <View style={style.detailsContainer}>
        
        <View
          style={{
            marginLeft: 20,
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Order Info</Text>
        </View>
        
        <View style={{paddingHorizontal: 20, marginTop:10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.grey}}>Subtotal</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.grey, marginTop:10}}>Shipping Tax</Text>
        </View>
        <View
            style={{
              position: 'absolute',
              bottom: 10,
              height: '30%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              
            }}>
            <TouchableOpacity
              style={{
                width: '80%',
                height: '100%',
                backgroundColor: COLORS.blue,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30
              }}
              >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  color: COLORS.white,
                  textTransform: 'uppercase',
                }}>
                Checkout
              </Text>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginBottom: 20
  },
  imageContainer: {
    flex: 0.40,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.60,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    borderRadius: 20,
    marginTop: 90,
    padding: 10,
  },
});

export default ShoppingCart
