import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import supabase from '../supabase';

const ButtonWithFlatList = ({ selectedGender, onGenderSelect }) => {

  const [ sexoanimal, setSexoanimal ] = useState([]);
  
  useEffect ( () => {

    const getSexoAnimal = async () => {
      try {
        await supabase.get('/sexoanimal').then((response) => {
          console.log(response.data);
          setSexoanimal(response.data);
        })
      } catch (error) {
        console.log('erro', error);
      }
    }
    getSexoAnimal()
    }, []);


  
    const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedGender ? '#605091' : '#bdbec3';
      const color = item.id === selectedGender ? 'white' : '#605091';
  
      return (
        <TouchableOpacity
          onPress={() => onGenderSelect(item.id)}
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
        data={sexoanimal}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    borderRadius: 15,
    marginRight: 8,
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default ButtonWithFlatList;
