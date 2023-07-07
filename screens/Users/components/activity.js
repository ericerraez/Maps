import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Activity = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Activity</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Maps Liked</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Projects</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        paddingVertical: 20, // Aumentar el tamaño vertical del componente
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
        paddingHorizontal: 30,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 14,
        color: 'black',
    },
});

export default Activity;
