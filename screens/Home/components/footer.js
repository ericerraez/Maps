import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const navigation = useNavigation();
    const [tooltipMessage, setTooltipMessage] = useState('');

    const handleMapPress = () => {
        navigation.navigate('Maps');
    };

    const handleUserPress = () => {
        navigation.navigate('Users');
    };

    const handleEarthPress = () => {
        navigation.navigate('MapsRepository');
    };

    const handleLongPress = (message) => {
        setTooltipMessage(message);
    };

    const handlePressOut = () => {
        setTooltipMessage('');
    };

    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity
                style={styles.iconButton}
                onPress={handleMapPress}
                onLongPress={() => handleLongPress('Crear Proyecto')}
                onPressOut={handlePressOut}
            >
                <MaterialCommunityIcons name="map" size={24} color="black" />
                {tooltipMessage === 'Crear Proyecto' && (
                    <View style={styles.tooltipContainer}>
                        <Text style={styles.tooltipText}>{tooltipMessage}</Text>
                    </View>
                )}
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.iconButton}
                onPress={handleUserPress}
                onLongPress={() => handleLongPress('Mi Perfil')}
                onPressOut={handlePressOut}
            >
                <MaterialCommunityIcons name="account" size={24} color="black" />
                {tooltipMessage === 'Mi Perfil' && (
                    <View style={styles.tooltipContainer}>
                        <Text style={styles.tooltipText}>{tooltipMessage}</Text>
                    </View>
                )}
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.iconButton}
                onPress={handleEarthPress}
                onLongPress={() => handleLongPress('Proyectos')}
                onPressOut={handlePressOut}
            >
                <MaterialCommunityIcons name="earth" size={24} color="black" />
                {tooltipMessage === 'Proyectos' && (
                    <View style={styles.tooltipContainer}>
                        <Text style={styles.tooltipText}>{tooltipMessage}</Text>
                    </View>
                )}
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    tooltipContainer: {
        position: 'absolute',
        top: -40,
        left: 0,
        right: 0,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        fontWeight: 'bold',
    },
    tooltipText: {
        backgroundColor: 'transparent',
    },
});

export default Footer;
