import React from "react";
import { View, SafeAreaView, ScrollView, StyleSheet } from "react-native";

import HeadLines from "../Components/Home/HeadLines";
import Business from "../Components/Home/Business";
import Entertainment from "../Components/Home/Entertainment";
import Sports from "../Components/Home/Sports";

const Home = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeadLines />
          <Sports />
          <Business />
          <Entertainment />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: { flex: 1 },
  container: {
    paddingTop: 20
  }
});

export default Home;
