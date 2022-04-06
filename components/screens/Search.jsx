import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, Vibration, View } from 'react-native';
import { COLORS } from '../../resources';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from "react-redux"
import { fetchBooks } from "../../redux/actions/book"

const Search = () => {
  
    const dispatch = useDispatch();
    const store = useSelector(store => store.allBooks.books);

    const [searchBook, setSearchBook] = useState("")

    const handlerSearch = () => {
       dispatch(fetchBooks(searchBook))
    }

    useEffect(() => {
        if(Object.keys(store).length == 0) dispatch(fetchBooks("react"))
    }, [])
    

  return (
    <View style={{marginTop: 30, flexDirection: 'row', marginBottom: 10}}>
        <View style={style.searchContainer}>
            <Icon name="search" size={25} style={{marginLeft: 20}} color={COLORS.grey}/>
            <TextInput placeholder="Search" id="Search" style={style.input} onChangeText={(text) => setSearchBook(text)}/>
        </View>
        <View style={{ backgroundColor: COLORS.light, borderRadius: 10, justifyContent: 'center', marginLeft: 5}}>
            <Icon name="search" size={30} color={COLORS.dark} onPress={() => {{handlerSearch()}; Vibration.vibrate(10);}}/>
        </View>
    </View>
  );
}

const style = StyleSheet.create({
  
    searchContainer: {
      height: 50,
      backgroundColor: COLORS.light,
      borderRadius: 10,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      fontSize: 18,
      fontWeight: 'bold',
      flex: 1,
      color: COLORS.dark,
    },
  });
export default Search
