import React, { useState } from "react";
import { StyleSheet, View, Text, AsyncStorage, ScrollView, Alert } from "react-native";
import { Header, Input, Button, Divider } from "react-native-elements";
import Icon from "react-native-vector-icons";
import * as Animatable from "react-native-animatable";
import { AntDesign } from "@expo/vector-icons";
import { stringify } from "qs";

const SignUp = ({navigation}) => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [correo, setCorreo] = useState("");
  const [psswd, setPsswd] = useState("");

  setValue = async() =>{

    //Checa Si esta vacio
    if(nombre && edad && correo && psswd ){
        var regex = new RegExp(".+\@.+\..+")
        var bool = regex.test(correo)
        //checa si cumple con el formato de correo
        if(bool){
            var regex = new RegExp("^[0-9]*$")
            var bool = regex.test(edad)
            //Checa si edad son numeros
            if(bool){
                var persona = [nombre, edad, correo, psswd];
    
                try{
                    await AsyncStorage.setItem(correo, JSON.stringify(persona));
                }catch(e){
                    alert(e)
                };
                console.log('Done.')
                navigation.navigate('In')
            }else{
                Alert.alert('Advertencia', 'Solo se Admiten numeros en el capo de edad');
            }

        }else {
            Alert.alert('Advertencia', 'Correo no coincide con el formato.')
        }

    } else {
        Alert.alert('Advertencia', 'Complete todos los campos');
    }
  };


  getItem = async() => {
    try{
        const value = await AsyncStorage.getItem(correo);
        alert(value);
    } catch (e){
        alert(e);
    }
    console.log('Done.')
  }

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

  removeFew = async() =>{
      let keys = []
      try{
        keys = await AsyncStorage.getAllKeys()
        try{
            await AsyncStorage.multiRemove(keys)
        }catch (e){
            alert(e)
        }
      }catch(e){
          alert(e);
      }
  }

  return (
    <View>
      <View>
        <Header
          leftComponent={{ icon: "home", color: "#fff", paddingBottom: 24 }}
          centerComponent={{
            text: "Crear usuario",
            style: {
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
              paddingBottom: 24
            }
          }}
          containerStyle={{
            height: 48,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center"
          }}
        />
      </View>
      <Animatable.View animation='fadeInUpBig' >
        <View style={styles.form}>
          <Divider
            style={{ backgroundColor: "white", height: 6, marginBottom: 18 }}
          />
          <Input
            placeholder="Nombre"
            leftIcon={{ type: "antdesign", name: "user" }}
            onChangeText={nombre => setNombre(nombre)}
          />
          <Input
            placeholder="Edad"
            leftIcon={{ type: "font-awesome", name: "id-badge" }}
            onChangeText={edad => setEdad(edad)}
          />
          <Input
            placeholder="Correo"
            leftIcon={{ type: "antdesign", name: "mail" }}
            onChangeText={correo => setCorreo(correo)}
          />
          <Input
            placeholder="Contraseña"
            onChangeText={psswd => setPsswd(psswd)}
            leftIcon={{ type: "entypo", name: "lock" }}
            secureTextEntry={true}
          />
          <Button title="Registrarse" type="clear" onPress= {setValue} />
        </View>

        <View style={styles.footer}>
          <Button
            title="Ya tengo una cuenta"
            type="clear"
            titleStyle={{ color: "red" }}
            onPress= {() => navigation.navigate('In') }          
          />
          <Button
            title="Correos Registrados"
            type="clear"
            titleStyle={{ color: "red", paddingTop: 220 }}
            onPress= {getAllKeys}          
          />
          <Button
            title="Eliminar registros"
            type="clear"
            titleStyle={{ color: "red" }}
            onPress= {removeFew}          
          />
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    alignContent: "center"
  },
  form: {
    paddingTop: 40
  }
});

export default SignUp;