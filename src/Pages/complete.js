import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ButtonBig } from '../Components/buttonBig';
import Imgpets from '../../assets/pets.png';
import { useNavigation } from '@react-navigation/core';
import ButtonWithFlatlistRaca from '../Components/buttonWithFlatlistRaca';
import AsyncStorage from '@react-native-async-storage/async-storage';
import supabase from '../supabase';

const Complete = () => {

    const [ name, setName ] = useState('');
    const [ idade, setIdade ] = useState('');
    const [ selectedRaca, setSelectedRaca ] = useState('');
    const [ sexoPet, setSexoPet ] = useState('');

    const navigation = useNavigation();

    async function completarcadastro() {
        
        if (name !== '' && idade !== '' && selectedRaca !== '') {
            console.log(name, idade, selectedRaca)
            await AsyncStorage.setItem('nomeDono', name);
            await AsyncStorage.setItem('idadePet', idade);
            await AsyncStorage.setItem('racaPet', JSON.stringify(selectedRaca));
            const nomePet = await AsyncStorage.getItem('nomePet');
            
            const sexoPet = await AsyncStorage.getItem('sexoPet');
            if(sexoPet === '1'){
                setSexoPet(1);
                console.log('sexoM', sexoPet);
            }
            if(sexoPet === '2'){
                setSexoPet(2);
                console.log('sexoF', sexoPet);
            }

            const email = await AsyncStorage.getItem('email');
            try {
                await supabase.patch(`/usuario?email=eq.${email}`, {
                    nome: name,
                    id_tipo: 1,
                    id_raca: selectedRaca,
                    idade_pet: idade,
                    nome_pet: nomePet,
                    id_sexo: sexoPet,
                }).then(
                    (response) => {
                        alert('Atualizado com sucesso', response.data);
                        navigation.navigate('AuthRoutes')
                    })
            } catch (error) {
                console.log('error ao completar cadastro', error);
            }

        }else {
            alert('preencha todos os campos');
            return
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
            placeholder='Nome do Dono do Cão'
            value={name} // capturar o que foi digitado
            onChangeText={text => setName(text)} // onchange transfere para a variável setName
            style={styles.input}
        />
        <TextInput
            placeholder='Idade do Cão. Ex: 18 meses ou 1 ano e meio'
            value={idade}
            onChangeText={text => setIdade(text)} // onchange transfere para a variável setIdade
            style={styles.input}
        />
        <Text style={styles.headerText1}>
            Indique a raça do seu cão aqui.
        </Text>
        <View>
            <ButtonWithFlatlistRaca
                selectedRaca={selectedRaca}
                onRacaSelect={(raca) => {
                    setSelectedRaca(raca);
            }}
            />
        </View>
    </View>

    <View style={styles.buttonContainer}>

        <ButtonBig
            title="Atualizar Cadastro"
            onPress={completarcadastro}
        />
        
    </View>
</View>
  )
}

export default Complete

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d0d6dc',
    },
    logoView: {
        marginBottom: 40,
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
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    headerText1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#605091",
        alignItems: "center",
        backgroundColor: "#d0d6dc",
        justifyContent: 'space-around',
        textAlign: 'center',
        padding: 10,
        
    },
})