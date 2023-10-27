import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';
import { sendPasswordResetEmail} from "firebase/auth";
import { auth } from '../firebase';

import Imgpets from '../../assets/pets.png';
import { ButtonBig } from '../Components/buttonBig';

const Redefinicao = () => {

    const [ email, setEmail ] = useState('');

    const navigation = useNavigation();

    const handleRedefini = () => {
        if (email !== ''){
            sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Foi enviado um email para: ' + email + '. Verifique a sua caixa de email.');
                navigation.navigate('LoginScreen')
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert('Ops! Alguma coisa não deu certo ' + errorMessage + '. Tente novamente');
                return;
            })
            
        } else {
            alert('É preciso informar o mesmo email cadastrado na plataforma anteriormente.')
            return;
        }
    }
 
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
        </View>

        <View style={styles.buttonContainer}>
            <ButtonBig
                    title="Redefinir"
                    onPress={handleRedefini}
            />
            
        </View>
    </View>
    )
}

export default Redefinicao

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