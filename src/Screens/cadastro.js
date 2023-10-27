import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ButtonBig } from '../Components/buttonBig';
import Imgpets from '../../assets/pets.png';
import supabase from '../supabase';

const Cadastro = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const navigation = useNavigation();

    const handleSignUp = () => {

        if (email === '' || password === ''){
            alert('Preencha todos os campos');
            return
        }
        if (email === password){
            alert('Favor preencha uma senha diferente do email')
            return
        }
        else{
            try {
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    alert('Usuário Cadastrado ' + user.email);
                    AsyncStorage.setItem('email', user.email);
                    console.log(user.email)
                    navigation.navigate('LoginScreen');

                    try {
                        supabase.post('/usuario', {
                            email: user.email,
                        }).then(
                            (response) => {
                                console.log('cadastro com sucesso supa')
                            })
                    } catch (error) {
                        console.log('erros ao cadastrar', error);
                    }

            })
            } catch(error) {
                const errorMessage = error.message;
                alert(error.message);
            }; 
        }

    };

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
        <ButtonBig
            title="Fazer Cadastro"
            onPress={handleSignUp}
        />
    </View>
</View>
  )
}

export default Cadastro

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
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,

    },
    logoView: {
        marginBottom: 40,
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

})