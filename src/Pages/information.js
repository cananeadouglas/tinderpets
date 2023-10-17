import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import Beagle from '../../assets/img/bea.png';
import Bull from '../../assets/img/bull.png';
import Gold from '../../assets/img/gold.png';
import Past from '../../assets/img/past.png';
import Pood from '../../assets/img/pood.png';
import Rott from '../../assets/img/rott.png';
import York from '../../assets/img/york.png';
import Dach from '../../assets/img/dach.png';
import Boxe from '../../assets/img/boxe.png';
import Labr from '../../assets/img/labr.png';

import supabase from '../supabase';


const Information = () => {

    const Superior = () => {
        return (
            <View style={styles.header}> 
                <Text style={styles.texto}>
                Atualmente, a Federação Cinológica
                Internacional – FCI, órgão mundial de controle e registro de
                cães de raça pura, reconhece em torno de 354 raças caninas,
                as quais são distribuídas em 10 diferentes grupos raciais
                de acordo com as características fenotípicas e funcionais
                (FCI, 2021).
                Em resumo, as características fenotípicas se referem à 
                aparência física de um cão, enquanto as características
                funcionais estão relacionadas ao seu comportamento e 
                habilidades. 
                </Text>
            </View>
        )
    }

    const Boxes = () => {

        // const [ description, setDescription ] = useState([]);

        // useEffect ( () => {

        //     const getSexoAnimal = async () => {
        //       try {
        //         await supabase.get('/racaanimal?id=eq.1&select=description').then((response) => {
        //             console.log(response.data)
        //             setDescription(response.data);
        //         })
        //       } catch (error) {
        //         console.log('erro', error);
        //       }
        //     }
        //     getSexoAnimal()
        //   }, []);

        return (
            <View style={styles.boxContainer}>

                <View style={styles.box}>
                    <Image source={Beagle} />
                    {/* {description.map((racaanimal, index) => (
                    <Text
                    style={styles.texto} key={index}
                    >
                    Descrição: {racaanimal.description} {'\n'}
                    </Text> 
                    ))} */}
                    <Text style={styles.texto}>
                    Beagles são conhecidos por seu olfato aguçado e são frequentemente
                     usados em trabalhos de detecção e caça.
                    </Text>

                </View>

                <View style={styles.box}>
                    <Image source={Bull} />
                    <Text style={styles.texto}>
                    Os Bulldogs são conhecidos por suas aparências distintas e
                     personalidades amigáveis e leais.
                    </Text>
                </View>

                <View style={styles.box}>
                    <Image source={Gold} />
                    <Text style={styles.texto}>
                        Assim como os Labradores, Golden Retrievers são muito 
                        amigáveis, inteligentes e são frequentemente usados como 
                        cães-guia e de terapia.</Text>
                </View>

                <View style={styles.box}>
                    <Image source={Past} />
                    <Text style={styles.texto}>
                        Estes cães são altamente inteligentes e são frequentemente
                         usados como cães de trabalho em funções como pastoreio e 
                         aplicação da lei.</Text>
                </View>

                <View style={styles.box}>
                    <Image source={Pood} />
                    <Text style={styles.texto}>
                        Poodles são altamente inteligentes e vêm em três tamanhos
                         diferentes: padrão, miniatura e brinquedo.</Text>
                </View>

                <View style={styles.box}>
                    <Image source={Rott} />
                    <Text style={styles.texto}>
                        Rottweilers são conhecidos por sua lealdade e força e
                         são frequentemente usados como cães de guarda.</Text>
                </View>

                <View style={styles.box}>
                    <Image source={York} />
                    <Text style={styles.texto}>
                        Estes cães pequenos são conhecidos por sua personalidade 
                        animada e pelagem longa e sedosa.</Text>
                </View>

                <View style={styles.box}>
                    <Image source={Dach} />
                    <Text style={styles.texto}>
                        Dachshunds, ou \"salsichas\", são conhecidos por seus corpos
                         longos e orelhas caídas.</Text>
                </View>

                <View style={styles.box}>
                    <Image source={Boxe} />
                    <Text style={styles.texto}>
                        Boxers são cães atléticos, leais e brincalhões, e são 
                        frequentemente escolhidos como animais de estimação da 
                        família.</Text>
                </View>

                <View style={styles.box}>
                    <Image source={Labr} />
                    <Text style={styles.texto}>
                        Conhecido por sua natureza amigável, inteligência e 
                        facilidade de treinamento, o Labrador é uma das raças mais 
                        populares do mundo.</Text>
                </View>

            </View>
        )
    }

    const Inferior = () => {
        return (
            <View style={styles.header}> 
                <Text style={styles.texto}>
                “Chegará o dia em que todo homem conhecerá
                o íntimo dos animais. Nesse dia, um crime contra
                 um animal será considerado um crime contra a
                 própria humanidade.” ― Leonardo da Vinci
                </Text>
            </View>
        )
    }

  return (
    <ScrollView>
        <SafeAreaView style={styles.container}>
            <Superior />
            <Boxes></Boxes>
            <Inferior />
        </SafeAreaView>
    </ScrollView>
  )
}

export default Information

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: getStatusBarHeight(),
        alignItems: 'center',
        backgroundColor: '#d0d6dc',
      },
    
      header: { 
        width: '90%',
        height: 280,
        padding: 20,
        backgroundColor: '#d0d6dc',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
    
      boxContainer: {
        width: '90%',
        height: 1806, // altura total box container
        backgroundColor: '#d0d6dc',
        padding: 2,
        flexDirection: 'column',
        //flexWrap: 'wrap',
      },
    
      box: {
        width: '100%',
        height: 180, // altura box
        padding: 10,
        backgroundColor: '#6050d0d6dc91',
        //justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        //borderWidth: 6,
      },
    
      footer: {
        width: '100%',
        height: 350,
        marginLeft: 15,
        //backgroundColor: '#c8c8c8',
        gap: 20,
        justifyContent: 'center', // justifica na vertical
      },
      texto: {
        fontSize: 20,
        textAlign: 'center',
      },
})