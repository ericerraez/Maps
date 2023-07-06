import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Map = () => {
    const [initialPosition, setInitialPosition] = useState(null);
    const [selectedCoordinates, setSelectedCoordinates] = useState(null);
    const [showMap, setShowMap] = useState(true);
    const [savedCoordinates, setSavedCoordinates] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    console.log('Permission to access location was denied');
                    return;
                }

                const location = await Location.getCurrentPositionAsync();
                const { latitude, longitude } = location.coords;
                setInitialPosition({ latitude, longitude });
            } catch (error) {
                console.log('Error getting location', error);
                // Handle the error or set a default position
            }
        })();
    }, []);

    const handleMapLongPress = (event) => {
        const { coordinate } = event.nativeEvent;
        setSelectedCoordinates(coordinate);
    };

    const handleHideMap = () => {
        setShowMap(false);
    };

    const handleShowMap = () => {
        setShowMap(true);
    };

    const handleSaveCoordinates = () => {
        if (selectedCoordinates) {
            Alert.prompt(
                'Guardar coordenada',
                'Ingrese el nombre de la ubicación:',
                (name) => {
                    if (name) {
                        const coordinates = {
                            latitude: selectedCoordinates.latitude,
                            longitude: selectedCoordinates.longitude,
                            name: name,
                        };

                        setSavedCoordinates([...savedCoordinates, coordinates]);
                        setSelectedCoordinates(null);

                        Alert.alert(
                            'Guardado exitosamente',
                            `Coordenadas guardadas:\nLatitud: ${selectedCoordinates.latitude}\nLongitud: ${selectedCoordinates.longitude}\nNombre: ${name}`
                        );
                    } else {
                        Alert.alert('Error', 'Por favor, ingrese un nombre válido.');
                    }
                },
                'plain-text',
                ''
            );
        }
    };

    return (
        <View style={styles.container}>
            {showMap && initialPosition && (
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: initialPosition.latitude,
                            longitude: initialPosition.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                        onLongPress={handleMapLongPress}
                        showsUserLocation
                    >
                        {selectedCoordinates && (
                            <Marker coordinate={selectedCoordinates} />
                        )}
                    </MapView>
                    {selectedCoordinates && (
                        <View style={styles.coordinatesContainer}>
                            <Text style={styles.coordinatesText}>
                                Latitude: {selectedCoordinates.latitude}
                            </Text>
                            <Text style={styles.coordinatesText}>
                                Longitude: {selectedCoordinates.longitude}
                            </Text>
                        </View>
                    )}
                </View>
            )}
            {!showMap && (
                <View style={styles.hiddenMapContainer}>
                    <Button title="Show Map" onPress={handleShowMap} />
                </View>
            )}
            {showMap && (
                <View style={styles.hideButtonContainer}>
                    <Button title="Hide Map" onPress={handleHideMap} />
                </View>
            )}
            {showMap && (
                <View style={styles.saveButtonContainer}>
                    <Button title="Save Coordinates" onPress={handleSaveCoordinates} />
                </View>
            )}

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width - 32,
        height: Dimensions.get('window').height - 32,
        marginHorizontal: 16,
    },
    hiddenMapContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    hideButtonContainer: {
        position: 'absolute',
        top: 16,
        right: 16,
    },
    coordinatesContainer: {
        position: 'absolute',
        top: 16,
        left: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 8,
        borderRadius: 8,
    },
    coordinatesText: {
        fontWeight: 'bold',
    },
    saveButtonContainer: {
        position: 'absolute',
        bottom: 482,
        alignSelf: 'center',
        right: 1,
    },
});

export default Map;