import React from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet, TouchableOpacity, ScrollView, Vibration} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { addBookToShoppingCart, removeBookFromShoppingCart } from '../../redux/actions/shoppingCart';
import { checkIfBookOnShoppingCart } from '../../redux/selectors';
import { COLORS } from '../../resources/index';

const BookDetail = ({navigation, route}) => {
  const item = route.params;
  const fnDispatch = useDispatch();
  let hasPrice = item.saleInfo.listPrice && item.saleInfo.listPrice.amount !== undefined
  
  let bIsBookOnShoppingCart = useSelector((state) => checkIfBookOnShoppingCart(state, item.id));

  const addToShoppingCart = function () {
    fnDispatch(addBookToShoppingCart(item));
  };

  const removeFromShoppingCart = function () {
    fnDispatch(removeBookFromShoppingCart(item.id));
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={style.imageContainer}>
      {item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail !== undefined ? 
      <Image source={{uri: item.volumeInfo.imageLinks.smallThumbnail}}
        style={{width: '50%', height: '100%', borderRadius: 5}}
      /> : <Image source = {require('../../assets/withoutCover.jpg')}
        style={{resizeMode: 'contain', flex: 1, borderRadius: 5}}
      />} 
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
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{item.volumeInfo.title}</Text>
          {hasPrice !== undefined ?
          <View style={style.priceTag}>
            <Text
              style={{
                
                marginLeft: 15,
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
                   € {item.saleInfo.listPrice.amount} 
            </Text>
          </View>
          : <View></View>}
        </View>
        
        <View style={{paddingHorizontal: 20, }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.volumeInfo.subtitle}</Text>
          <View style={{ maxHeight: 180 }}>
            <ScrollView>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 16,
                  lineHeight: 20,
                  marginTop: 10,
                }}>
                {item.volumeInfo.description}
              </Text>
            </ScrollView>
          </View>
        </View>
        <View
            style={{
              position: 'absolute',
              bottom: 10,
              height: '15%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {{bIsBookOnShoppingCart ? removeFromShoppingCart() : addToShoppingCart() }; Vibration.vibrate(10);}}
              style={{
                width: '80%',
                height: '90%',
                backgroundColor: hasPrice ? COLORS.blue : COLORS.grey,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              disabled={!hasPrice}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  color: COLORS.white,
                  textTransform: 'uppercase',
                }}>
                {!hasPrice ? "Unavailable" : bIsBookOnShoppingCart ? "Remove from cart" : "Add to cart" }
              </Text>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 10,
    paddingTop: 30,
  },
  priceTag: {
    position: 'absolute',
    backgroundColor: COLORS.blue,
    left: 270,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default BookDetail;