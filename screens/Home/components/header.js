import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Image
                source={require('C:\\Users\\erice\\Maps\\assets\\logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 200,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    logo: {
        width: '100%',
        height: '100%',
    },
});

export default Header;
