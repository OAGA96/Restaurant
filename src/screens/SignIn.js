import React, {useState} from 'react';
import { StyleSheet, View, Text, AsyncStorage, ScrollView, Alert, Image } from "react-native";
import { Header, Input, Button, Divider } from "react-native-elements";
import Icon from "react-native-vector-icons";
import * as Animatable from "react-native-animatable";

const SignIn = ({navigation}) =>{
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    getItem = async() => {
        try{
            const value = await AsyncStorage.getItem(correo);
            alert(value);
        } catch (e){
            alert(e);
        }
        console.log('Done.')
    }


    loginUsuario = async() => {
        try{
            const datos = await AsyncStorage.getItem(mail);
            var arr = JSON.parse(datos);
            var psswd = arr[3]
            console.log(datos);
            console.log(psswd)
            if(psswd != password){
                Alert.alert('Error', 'El Usuario o contraseña no coinciden.')
            }else{
                navigation.push('Search')
            }
        } catch (e){
            Alert.alert('Error', 'El Usuario o contraseña no coinciden.')
        }
    }



    return (
        //container
        <View> 
            {/* Imagen de logo  */}
            <Animatable.View animation='bounceIn' style={styles.conImagen} >
                <Image style={styles.imagen} source={{uri:'https://i.pinimg.com/originals/f7/29/74/f729747b59486815fbf76e86018fdd58.png'}} />
            </Animatable.View>

            <View style={styles.container} >
                {/* Form y boton con animacion  */}
                <Animatable.View animation='fadeInUpBig' >
                    <View>
                        <Input
                            placeholder="Correo"
                            leftIcon={{ type: "antdesign", name: "mail" }}
                            onChangeText={mail => setMail(mail)}
                        />
                        <Input
                            placeholder="Contraseña"
                            onChangeText={password => setPassword(password)}
                            leftIcon={{ type: "entypo", name: "lock" }}
                            secureTextEntry={true}
                        />
                        <Button title="Iniciar Sesion" type="clear" onPress={loginUsuario} />
                        <Button title="Registrarse" style={{color: 'red'}} onPress={() => navigation.navigate('Up')} />
                    </View>
                </Animatable.View>
            </View>             
        </View>
    );
}

const styles = StyleSheet.create({
    imagen: {
        height: 80,
        width: 80
    },
    conImagen:{
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SignIn;