import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/header';
import Button from './components/custombutton';
import Login from './components/login';
import Footer from './components/footer';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.contentContainer}>
                <Text>Welcome to GeoVis!</Text>
                <Button onPress={() => console.log('Add to Login')} text="Add to Login" />
                <Login />

            </View>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    createAccountLink: {
        color: 'blue',
    },
});

export default HomeScreen;
