import React from 'react';
import {View, Text, Button, StyleSheet, AsyncStorage} from 'react-native';

const SignIn = ({navigation}) =>{

    getAllKeys = async() =>{
        let keys =[]
        try{
            keys = await AsyncStorage.getAllKeys()
            alert(keys);
        } catch(e){
            alert(e)
        }
        console.log('Done.')
    }

    return (
        <View>
            <Button title="Hola pues" onPress= {getAllKeys} />
        </View>
    );
}

const styles = StyleSheet.create({});

export default SignIn;