import React, { Component } from "react";
import { Text, View, ScrollView, Dimensions } from "react-native";
import { Tile, Avatar } from "react-native-elements";

const { height, width } = Dimensions.get("window");

export class Categories extends Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 10,
            marginVertical: 20,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              width: width / 2 - 30,
              height: width / 2 - 30,
              backgroundColor: "#ccc",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Avatar
              xlarge
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
              }}
              title="CR"
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Categories;
