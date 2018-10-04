import React, { Component } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import Post from "./Post";

class HeadLines extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=829625f069434caa944d60c7cf0b8c65"
    )
      .then(response => response.json())
      .then(responseJson => {
        const { articles } = responseJson;
        console.log(articles);
        const formattedData = articles.map((post, i) => {
          return {
            id: i,
            title:
              post.title.length > 30
                ? post.title.substr(0, 30).concat(" ...")
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
      return <Post imageUrl={post.image} title={post.title} key={post.id} />;
    });

    return (
      <View>
        <Text style={styles.heading}>Latest Head Lines</Text>
        <View style={styles.scroll}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {posts}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    paddingHorizontal: 20,
    fontWeight: "700"
  },
  scroll: { height: 130, marginTop: 20, marginBottom: 20 }
});

export default HeadLines;
