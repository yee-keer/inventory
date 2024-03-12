import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Pressable } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const Home = ({navigation}) => {
  const [Code,SetCode] = useState("")
  function Search(){
    if (Code != '' && !isNaN(Code)){
      navigation.navigate('Item',{itemId: Code})
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.Input} placeholder='Enter Code' onChangeText={Text => SetCode(Text)}/>    
      <Pressable style={styles.SearchCode} onPress={Search}> 
        <Text style={styles.SearchCodeText}>Search Code</Text>
      </Pressable>
      <Pressable style={styles.SearchCode} onPress={() => {navigation.navigate('QrCode')}}> 
        <Text style={styles.SearchCodeText}>Code Scanner</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  Input: {
    height: '30px',
    width: '60%',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 4,
    fontSize: 15,
    paddingLeft: 8
    
  },
  SearchCode: {
    width: '50%',
    height: 30,
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 4
  },
  SearchCodeText: {
    color: 'white',
  },
  dataContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },

});

export default Home;
