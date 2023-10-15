import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {

    constructor(props){ super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
            title: '1',
            text: 'dog',
            imageUri: 'https://media.istockphoto.com/id/1138490082/pt/foto/where.jpg?s=1024x1024&w=is&k=20&c=djeBM611R2qktRD7s5kCDRq1bwbkanMRil2qQDu0dC0=',
          },
          {
            title: '2',
            text: 'dog',
            imageUri: 'https://media.istockphoto.com/id/1168978665/pt/foto/cute-dog.jpg?s=1024x1024&w=is&k=20&c=d6RdGcLkjCrdQ1hmjRChOGeVTxjQZVBD701MxFR5ARQ=',
          },
          {
            
            title: '3',
            text: 'dog',
            imageUri: 'https://media.istockphoto.com/id/858377430/pt/foto/australian-kelpie-dog.jpg?s=1024x1024&w=is&k=20&c=XhzVD65EXkXEwniPAlg3jmmiAxepySdi4JTeDvC001M=',
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View>
            <Image source={{ uri: item.imageUri }} 
            style={styles.renderapp}
            />
          </View>

        )
    }

    render() {
        return (
            <View style={styles.containerView}>
                <Carousel
                    layout={"default"}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={520}
                    itemWidth={300}
                    renderItem={this._renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
        );
    }
}

export const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
    },
    renderapp: {
        backgroundColor:'floralwhite',
        borderRadius: 5,
        width: 350,
        height: 545,
        padding: 30,
        marginLeft: -90,
        marginRight: 90,
    },
})