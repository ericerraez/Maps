import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextInputField = ({ placeholder, value, onChangeText, secureTextEntry }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
});

export default TextInputField;
