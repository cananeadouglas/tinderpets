import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import { ButtonBig } from '../Components/buttonBig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import supabase from '../supabase';

const Geolocation = () => {
  
    const [location, setLocation] = useState(null);


    // const [ email, setEmail ] = useState(null);

    // const getData0 = async () => {
    //     try {
    //         const getEmail = await AsyncStorage.getItem('email');
    //         if (getEmail !== null) {
    //             setEmail(getEmail);
    //             //console.log(email);
    //         }
    //     } catch (e) {
    //         console.log(Error)
    //     }
    // };
    // getData0();


    useEffect(() => {
        
        (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        })

        ();
    }, []);


    let latitude = 'Waiting..';
    let longitude = 'Waiting..';

    if (location) {
        latitude = JSON.stringify(location.coords.latitude);
        longitude = JSON.stringify(location.coords.longitude);
    }else{
        console.error();
    }

    const [ getId, setGetId ] = useState('');

    async function handelSaveLocation () {
        const email = await AsyncStorage.getItem('email');
        //console.log(email)
        if (email !== '') {
            //alert('aqui tem email ' + email)
            try {
                await supabase.get(`/usuario?email=eq.${email}&select=*`)
                .then(
                    (response) => {
                        console.log(response.data)
                    }
                )
            } catch (error) {
                console.log('erros', error);
            }
        }
    }

    // const jsonString = '{"name":"John","age":30,"city":"New York"}';
    // const jsonObject = JSON.parse(jsonString); // Converte a string JSON em um objeto JavaScript

    // const ageValue = jsonObject.age;
    // console.log(ageValue); // Isso irá imprimir 30 no console


    return (
            <View style={styles.container}>
                <MapView 
                    style={styles.mapview}
                    initialRegion={{
                        latitude: -9.617188,
                        longitude: -35.739608,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    showsUserLocation
                    LoadingEnable
                
                //mapType='satellite'
                />

                <Text style={styles.paragraph}>{latitude}</Text>
                <Text style={styles.paragraph}>{longitude}</Text>

                    <View>
                        <ButtonBig
                        title='Salvar Localização'
                        onPress={handelSaveLocation}
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