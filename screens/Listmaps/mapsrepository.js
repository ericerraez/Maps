import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../Home/components/header';
import Footer from '../Home/components/footer';
import ListOfMaps from './lisfofmaps';

const MapsRepositoryScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <ListOfMaps />
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MapsRepositoryScreen;
