import React from 'react';
import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { SafeAreaView } from 'react-native-web';

function Screen({ children }) {
    return (
        <SafeAreaView style={styles.screen}>
            {props.children}
        </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight
    }
})

export default Screen;