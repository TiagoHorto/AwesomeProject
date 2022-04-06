import React from 'react';
import {
  FlatList,
} from 'react-native';
import CardBook from './CardBook';
import { useDispatch, useSelector } from "react-redux"
import { getBooksToDisplay } from '../../redux/selectors';

const BookList = ({navigation}) => {

  const books = useSelector(getBooksToDisplay);

      return (
          <FlatList
            columnWrapperStyle={{justifyContent: 'space-between'}}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            numColumns={2}
            data={books}
            renderItem={({item}) => {
              return <CardBook item={item} navigation={navigation} />;
            }}
          />
      );
    };
    
export default BookList;