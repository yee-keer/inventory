import {Camera} from 'expo-camera'
import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TextInput, Pressable } from 'react-native';

const Barcode = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [scannedData, setScannedData] = useState(null);
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    const SearchItem = ({ type, data }) => {
      navigation.navigate('Item',{itemId: data})
    };
  

   
  return (
    <View style={styles.container}>
    <Pressable style={styles.SearchCode} onPress={() => {navigation.navigate('Home')}}> 
      <Text style={styles.SearchCodeText}>Back</Text>
    </Pressable>
    <View style={styles.CenterView}>
        <View style={styles.Cam}>
            <Camera
                style={styles.camera}
                type={Camera.Constants.Type.back}
                onBarCodeScanned={scanned ? undefined : SearchItem}
            />
        </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%'
    },
    SearchCode: {
        width: 100,
        height: 30,
        marginTop: 30,
        marginLeft: '5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 4
    },
    SearchCodeText: {
        color: 'white',
      },
      CenterView: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150,
        borderRadius: 4
        
    },
    Cam:{
        borderWidth: 2,
        borderRadius: 10,
        overflow: 'hidden',
        width: 300,
        height: 300
    },
    camera: {
      width: '100%',
      height: '100%',
      aspectRatio: 1
    },
});

export default Barcode;