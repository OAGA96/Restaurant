import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image
} from "react-native";
import * as Animatable from 'react-native-animatable'
import yelp from "../API/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const [review, setReview] = useState(null);

  //Animaciones

  //fin animaciones

  const id = navigation.getParam("id");

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  const GetReviews = async id => {
    const rvResponse = await yelp.get(`/${id}/reviews`);
    setReview(rvResponse.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  useEffect(() => {
    GetReviews(id);
  }, []);

  if (!result || !review) {
    return null;
  }

  const info = Object.values(review.reviews);

  return (
    <View style={styles.container}>
      {/* Imagenes */}
      <View style={styles.imageContainer}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={result.photos}
          keyExtractor={photo => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
      </View>
      {/* Fin imagenes */}

      {/* Titulo del Restaurante */}
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}> {result.name} </Text>
      </View>
      {/* Fin Titulo */}

      {/* Reviews */}
      <View style={styles.reviewContainer}>

        <Animatable.View animation='fadeInUpBig' >
          <View style={styles.review}>
            <Text style={styles.nombre}> {info[0].user.name} </Text>
            <Text> {info[0].text} </Text>
          </View>

          <View style={styles.review}>
            <Text style={styles.nombre}> {info[1].user.name} </Text>
            <Text> {info[1].text} </Text>
          </View>

          <View style={styles.review}>
            <Text style={styles.nombre}> {info[2].user.name} </Text>
            <Text> {info[2].text} </Text>
          </View>
        </Animatable.View>

      </View>
      {/* Fin reviews */}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 250,
    marginRight: 6,
    borderRadius: 5,
    flex: 3
  },
  imageContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15
  },
  titulo: {
    fontSize: 28,
    fontFamily: 'monospace',
    textAlign: "center",
    fontWeight: "bold"
  },
  tituloContainer: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    backgroundColor: "#ffffcf",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold"
  },
  review: {
    backgroundColor: "#ffffcf",
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 12,
    borderRadius: 10
  },
  reviewContainer: {
    //backgroundColor: "#4fc3f7",
    flex: 6,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 10
  },
  container: {
    backgroundColor: "white",
    flex: 10
  }
});

ResultsShowScreen.navigationOptions = {
  title: "Restaurante"
};

export default ResultsShowScreen;
