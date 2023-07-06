import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const CustomButton = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginButtonPress = () => {
        // Lógica para manejar el evento onPress del botón "Login"
        // ...
    };

    const handleGoogleSignInButtonPress = () => {
        // Lógica para manejar el evento onPress del botón "Sign in with Google"
        // ...
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <View style={styles.loginContainer}>
                <TouchableOpacity style={styles.button} onPress={handleLoginButtonPress}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.optionsContainer}>
                <Text style={styles.text}>Or Sign Up With:</Text>
                <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignInButtonPress}>
                    <Image
                        source={require('C:\\Users\\erice\\Maps\\assets\\google-logo-removebg-preview.png')}
                        style={styles.googleIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text style={styles.registerText}>Aún no te has registrado?</Text>
                <Text style={styles.createAccountLink}>Create Account</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f2f2f2',
        width: '80%',
        alignSelf: 'center',
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: '#fff',
        width: '100%',
    },
    loginContainer: {
        marginTop: 10,
        marginBottom: 20,
    },
    optionsContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    text: {
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    googleButton: {
        alignItems: 'center',
    },
    googleIcon: {
        width: 120,
        height: 60,
    },
    registerText: {
        marginTop: 10,
        marginBottom: 5,
    },
    createAccountLink: {
        color: 'blue',
    },
});

export default CustomButton;
