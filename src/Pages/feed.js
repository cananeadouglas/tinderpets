import { ScrollView, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { MaterialIcons } from '@expo/vector-icons';

import Swiper from '../Components/swiper';

const Feed = () => {

  const Photo = () => {
    return (
      <View style={styles.header}> 
        <Swiper />
      </View>
    )
  }; 

  const Boxes = () => {

    function handelMatch() {
        alert('gostei')
    }

    function handelCancel() {
        alert('não gostei')
    }


    return (
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text></Text>
          </View>
        </View>

        <View style={styles.box}>
            <TouchableOpacity style={styles.inner}>
                <MaterialIcons
                    name='stars'
                    size={50}
                    color='green'
                    onPress={handelMatch}
                />
            </TouchableOpacity>
        </View>

        <View style={styles.box}>
            <TouchableOpacity style={styles.inner}>
                  <MaterialIcons
                      name='cancel'
                      size={50}
                      color='red'
                      onPress={handelCancel}
                  />
            </TouchableOpacity>
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
              <Text></Text>
            </View>
        </View>

      </View>
    );
  };

  const Footer = () => {
    return (
        <View style={styles.footer}> 
          <Text style={styles.texto}> Nome: </Text>
          <Text style={styles.texto}> Distância: </Text>
          <Text style={styles.texto}> Idade: </Text>
          <Text style={styles.texto}> Biografia: </Text>
          <Text style={styles.texto}> Nome do Dono: </Text>
        </View>
      )
  };


  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <Photo />
      <Boxes />
      <Footer />
    </SafeAreaView>
    </ScrollView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight()
  },

  header: { 
    width: '100%',
    height: 550,
    backgroundColor: '#c8c8c8',
    alignItems: 'center',
    justifyContent: 'center',
  },


  boxContainer: {
    width: '100%',
    height: 75,
    //backgroundColor: 'red',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  box: {
    width: '25%',
    height: 70,
    padding: 10,
    //backgroundColor: '#c8c8c8',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    //borderWidth: 6,
  },

  inner: {
    flex: 1,
    backgroundColor: '$c8c8c8', 
    alignItems: 'center', // justifica na horizontal 
    justifyContent: 'center',
    justifyContent: 'center',
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
  },
});
 
export default Feed;