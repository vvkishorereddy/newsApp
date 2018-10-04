import React, { Component } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.loader();
  }

  loader = () => {
    setTimeout(() => {
      this.props.navigation.navigate("tabNav");
    }, 2000);
  };
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#00ff00" size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Splash;
