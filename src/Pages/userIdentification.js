import React, { useEffect, useState } from "react";

import { SafeAreaView, Text, TextInput, View, 
    StyleSheet } from 'react-native';

 // importando useNavigation para ter navegação
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

//importando components button
import { ButtonBig } from '../Components/buttonBig';

import ButtonWithFlatList from "../Components/buttonWithFlatList";

const UserIdentification = () => {

    const navigation = useNavigation();

    const [ nomeAnimal, setNomeAnimal ] = useState(''); // se vai receber uma string fica fazio ''
    const [ selectedGender, setSelectedGender ] = useState('');

    async function preenchimento() {

        if (nomeAnimal === ''){
            alert('Por favor, preencha o nome do animal.');
            return;
        }
        if (selectedGender === '') {
            alert('Por favor, indique o sexo do animal.');
            return;
        }
        if (selectedGender === 1) {
            try {
                await AsyncStorage.setItem('nomePet', nomeAnimal);
                await AsyncStorage.setItem('sexoPet', JSON.stringify(selectedGender));
                console.log(nomeAnimal);
                console.log(selectedGender);
                navigation.navigate('Confirmation')
            } catch (e) {
                console.log(error);
            }
        }
        if (selectedGender === 2) {
            try {
                await AsyncStorage.setItem('nomePet', nomeAnimal);
                await AsyncStorage.setItem('sexoPet', JSON.stringify(selectedGender));
                console.log(nomeAnimal);
                console.log(selectedGender);
                navigation.navigate('Confirmation')
            } catch (e) {
                console.log(error);
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.contente}>
                    <View style={styles.header}>
                        <Text style={styles.headerText1}>Qual é o nome do Pet? {'\n'}</Text>
                        <TextInput
                            placeholder="Nome do animal"
                            value={nomeAnimal}
                            onChangeText={text => setNomeAnimal(text)}
                            style={styles.input}
                        />
                    </View>
                        <Text style={styles.headerText2}>É macho ou fêmea?</Text>
                    <View>
                        <ButtonWithFlatList
                            selectedGender={selectedGender}
                            onGenderSelect={(gender) => {
                                setSelectedGender(gender);
                            }}
                        />
                    </View>
                </View>
                    <View style={styles.containerbutton}>
                        <ButtonBig
                            title="Continuar"
                            onPress={preenchimento}
                        />
                    </View>
        </SafeAreaView>
    )
}

export default UserIdentification

export const styles = StyleSheet.create({
    
    container: {
        flex: 1, // Preencher toda a altura da tela
        width: '100%',
        alignItems: "center",
        backgroundColor: "#d0d6dc",
        justifyContent: 'center',
        paddingTop: 40,
        margintop: 50,
    },

    contente: {
        width: '80%',
        //marginTop: getStatusBarHeight() + 50,
        paddingHorizontal: 16,
        backgroundColor: '#d0d6dc',
        padding: 20,
        borderRadius: 8,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    header: {
        alignItems: 'center',
    },

    headerText1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#605091",
        alignItems: "center",
        backgroundColor: "#d0d6dc",
        justifyContent: 'space-around',
        textAlign: 'center',
    },

    containerbutton: {
        width: '60%',
    },

    headerText2: {
        fontSize: 28,
        padding: 30, //todos os lados
        textAlign: "center",
        color: "#605091",
        alignItems: "center",
        paddingHorizontal: 20,
        fontWeight: 'bold',
    },

    container2: {
        alignItems: "center",
        backgroundColor: "#d0d6dc",
        textAlign: 'center',
        display: 'flex',
        padding: 20,
        marginBottom: 15,
        flexDirection: 'column',
    },

    input: {
        borderBottomWidth: 1,
        borderColor: "#605091",
        width: '100%',
        fontSize: 25,
        textAlign: "center",
        color: "#605091",
        alignItems: "center",
        paddingHorizontal: 40,
        fontWeight: "bold",
        paddingBottom: 10,
    },

    footer: {
        flex: 1,
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 20,
    },

// render
    title: {
        color: "#605091",
        fontSize: 20,
    },
    
    item: {
        backgroundColor: "#bdbec3",
        width: 76,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginHorizontal: 5,
    },

});
