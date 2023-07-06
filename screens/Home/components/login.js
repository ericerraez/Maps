import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>

            <View style={styles.registerContainer}>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    buttonContainer: {
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    registerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    createAccountLink: {
        marginLeft: 5,
        color: 'blue',
    },
});

export default Login;
