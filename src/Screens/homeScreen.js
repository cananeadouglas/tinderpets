import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useNavigation } from '@react-navigation/core';
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../firebase';
import { ButtonBig } from '../Components/buttonBig';

const HomeScreen = () => {

  const navigation = useNavigation();

  const currentUser = getAuth();


  if (currentUser != null) {
    //alert('logado')
  } else {
    alert('E necessário logar');
    navigation.navigate('LoginScreen');
  }

  function handleSignout() {
    signOut(auth)
      .then(() => {
        alert('Você se desconectou');
        navigation.navigate('LoginScreen');
      })
      .catch((error) => {
        const errorMessage = error.errorMessage;
        alert(errorMessage);
      })
  };


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.buttonconteiner}>
          <Text>Logado com: {auth.currentUser?.email} </Text>
          <ButtonBig // ButtonBig Tipado em componentes
            title="Sair do sistema"
            onPress={handleSignout}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  header: {
    width: '100%', // usar 100% da largura
    flexDirection: 'row', // espalhar de forma de linhas
    justifyContent: 'space-between', // espalhar para os lados
    alignItems: 'center', // centralizar os itens
    marginTop: getStatusBarHeight(), // margem superior iphone + 10
    textAlign: 'center',
    padding: 30, // 
  },
  buttonconteiner: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})