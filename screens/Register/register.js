import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../Home/components/header';
import TextInputField from './components/textinput';
import RegisterButton from './components/registerbutton';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const handleRegisterButtonPress = () => {
        // Lógica para manejar el evento onPress del botón "Register"
        // ...
    };

    return (
        <View style={styles.container}>
            <Header title="Register" />
            <View style={styles.content}>
                <Text style={styles.title}>Create Account</Text>
                <TextInputField
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInputField
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                />
                <TextInputField
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInputField
                    placeholder="Full Name"
                    value={fullName}
                    onChangeText={setFullName}
                />
                <RegisterButton onPress={handleRegisterButtonPress} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default RegisterScreen;
