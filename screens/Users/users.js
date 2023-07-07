import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../Home/components/header';
import Footer from '../Home/components/footer';
import UserProfile from './components/userprofile';
import LatestMaps from './components/latestmaps';
import Activity from './components/activity';

const UsersScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <UserProfile />
            <LatestMaps />
            <Activity />
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 60,
    },
});

export default UsersScreen;
