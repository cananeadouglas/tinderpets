import { SafeAreaView, Text, View, StyleSheet} from 'react-native';

import { useNavigation } from "@react-navigation/core";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ButtonBig } from "../Components/buttonBig";
import { useEffect, useState } from 'react';

import AuthRoutes from '../Routes/tab.routes';
import supabase from '../supabase';

const Confirmation = () => {

    const navigation = useNavigation();

    const [ nomePet, setNomePet ] = useState('');
    const [ sexoPet, setSexoPet ] = useState('');
    const [ email, setEmail ] = useState('');
    

    async function handleTabs() {

        const sexoPet = await AsyncStorage.getItem('sexoPet');
        const email = await AsyncStorage.getItem('email');
        const nomePet = await AsyncStorage.getItem('nomePet');

        if(nomePet !== '' && sexoPet !== '' && email !== '') {
            
            if(sexoPet === '1'){
                setSexoPet(1);
                console.log('sexoM', sexoPet);
            }
            if(sexoPet === '2'){
                setSexoPet(2);
                console.log('sexoF', sexoPet);
            }
            console.log(nomePet, sexoPet, email);

            try {
                await supabase.patch(`/usuario?email=eq.${email}`, {
                    nome_pet: nomePet,
                    id_sexo: sexoPet,
                }).then(
                    (response) => {
                        console.log('cadastro com sucesso, em supa')
                    })
            } catch (error) {
                console.log('erros ao cadastrar', error);
            }

        }

        //alert('chegou até aqui')
        navigation.navigate('AuthRoutes')
    }

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

    const getData1 = async () => {
        try {
            const value1 = await AsyncStorage.getItem('sexoPet');
            if (value1 !== null) {
                if(value1 === '1'){
                    setSexoPet('Macho');
                    //console.log(sexoPet);
                }
                if(value1 === '2'){
                    setSexoPet('Fêmea');
                    //console.log(sexoPet);
                }
            
            
            }
        } catch (e) {
          // error reading value
        }
    };
    getData1();


    return(
        <SafeAreaView style={styles.container}>
                <View style={styles.contente}>
                    <Text 
                        style={styles.headerText1}>
                        Muito bem do seu Pet é:{"\n"}
                        {"\n"} {nomePet} {"\n"}
                        {"\n"} O sexo selecionado foi: {"\n"}
                        {"\n"} {sexoPet}.
                    </Text>
                
                <View style={styles.containerbutton}>
                    <ButtonBig
                        title="Continuar"
                        onPress={handleTabs}
                    />
                </View>
                </View>
        </SafeAreaView>
    )
}

export default Confirmation;

export const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        width: '100%',
        //alignItems: 'center',
        backgroundColor: '#d0d6dc',
        justifyContent: 'center',
      },
      headerText1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#605091',
        //alignItems: 'center',
        backgroundColor: '#d0d6dc',
        textAlign: 'center',
        //paddingHorizontal: 40,
        marginBottom: 40,
      },
      containerbutton: {
        width: '60%',
      },
      contente: {
        alignItems: 'center',
    },
});