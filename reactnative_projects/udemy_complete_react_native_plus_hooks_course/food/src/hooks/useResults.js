import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {

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

  useEffect(() => {
    searchAPI('pasta');
  }, []);

  return [searchAPI, results, errorMessage];

};