import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity,
    StyleSheet } from 'react-native';

// icons
import { FontAwesome } from '@expo/vector-icons';

//images 
import quadroImg from '../../assets/quadro.png';

// importando useNavigation para ter navegação
import { useNavigation } from '@react-navigation/core';

const Welcome = () => {

    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification');
    }

    return (
        
        <SafeAreaView style={styles.container}>
            <View style={styles.wView}>
                <Text 
                    style={styles.headerText}>
                    Encontre o par {"\n"} 
                    perfeito para {"\n"}
                    o seu Pet.
                </Text>
            <Image 
                source={quadroImg} 
                style={styles.image} 
            />

            <Text 
                style={styles.headerDown}>
                    Com apenas um simples cadastro você encontrará
                    a par perfeito do seu pet, alinhado a um ambiente seguro.
                    Nas próximas telas você irá fornecer as informações do seu cão como o nome e sexo.
            </Text>

            <TouchableOpacity>
                <Text style={styles.button}>
                    <FontAwesome 
                        name='chevron-circle-right'
                        style={styles.icon}
                        onPress={handleStart}
                    />
                </Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
        
    )

}

export default Welcome

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d0d6dc",
        width: '100%',
    },
    headerText: {
        fontSize: 44,
        lineHeight: 55, 
        color: "#605091",
        textAlign: "center",
        paddingTop: 20,
        paddingHorizontal: 25,
        marginTop: 30,
        fontWeight: "bold",
    },
    wView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 20, // espaçamento do nome dentro do campo
        
    },
    image: {
        maxHeight: 230,
        objectFit: "contain",
    },
    headerDown: {
        fontSize: 20,
        paddingHorizontal: 36, 
        textAlign: "center",
        fontWeight: "bold",
        color: "#605091", 
        lineHeight: 28, // espaçamento entre o texto
    },
    button: {
        backgroundColor: "#d0d6dc", // cor de fundo
        borderRadius: 16, // deixar campos arredondados
        marginBottom: 40, // deixar mais abaixo
        width: 60, // largura
        height: 47, // altura
        textAlign: "center", // centralizar texto
    },
    icon: {
        fontSize: 60, // tamanho da fonte
        color: "#605091", // cor da fonte
        paddingHorizontal: 20,
    },
})