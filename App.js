import React from 'react'
import { StyleSheet, SafeAreaView, Button, Platform, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button 
        title="Click Me" 
        onPress={() =>
          Alert.prompt("My title", "My message", text => console.log(text))
        }
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
