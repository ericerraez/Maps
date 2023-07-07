import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterButton = () => {
    const navigation = useNavigation();

    const handleRegisterButtonPress = () => {
        navigation.navigate('Users');
    };

    return (
        <TouchableOpacity style={styles.registerButton} onPress={handleRegisterButtonPress}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    registerButton: {
        backgroundColor: 'blue',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default RegisterButton;
