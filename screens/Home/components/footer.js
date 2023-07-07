import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const navigation = useNavigation();

    const handleMapPress = () => {
        navigation.navigate('Maps');
    };

    const handleUserPress = () => {
        navigation.navigate('Users');
    };

    const handleEarthPress = () => {
        navigation.navigate('MapsRepository');
    };

    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.iconButton} onPress={handleMapPress}>
                <MaterialCommunityIcons name="map" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={handleUserPress}>
                <MaterialCommunityIcons name="account" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={handleEarthPress}>
                <Text>
                    <MaterialCommunityIcons name="earth" size={24} color="black" />
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        backgroundColor: 'lightblue',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    iconButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Footer;
