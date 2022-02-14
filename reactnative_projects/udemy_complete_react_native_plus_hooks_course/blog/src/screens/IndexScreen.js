import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen {value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;