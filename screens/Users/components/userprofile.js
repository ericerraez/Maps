import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {
    const navigation = useNavigation();

    const handleProfilePress = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Text style={styles.profileText}>User Profile</Text>
                <TouchableOpacity style={styles.iconButton} onPress={handleProfilePress}>
                    <MaterialCommunityIcons name="account" size={18} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.bioContainer}>
                <Text style={styles.bioText}>Biography</Text>
                {/* Agrega aquí el contenido de la biografía */}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Designs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Maps</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Files</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.space} />
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
        paddingVertical: 20,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginRight: 10,
    },
    profileText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 240,
    },
    iconButton: {
        backgroundColor: 'lightblue',
        borderRadius: 15,
        padding: 8,
    },
    bioContainer: {
        marginBottom: 10,
    },
    bioText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: 'lightblue',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        fontSize: 12,
        color: 'black',
    },
    space: {
        height: 10,
    },
});

export default UserProfile;
