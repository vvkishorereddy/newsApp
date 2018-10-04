import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import NewsList from "../Components/Search/NewsList";

const Search = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <NewsList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: { flex: 1 }
});

export default Search;
