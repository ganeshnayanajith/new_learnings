import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useContext } from 'react';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title} - {blogPost.id}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
        <EvilIcons name="pencil" size={35}/>
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({});

export default ShowScreen;