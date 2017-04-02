// This file can be simplified, see here for how:
// https://github.com/oblador/react-native-keychain/blob/master/KeychainExample/index.ios.js

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import ExampleApp from "./exampleApp";

export default class RNHighchartsDemo extends Component {
  render() {
    return (
      <View>
        <ExampleApp />
      </View>
    );
  }
}

AppRegistry.registerComponent('ExampleApp', () => ExampleApp);
