import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title} - {blogPost.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;