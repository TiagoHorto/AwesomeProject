import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, Vibration, View } from 'react-native';
import { COLORS } from '../../resources';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { checkIfBookOnShoppingCart, checkIfBookOnWishList } from '../../redux/selectors';
import { addBookToWishList, removeBookFromWishList } from '../../redux/actions/wishList';
import { addBookToShoppingCart, removeBookFromShoppingCart } from '../../redux/actions/shoppingCart';

const width = Dimensions.get('window').width / 2 - 30;

const CardBook = ({item, navigation}) => {

    const fnDispatch = useDispatch();
    let bIsBookOnWishList = useSelector((state) => checkIfBookOnWishList(state, item.id));
    let bIsBookOnShoppingCart = useSelector((state) => checkIfBookOnShoppingCart(state, item.id));

    const removeFromWishList = function () {
        fnDispatch(removeBookFromWishList(item.id));
    };

    const addToWishList = function () {
        fnDispatch(addBookToWishList(item));
    };

    const addToShoppingCart = function () {
        fnDispatch(addBookToShoppingCart(item));
    };

    const removeFromShoppingCart = function () {
        fnDispatch(removeBookFromShoppingCart(item.id));
    };

    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
    let hasPrice = item.saleInfo.listPrice && item.saleInfo.listPrice.amount !== undefined
  return (
    <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('BookDetail', item)}>
            <View style={style.card}>
              <View
                style={{
                  height: 200,
                  alignItems: 'center',
                    elevation: 10,
                }}>
                
                {thumbnail !== undefined ? 
                <Image
                  source={ { uri: item.volumeInfo.imageLinks.smallThumbnail } }
                  style={{width: '100%', height: '100%', borderRadius: 5,}}
                /> : 
                <Image source = {require('../../assets/withoutCover.jpg')}
                  style={{flex: 1, resizeMode: 'contain', borderRadius: 5}}
                />}
              </View>
                <Text style={{
                    fontWeight: 'bold', fontSize: 17, marginTop: 10,
                    flex: 1, 
                    textAlign: 'center',
                }}>
                {item.volumeInfo.title}
                </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 5,
                  paddingHorizontal: 10,
                }}>
                <TouchableOpacity onPress={() => {{bIsBookOnShoppingCart ? removeFromShoppingCart() : addToShoppingCart() }; Vibration.vibrate(10);}}
                    disabled={!hasPrice}>
                    <View
                        style={{
                            height: 35,
                            width: 35,
                            backgroundColor: COLORS.white,
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: !hasPrice ? 'rgba(0,0,0,0.2) ' : !bIsBookOnShoppingCart ?'#1da51933' : 'rgba(0,0,0,0.2) ',
                        }}>
                        <Icon
                            name={!hasPrice ? "cancel": (bIsBookOnShoppingCart ?"remove-shopping-cart" : "add-shopping-cart")}
                            size={18}
                            color={!hasPrice ? COLORS.red : !bIsBookOnShoppingCart ? COLORS.green : COLORS.dark}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {{bIsBookOnWishList ? removeFromWishList() : addToWishList() }; Vibration.vibrate(10);}}>
                    <View
                    style={{
                        width: 35,
                        height: 35,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: bIsBookOnWishList ?'rgba(245, 42, 42,0.2)' : 'rgba(0,0,0,0.2) ',
                    }}>
                    <Icon
                        name="favorite"
                        size={18}
                        color={bIsBookOnWishList ? COLORS.red : COLORS.dark}
                    />
                    </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
  );
}

const style = StyleSheet.create({
    card: {
      height: 350,
      backgroundColor: COLORS.light,
      width,
      marginHorizontal: 2,
      borderRadius: 10,
      marginBottom: 20,
      padding: 15,
    },
  });
export default CardBook