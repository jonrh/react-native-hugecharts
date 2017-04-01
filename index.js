import React, { Component, PropTypes } from "react";
import { StyleSheet, WebView, Dimensions } from "react-native";
import html from "./page.html";

const DEVICE_HEIGHT = Dimensions.get("window").height;
const DEVICE_WIDTH = Dimensions.get("window").width;

export default class ReactNativeHighcharts extends Component {
  static propTypes = {
    configuration: PropTypes.object.isRequired,
    style: PropTypes.any
  };

  state = {
    visible: true,
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH
  };

  // Used to resize on orientation of display
  _reRenderWebView = e => {
    this.setState({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width
    });
  };

  // Created the javascript that will be injected in the webview
  _createInjectedJavascript = configuration => {
    const stringConfiguration = JSON.stringify(configuration, (key, value) => {
      return typeof value === "function" ? value.toString() : value;
    });

    const parsedConfiguration = JSON.parse(stringConfiguration);
    const injectedJavascript = `
      var chart = Highcharts.chart('container', ${flattenObject(parsedConfiguration)});
      chart.reflow();
      setTimeout(function() {chart.reflow()}, 0);
      setTimeout(function() {chart.reflow()}, 100);
    `;

    return injectedJavascript;
  };

  render() {
    const { configuration, style, ...otherProps } = this.props;

    return (
      <WebView
        onLayout={this._reRenderWebView}
        style={[styles.webView, style]}
        source={html}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scalesPageToFit={false}
        scrollEnabled={false}
        automaticallyAdjustContentInsets={false}
        injectedJavaScript={this._createInjectedJavascript(configuration)}
        {...otherProps}
      />
    );
  }
}

const styles = StyleSheet.create({
  webView: {
    flex: 1,
    backgroundColor: "transparent"
  }
});

let flattenObject = function(obj, str = "{") {
  Object.keys(obj).forEach(function(key) {
    str += `${key}: ${flattenText(obj[key])}, `;
  });
  return `${str.slice(0, str.length - 2)}}`;
};

let flattenText = function(item) {
  let str = "";
  if (item && typeof item === "object" && item.length == undefined) {
    str += flattenObject(item);
  } else if (item && typeof item === "object" && item.length !== undefined) {
    str += "[";
    item.forEach(function(k2) {
      str += `${flattenText(k2)}, `;
    });
    str = str.slice(0, str.length - 2);
    str += "]";
  } else if (typeof item === "string" && item.slice(0, 8) === "function") {
    str += `${item}`;
  } else if (typeof item === "string") {
    str += `\"${item.replace(/"/g, '\\"')}\"`;
  } else {
    str += `${item}`;
  }
  return str;
};
