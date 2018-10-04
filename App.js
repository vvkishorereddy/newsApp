import React from "react";

import {
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/Ionicons";

import Splash from "./src/Screens/Splash";
import Home from "./src/Screens/Home";
import Search from "./src/Screens/Search";
import Categories from "./src/Screens/Categories";
import About from "./src/Screens/About";

const tabNav = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="md-home" size={24} color={tintColor} />;
        }
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="md-search" size={24} color={tintColor} />;
        }
      }
    },
    Categories: {
      screen: Categories,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="md-list" size={24} color={tintColor} />;
        }
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return (
            <Icon name="md-information-circle" size={24} color={tintColor} />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "red",
      inactiveTintColor: "grey"
    }
  }
);

export default createSwitchNavigator({
  splash: Splash,
  tabNav: tabNav
});
