import React, { Component } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { Card, Button } from "react-native-elements";

export class NewsList extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/sources?language=en&country=in&apiKey=829625f069434caa944d60c7cf0b8c65"
    )
      .then(response => response.json())
      .then(responseJson => {
        const { sources } = responseJson;

        const formattedData = sources.map((post, i) => {
          return {
            id: i,
            title:
              post.description.length > 150
                ? post.description.substr(0, 150).concat(" ...")
                : post.description,
            image: {
              uri: "https://via.placeholder.com/250x250?text=No+Image"
            }
          };
        });
        this.setState({ posts: formattedData });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const posts = this.state.posts.map(post => {
      return (
        <Card image={post.image} key={post.id}>
          <Text style={{ marginBottom: 10 }}>{post.title}</Text>
          <Button
            backgroundColor="#03A9F4"
            buttonStyle={styles.cardButtonStyle}
            title="VIEW"
          />
        </Card>
      );
    });

    return (
      <ScrollView showsVerticalScrollIndicator={false}>{posts}</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  cardButtonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  }
});

export default NewsList;
