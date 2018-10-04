import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import SquarePost from "./SquarePost";

class Sports extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=829625f069434caa944d60c7cf0b8c65"
    )
      .then(response => response.json())
      .then(responseJson => {
        const { articles } = responseJson;
        console.log(articles);
        const formattedData = articles.map((post, i) => {
          return {
            id: i,
            title:
              post.title.length > 100
                ? post.title.substr(0, 100).concat(" ...")
                : post.title,
            image: {
              uri:
                post.urlToImage ||
                "https://via.placeholder.com/250x250?text=No+Image"
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
        <SquarePost imageUrl={post.image} title={post.title} key={post.id} />
      );
    });

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Latest Sports news</Text>
        <View style={styles.squareSection}>{posts}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  heading: {
    fontSize: 24,
    paddingHorizontal: 20,
    fontWeight: "700"
  },
  squareSection: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
});

export default Sports;
