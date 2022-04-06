import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { COLORS, favorites } from '../../resources';
import CardBook from './CardBook';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { getBooksAddedToWishList } from '../../redux/selectors';

const WishList = ( {navigation}) => {
  let addedBooks = useSelector(getBooksAddedToWishList);
  return (
    <View>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} />
      </View>
        <View style={{alignItems: 'center', flexDirection: 'row', marginBottom: 10}}>
            <Text style={{fontSize: 25, fontWeight: 'bold', marginRight: 10}}>Wish</Text>
            <Text style={{fontSize: 30, color: COLORS.red, fontWeight: 'bold'}}>
            List
            </Text>
        </View>
    <FlatList
      columnWrapperStyle={{justifyContent: 'space-between'}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 110,
      }}
      keyExtractor={(item) => item.id}
        numColumns={2}
        data={addedBooks}
        renderItem={({item}) => {
          return <CardBook item={item} key={item.id} navigation={navigation} />;
        }}
      />
      </View>
    );
}

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
})
export default WishList
