import React from 'react';
import { View, Text } from 'react-native';
import Header from '../Home/components/header';
import Footer from '../Home/components/footer';

const Users = () => {
    return (
        <View>
            <Header />
            <Text>Contenido de la pantalla de usuarios</Text>
            <Text>Aquí puedes mostrar la lista de usuarios, formularios, etc.</Text>
            <Footer />
        </View>
    );
}

export default Users;
