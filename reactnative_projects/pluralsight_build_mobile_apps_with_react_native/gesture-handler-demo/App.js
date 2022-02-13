import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PanGestureHandler } from 'react-native-gesture-handler';


export default function App() {
  return (
    <PanGestureHandler
      onGestureEvent={(gestureEvent) => {
        let tranX = gestureEvent.nativeEvent.translationX;
        let tranY = gestureEvent.nativeEvent.translationY;

        console.log("TranslateX: " + tranX + "\n" +
          "TranslateY: " + tranY + "\n");

      }}>
      <View style={styles.container}>
      </View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
