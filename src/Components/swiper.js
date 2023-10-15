import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
 
import Swiper from 'react-native-swiper'

const fotoUrl1 = 'https://media.istockphoto.com/id/1138490082/pt/foto/where.jpg?s=1024x1024&w=is&k=20&c=djeBM611R2qktRD7s5kCDRq1bwbkanMRil2qQDu0dC0=';
const fotoUrl2 = 'https://media.istockphoto.com/id/1168978665/pt/foto/cute-dog.jpg?s=1024x1024&w=is&k=20&c=d6RdGcLkjCrdQ1hmjRChOGeVTxjQZVBD701MxFR5ARQ=';
const fotoUrl3 = 'https://media.istockphoto.com/id/858377430/pt/foto/australian-kelpie-dog.jpg?s=1024x1024&w=is&k=20&c=XhzVD65EXkXEwniPAlg3jmmiAxepySdi4JTeDvC001M=';

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide}>
          <Image 
            source={{uri: fotoUrl1}}
            resizeMode="contain"
            style={{height: '100%', width: '100%' }}/>
        </View>
        
        <View style={styles.slide}>
        <Image 
            source={{uri: fotoUrl2}} 
            resizeMode="contain" 
            style={{height: '100%', width: '100%' }}/>
        </View>
        
        <View style={styles.slide}>
        <Image 
            source={{uri: fotoUrl3}} 
            resizeMode="contain" 
            style={{height: '100%', width: '100%' }}/>
        </View>
      </Swiper>
    )
  }
}
 
AppRegistry.registerComponent('myproject', () => SwiperComponent)

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
      
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })