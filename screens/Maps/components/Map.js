import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, TextInput, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';

const Map = () => {
    const [initialPosition, setInitialPosition] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [showMap, setShowMap] = useState(true);
    const [showDataForm, setShowDataForm] = useState(false);
    const [fullname, setFullname] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

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
        setMarkers([...markers, coordinate]);
        setLatitude(String(coordinate.latitude));
        setLongitude(String(coordinate.longitude));
    };

    const handleHideMap = () => {
        setShowMap(false);
    };

    const handleShowMap = () => {
        setShowMap(true);
    };

    const handleSaveCoordinates = () => {
        if (markers.length > 0) {
            const dataToSend = {
                fullname: fullname,
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude),
                coordinates: markers.map((marker) => ({
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                })),
            };

            axios
                .post('http://192.168.1.8:8081/locations', dataToSend)
                .then((response) => {
                    console.log('Coordinates saved successfully:', response.data);
                    // Handle the response from the backend if needed

                    // Deshabilitar los campos de entrada una vez que se haya guardado la información
                    setFullname('');
                    setLatitude('');
                    setLongitude('');
                    setShowDataForm(false); // Ocultar el formulario después de guardar
                })
                .catch((error) => {
                    console.error('Error saving coordinates:', error);
                    // Handle the error if needed
                });

            setMarkers([]);
            setShowDataForm(false); // Ocultar el formulario después de guardar
        } else {
            Alert.alert('Error', 'No hay marcadores para guardar.');
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
                        {markers.map((marker, index) => (
                            <Marker key={index} coordinate={marker} />
                        ))}
                    </MapView>
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
            {showMap && markers.length > 0 && !showDataForm && (
                <View style={styles.saveButtonContainer}>
                    <Button title="Save Coordinates" onPress={() => setShowDataForm(true)} />
                </View>
            )}

            {showDataForm && (
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre de la ubicación"
                        value={fullname}
                        onChangeText={setFullname}
                        // Deshabilitar el campo de entrada una vez que se haya guardado la información
                        editable={!fullname}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Latitud"
                        value={latitude}
                        onChangeText={setLatitude}
                        keyboardType="numeric"
                        // Deshabilitar el campo de entrada una vez que se haya guardado la información
                        editable={!latitude}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Longitud"
                        value={longitude}
                        onChangeText={setLongitude}
                        keyboardType="numeric"
                        // Deshabilitar el campo de entrada una vez que se haya guardado la información
                        editable={!longitude}
                    />
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
    saveButtonContainer: {
        position: 'absolute',
        bottom: 16,
        alignSelf: 'center',
    },
    formContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        margin: 16,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 80,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 8,
        paddingHorizontal: 8,
    },
});

export default Map;
