import React from 'react';
import { Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  return (
    <View>
      <SearchBar/>
      <Text> Search Screen</Text>
    </View>
  );
};

export default SearchScreen;