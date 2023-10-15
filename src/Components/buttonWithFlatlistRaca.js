import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import supabase from '../supabase';

const ButtonWithFlatList = ({ selectedRaca, onRacaSelect }) => {

  const [ racaanimal, setRacaanimal ] = useState([]);

  useEffect ( () => {

    const getSexoAnimal = async () => {
      try {
        await supabase.get('/racaanimal?select=id,title').then((response) => {
          console.log(response.data);
          setRacaanimal(response.data);
        })
      } catch (error) {
        console.log('erro', error);
      }
    }
    getSexoAnimal()
    }, []);


  
    const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedRaca ? '#605091' : '#bdbec3';
      const color = item.id === selectedRaca ? 'white' : '#605091';
  
      return (
        <TouchableOpacity
          onPress={() => onRacaSelect(item.id)}
          style={[styles.item, { backgroundColor }]}
        >
          <Text style={[styles.title, { color }]}>{item.title}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <View>
      <View style={styles.container}>
      <FlatList
        data={racaanimal}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        numColumns={3}

      />
      </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'block', /* Necessário para o margin funcionar */
    margin: 'auto',
  },
  item: {
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
    display: 'block', /* Necessário para o margin funcionar */
    marginLeft: 5, /* aqui */
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold'
  },
});

export default ButtonWithFlatList;
