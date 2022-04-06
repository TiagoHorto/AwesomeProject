import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../components/screens/Header';
import BookList from '../components/screens/BookList';
import Search from '../components/screens/Search';
import { COLORS } from '../resources';

const HomePage = ({navigation}) => {

      return (
        <SafeAreaView
        style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
            <Header navigation={navigation} />
            <Search />
            <BookList navigation={navigation} />
        
        </SafeAreaView>
      );
    };

export default HomePage;