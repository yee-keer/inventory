import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TextInput, Pressable } from 'react-native';

const Item = ({route,navigation}) => {
    const {itemId} = route.params 
    const [data, setData] = useState(null);


    useEffect(() => {
        Get_Data()
    },[])
    async function Get_Data(){
        try {
            const Response = await fetch(`http://192.168.8.104:8000/item?ean13=${itemId}`,{
                method: 'GET'
            })

            if (Response.ok){
                setData(await Response.json())

            }
        }catch(err){
            throw err
        }
    }

    if (!data){
        return(
            <View style={styles.container}>
                <Text>Not Found</Text>
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <Text>id :{data.Ean13}</Text>
            <Text>Name: {data.Name}</Text>
            <Text>Quantity: {data.Quantity}</Text>
            <Text>Price: Rm{data.Price}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    Pad: {
        paddingTop: 10
    }
})

export default Item;