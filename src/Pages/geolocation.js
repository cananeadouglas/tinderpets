import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import { ButtonBig } from '../Components/buttonBig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import supabase from '../supabase';
import { useNavigation } from '@react-navigation/core';

const Geolocation = () => {

    const navigation = useNavigation();

    const [location, setLocation] = useState(null);
    const [ getId, setGetId ] = useState('');

    // resgatar email start
    const [ email, setEmail ] = useState(null);
    const getData0 = async () => {
        try {
            const recuperarEmail = await AsyncStorage.getItem('email');
            if (recuperarEmail !== null) {
                setEmail(recuperarEmail);
                //console.log(email);
            }
        } catch (e) {
            console.log(Error)
        }

        console.log(email)
        if (email !== '') { // recuperação do ID
            try {
                await supabase.get(`/usuario?email=eq.${email}&select=id`)
                .then(
                    (response) => {
                        const dados = response.data;
                        //console.log(dados[0].id)
                        setGetId(dados[0].id);
                        console.log(getId)
                    }
                )
            } catch (error) {
                console.log('erros', error);
            }
        }
    };
    getData0();
    // resgatar email end

    useEffect(() => {

        (async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();
        
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
        }else{
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        }
        console.log(getId)
        
        if (getId !== ''){
            try {
                supabase.patch(`/geolocation?id_usuario=eq.${getId}`, {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                }).then(
                    console.log('Geolocalização Atualizada')
                );
            } catch (error) {
                console.log('error ao atualizar', error);
            }
        }

        })
        ();
    }, []);


    let latitude = 'Waiting..';
    let longitude = 'Waiting..';

    if (location) {
        latitude = location.coords.latitude
        longitude = location.coords.longitude
    }else{
        console.error();
    }

    function voltar () {
        navigation.navigate('Perfil');
    }


    return (
            <View style={styles.container}>
                <MapView 
                    style={styles.mapview}
                    initialRegion={{
                        latitude: -9.617188,
                        longitude: -35.739608,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    showsUserLocation
                    //mapType='satellite'
                />

                <Text style={styles.paragraph}>{latitude}</Text>
                <Text style={styles.paragraph}>{longitude}</Text>

                <View>
                    <ButtonBig
                        title='Voltar para página anterior'
                        onPress={voltar}
                    />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        //width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      paragraph: {
        fontSize: 18,
        textAlign: 'center',
      },
      mapview: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        height: '40%',
    
      },
})

export default Geolocation