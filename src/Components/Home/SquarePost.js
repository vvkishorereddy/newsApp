import React from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const SquarePost = props => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={props.imageUrl} style={styles.image} />
      </View>
      <View style={styles.text}>
        <Text>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 30,
    height: width / 2 - 30,
    borderWidth: 0.5,
    borderColor: "#ccc",
    marginBottom: 10
  },
  content: { flex: 1 },
  image: {
    height: null,
    width: null,
    flex: 1,
    resizeMode: "cover"
  },
  text: { flex: 1, padding: 10 }
});

export default SquarePost;
