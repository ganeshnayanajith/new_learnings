import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchAPI = async (searchTerm) => {
    console.log('searching...');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('something went wrong');
    }

  };

  // call search API when component is first rendered. following is the bad code!
  // searchAPI('pasta');
  // better way
  useEffect(() => {
    searchAPI('pasta');
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
        // onTermChange={setTerm}
        // onTermSubmit={searchAPI}
        // onTermChange={newTerm => setTerm(newTerm)}
        // onTermSubmit={() => searchAPI()}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

export default SearchScreen;