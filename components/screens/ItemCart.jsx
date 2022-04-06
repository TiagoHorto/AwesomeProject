import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { decrementItemsInShoppingCart, incrementItemsInShoppingCart, removeBookFromShoppingCart } from "../../redux/actions/shoppingCart";
import { COLORS } from "../../resources";
import Icon from 'react-native-vector-icons/MaterialIcons';

const ItemCart = ({item, navigation}) => {
    const fnDispatch = useDispatch();
    const removeFromShoppingCart = function () {
        fnDispatch(removeBookFromShoppingCart(item.id));
    };

    const incrementInShoppingCart = function () {
        fnDispatch(incrementItemsInShoppingCart(item.id));
    };

    const decrementInShoppingCart = function () {
        fnDispatch(decrementItemsInShoppingCart(item.id));
    };

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('BookDetail', item)}
            style={{
                width: '80%',
                height: 140,
                marginVertical: 6,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            <View
                style={{
                    width: '40%',
                    height: 140,
                    padding: 14,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.light,
                    borderRadius: 10,
                    marginRight: 22,
                }}>
                <Image
                    source={require('../../assets/withoutCover.jpg')}
                    style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                    }}
                />
            </View>
            <View
                style={{
                    flex: 1,
                    height: '100%',
                    justifyContent: 'space-around',
                }}>
                <View >
                    <Text
                        style={{
                            fontSize: 14,
                            maxWidth: '100%',
                            color: COLORS.black,
                            fontWeight: '600',
                            letterSpacing: 1,
                        }}>
                        {item.volumeInfo.title}
                    </Text>
                    <View
                        style={{
                            marginTop: 4,
                            flexDirection: 'row',
                            alignItems: 'center',
                            opacity: 0.6,
                        }}>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '400',
                                maxWidth: '85%',
                                marginRight: 4,
                            }}>
                            € {item.saleInfo.listPrice.amount}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <TouchableOpacity onPress={() => decrementInShoppingCart()}>
                            <View
                                style={{
                                    borderRadius: 100,
                                    marginRight: 20,
                                    padding: 4,
                                    borderWidth: 1,
                                    borderColor: COLORS.grey,
                                    opacity: 0.5,
                                }}>
                                <Icon
                                    name="remove"
                                    style={{
                                        fontSize: 16,
                                        color: COLORS.dark,
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text>1</Text>
                        <TouchableOpacity onPress={() => incrementInShoppingCart()}>
                            <View
                                style={{
                                    borderRadius: 100,
                                    marginLeft: 20,
                                    padding: 4,
                                    borderWidth: 1,
                                    borderColor: COLORS.grey,
                                    opacity: 0.5,
                                    marginRight: 20,
                                }}>
                                <Icon
                                    name="add"
                                    style={{
                                        fontSize: 16,
                                        color: COLORS.dark,
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => removeFromShoppingCart()}>
                            <Icon
                                name="delete-outline"
                                style={{
                                fontSize: 16,
                                color: COLORS.dark,
                                backgroundColor: COLORS.grey,
                                padding: 8,
                                borderRadius: 100,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
      </TouchableOpacity>
    );
  };

  export default ItemCart