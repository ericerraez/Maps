import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LatestMaps = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Latest Maps</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Last Map</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'lightblue',
        borderRadius: 5,
        paddingVertical: 25,
        paddingHorizontal: 20,
    },
    buttonText: {
        fontSize: 14,
        color: 'black',
    },
});

export default LatestMaps;
