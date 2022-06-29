import React from 'react'
import { StyleSheet, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button 
        title="Click Me" 
        onPress={() =>
          Alert.prompt("My title", "My message", text => console.log(text))
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
