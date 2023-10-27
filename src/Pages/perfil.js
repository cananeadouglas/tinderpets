import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { getAuth, signOut } from "firebase/auth";
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import picker
import * as ImagePicker from 'expo-image-picker';
import { ButtonSmall } from '../Components/buttonSmall';
import { ButtonBig } from '../Components/buttonBig';
import { useNavigation } from '@react-navigation/core';
import { auth } from '../firebase';
import supabase from '../supabase';

export default function Perfil() {

    const navigation = useNavigation();

    const currentUser = getAuth();
    
    // logout start
    if (currentUser != null) {
        //alert('logado')
    } else {
        alert('E necessário logar');
        navigation.navigate('LoginScreen');
    }

    function handleSignout () {
        try {
            signOut(auth)
            .then(() => {
                alert('Você se desconectou');
                navigation.navigate('LoginScreen');
            })
        } catch(error){
            const errorMessage = error.errorMessage;
            alert(errorMessage);
        }
    };
    // logout end

    
    const [ nomePet, setNomePet ] = useState(null);
    const [ sexoPet, setSexoPet ] = useState(null);
    const [ raca, setRaca ] = useState(null); 

    const getData0 = async () => {
        try {
            const value0 = await AsyncStorage.getItem('nomePet');
            if (value0 !== null) {
                setNomePet(value0);
                console.log(nomePet);
            }
        } catch (e) {
            console.log(Error)
        }
    };
    getData0();

    const getData1 = async () => {
        try {
            const value1 = await AsyncStorage.getItem('sexoPet');
            if (value1 !== null) {
                if(value1 === '1'){
                    setSexoPet('Macho');
                    console.log(sexoPet);
                }
                if(value1 === '2'){
                    setSexoPet('Fêmea');
                    console.log(sexoPet);
                }
            }
        } catch (e) {
            console.log(Error)
        }
    };
    getData1();

    function completarCadastro() {
        //alert('completar cadastro')
        navigation.navigate('Complete')
    }

    function atualizarLocalizacao() {
        //alert('atualizar Geolocalização')
        navigation.navigate('Geolocation')
    }


    // avatar imagem picker start
    const [ avatar, setAvatar ] = useState('https://imgs.search.brave.com/zQeT3TlpMUBwXSaS7gW01zixHV582f8kNxW1q9X23p0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by91/c2VyLXByb2ZpbGUt/ZnJvbnQtc2lkZS13/aXRoLXdoaXRlLWJh/Y2tncm91bmRfMTg3/Mjk5LTQwMDA5Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn');

    const handleImagePicker = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            aspect: [4,4], //deixar a foto quadrada
            allowsEditing: true, // permitir edição
            base64: true, 
            quality: 1,
        });

        if (!result.canceled){
            setAvatar(result.assets[0].uri);
        }
    };
    // avatar imagem picker end


    // get raça start
    const [obterRaça, setObterRaca ] = useState('');
    
    const obterraça = async () => {
        try {
            const email = await AsyncStorage.getItem('email');
            if(email !== ''){
                console.log(email)
                supabase.get(`/usuario?select=racaanimal(title)&email=eq.${email}`)
                .then (
                    (response) => {
                        const dados = response.data;
                        //console.log(dados[0].racaanimal.title)
                        setRaca(dados[0].racaanimal.title);
                        console.log(raca)
                    }
                )
            }
        } catch (error) {
            console.log('error' , error)
        }
    }
    obterraça();


    // get raça end

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text
                    style={styles.nome}>
                    Nome Pet: {nomePet}{"\n"}
                    Sexo: {sexoPet}{"\n"}
                    Raça: {raca}
                </Text>
            <View>
                <Image
                    source={{ uri: avatar }}
                    style={styles.imagem}
                />
                <ButtonSmall
                    title='Editar foto'
                    onPress={handleImagePicker}
                />
            </View>
                
            </View>
            <ButtonBig 
                title='Completar o Cadastro'
                onPress={completarCadastro}
            />
            <ButtonBig 
                title='Permitir Localização'
                onPress={atualizarLocalizacao}
            />
            <View>

            <View>
            <Text>Logado com: { auth.currentUser?.email } </Text>
                <ButtonBig
                    title="Sair do sistema"
                    onPress={handleSignout}
                />
            </View>

      </View>
        </SafeAreaView>
    );
  
};

export const styles = StyleSheet.create({

      container: {
        //flex: 1,
        height: 170,
        width: '100%', // usar 100% da largura
        justifyContent: 'space-between', // espalhar para os lados
        flexDirection: 'row', // espalhar de forma de linhas
        alignItems: 'center', // centralizar os itens
        marginTop: getStatusBarHeight(), // margem superior iphone + 10
        textAlign: 'center', 
        padding: 45, // 
      },

    imagem: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderEndWidth: 2,
        borderColor: '#605091',
        
    },

    nome: {
        fontSize: 25,
        color: '#605091',
        fontWeight: "bold",
    },


});