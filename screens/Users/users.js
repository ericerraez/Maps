import React from 'react';
import { View, Text } from 'react-native';
import Header from '../Home/components/header';
import Footer from '../Home/components/footer';
import UserProfile from './components/userprofile';
import LatestMaps from './components/latestmaps';
import Activity from './components/activity';

const UsersScreen = () => {
    return (
        <View>
            <Header />
            <UserProfile />
            <LatestMaps />
            <Activity />
            <Footer />
        </View>
    );
}

export default UsersScreen;