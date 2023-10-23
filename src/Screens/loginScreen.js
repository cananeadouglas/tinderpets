import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';
import { getAuth, signInWithEmailAndPassword, 
    onAuthStateChanged  } from "firebase/auth";
import { auth } from '../firebase';
import supabase from '../supabase';

import { ButtonBig } from '../Components/buttonBig';
import { ButtonBigCor } from '../Components/buttonBigCor';
import Imgpets from '../../assets/pets.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ getId, setGetId ] = useState('');

    const navigation = useNavigation();
    
    function redefinir () {
        //alert('redefinir')
        navigation.navigate('Redefinicao')
    }

    function cadastro () {
        //alert('fazer cadastro')
        navigation.navigate('Cadastro')
    }

    // custom hook
    useEffect(() => {
        const auth = getAuth(); // Obtenha a instância de autenticação

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // O usuário está autenticado, você pode fazer algo com 'user'
                navigator.navigate('Welcome'); // Navegue para a tela "home"
            }
        });

        // Certifique-se de retornar a função de cancelamento (unsubscribe)
        return () => unsubscribe();
    }, []);

    const handleLogin = () => {

        if (email === '' || password === ''){
            
            alert('Preencha todos os campos');
            return;
        }
        if (email === password){
            alert('Favor preencha uma senha diferente do email');
            return;
        }
        else {
            try {
                signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    alert('Login Efetuado com: ' + user.email);
                    AsyncStorage.setItem('email', user.email);
                    console.log(user.email)
                    navigation.navigate('Welcome');

                    // if (nomePet !== null && sexoPet !== null){
                    //     navigation.navigate('AuthRoutes')
                    // } else {
                    //     navigation.navigate('Welcome');
                    // }

            })
            } catch (error) {
                console.log('error ao completar cadastro', error);
            }; 
        }

        
    }

    const [ nomePet, setNomePet ] = useState('');
    const [ sexoPet, setSexoPet ] = useState('');

    const getData0 = async () => {
        try {
            const value0 = await AsyncStorage.getItem('nomePet');
            if (value0 !== null) {
            setNomePet(value0);
            console.log(nomePet);
            }
        } catch (e) {
          // error reading value
        }
    };
    getData0();

    const removeStringFromAsyncStorage = async () => {
        try {
          await AsyncStorage.removeItem('nomePet');
          //console.log('String removida do AsyncStorage com sucesso.');
        } catch (error) {
          //console.error('Erro ao remover a string do AsyncStorage:', error);
        }
    }
    removeStringFromAsyncStorage()

    const getData1 = async () => {
        try {
            const value1 = await AsyncStorage.getItem('sexoPet');
            if (value1 !== null) {
                if(value1 === 'male'){
                    setSexoPet('Macho');
                    console.log(sexoPet);
                }
                if(value1 === 'female'){
                    setSexoPet('Fêmea');
                    console.log(sexoPet);
                }
            }
        } catch (e) {
          // error reading value
        }
    };
    getData1();

    return (
        <View
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.logoView}>
                <Image 
                    source={Imgpets}
                />
            </View>
            <View style={styles.inputContainer}>
                

                <TextInput
                    placeholder='Email'
                    keyboardType='email-address'
                    value={email} // capturar o que foi digitado
                    onChangeText={text => setEmail(text)} // onchange transfere para a variável setEmail
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)} // onchange transfere para a variável setPassword
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                
                <ButtonBig // ButtonBig Tipado em componentes
                    title="Login"
                    onPress={handleLogin}
                />

                <ButtonBigCor
                    title="Fazer Cadastro"
                    onPress={cadastro}
                />

                <ButtonBigCor
                    title="Redefinir a Senha"
                    onPress={redefinir}
                />

            </View>
        </View>
    )
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d0d6dc',
    },
    inputContainer: {
        width: '80%',
    },
    logoView: {
        marginBottom: 40,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,

    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782f9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
});