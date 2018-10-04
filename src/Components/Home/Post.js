import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const Post = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
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
    height: 140,
    width: 140,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: "#ccc"
  },
  imageView: {
    flex: 2
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  text: {
    flex: 1,
    padding: 10
  }
});

export default Post;
