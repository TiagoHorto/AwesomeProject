import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BookDetail from './components/screens/BookDetail';
import ShoppingCart from './components/screens/ShoppingCart';
import WishList from './components/screens/WishList';
import { COLORS } from './resources/index';
import {StatusBar} from 'react-native';
import HomePage from './pages/HomePage';
import FavoritePage from './pages/FavoritePage';
import { Provider } from 'react-redux';
import store from './redux/store'

const App = () => {
  const Stack = createNativeStackNavigator();
  
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
          <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="HomePage" component={HomePage}/>
            <Stack.Screen name="BookDetail" component={BookDetail}/>
            <Stack.Screen name="ShoppingCart" component={ShoppingCart}/>
            <Stack.Screen name="FavoritePage" component={FavoritePage}/>
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App
