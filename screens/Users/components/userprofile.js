import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const UserProfile = () => {
    return (
        <View>
            <Text>Perfil de usuario</Text>
            <TouchableOpacity>
                <Text>Designs</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Maps</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Files</Text>
            </TouchableOpacity>
        </View>
    );
}

export default UserProfile;