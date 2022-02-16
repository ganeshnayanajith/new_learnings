import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useContext } from 'react';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  console.log('rendering...');
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost}/>
      {/*<Button title="Add Post" onPress={() => addBlogPost()}/>*/}
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title} - {item.id}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.icon} name="trash"/>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;