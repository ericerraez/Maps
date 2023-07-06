import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Map from './components/Map';
import Footer from '../Home/components/footer';
import Header from '../Home/components/header';

const MapsScreen = () => {
    const [showMap, setShowMap] = useState(false);

    const handleShowMap = () => {
        setShowMap(true);
    };

    return (
        <View style={styles.container}>
            <Header />
            {!showMap && (
                <Button title="Show Map" onPress={handleShowMap} />
            )}
            {showMap && (
                <View style={styles.mapContainer}>
                    <Map />
                </View>
            )}
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapContainer: {
        flex: 1,
        marginTop: 20,
        marginBottom: 40,
        marginHorizontal: 16,
    },
});

export default MapsScreen;
