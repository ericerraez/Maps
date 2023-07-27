import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import axios from 'axios';

const ListOfMaps = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://192.168.1.8:8081/locations');
            setLocations(response.data);
        } catch (error) {
            console.error('Error fetching location data:', error);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={locations}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()} // Convertir el ID a string para usarlo como key
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
