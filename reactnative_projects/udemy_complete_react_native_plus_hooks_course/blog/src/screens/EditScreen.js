import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam('id');
  const blogPost = state.find(blogPost => blogPost.id === id);

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text style={styles.label}>Edit Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Edit Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button
        title="Add Blog Post"
        onPress={() => {
          /*addBlogPost(title, content, () => {
            navigation.navigate('Index');
          });*/
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    margin: 5,
    marginBottom: 15
  },
  label: {
    fontSize: 20,
    marginLeft: 5,
    marginBottom: 5
  }
});

export default EditScreen;