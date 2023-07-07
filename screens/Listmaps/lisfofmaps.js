import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const ListOfMaps = () => {
    // Datos de ejemplo de la lista de mapas
    const data = [
        { id: '1', name: 'Mapa 1' },
        { id: '2', name: 'Mapa 2' },
        { id: '3', name: 'Mapa 3' },
        // Agrega más elementos de la lista según sea necesario
    ];

    // Renderizar cada elemento de la lista
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    itemContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },
    itemText: {
        fontSize: 16,
    },
});

export default ListOfMaps;
