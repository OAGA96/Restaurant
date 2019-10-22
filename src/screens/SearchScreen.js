import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsLists from "../components/ResultsLists";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }} >
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text> {errorMessage} </Text> : null}
      <ScrollView>
        <ResultsLists
          results={filterResultsByPrice("$")}
          title="Economico"
        />
        <ResultsLists
          results={filterResultsByPrice("$$")}
          title="Poco Caro"
        />
        <ResultsLists
          results={filterResultsByPrice("$$$")}
          title="Caro"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

SearchScreen.navigationOptions = {
  title: 'App de Restaurante'
}

export default SearchScreen;
