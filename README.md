# ❗️🔥 WIP - DON'T USE THIS YET 🔥❗️

# React Native Hugecharts

This is a [React Native](https://facebook.github.io/react-native/) web view component that displays a [Highcharts](https://www.highcharts.com/) graph. The name *Hugecharts* is a bad synonym pun to avoid naming conflicts with the original repository (see fork info below). Using react-native-hugecharts is free for non-commercial use. For commercial projects you will need to [acquire a Highcharts license](https://shop.highsoft.com/highcharts) from Highsoft.

## Usage
```
$ npm install react-native-hugecharts --save
```

```javascript
import ReactNativeHugecharts from "react-native-hugecharts";

export default class App extends Component {
  render() {
    // A Highcharts configuration/options object. Defines what type of 
    // chart should display, with what data and how it should look and 
    // behave. For details please see:
    // https://www.highcharts.com/docs/getting-started/how-to-set-options
    var conf = {};

    return (
      <View>
        <ReactNativeHugecharts style={{ height: 300 }} configuration={conf} />
      </View>
    );
  }
}
```

## Todo & Roadmap
Short term todo list:

1. Get the library, `index.js`, to work on iOS and Android.
1. Add usage documentation and examples.
1. Create and publish the library to npm

Not sure if or when I get to those but at present they are desirable goals:

1. Refactor library to use TypeScript & provide a TypeScript definition.
1. Options to specify if Highcharts source should be baked into the app or loaded via HTTPS.
1. If possible/feasible, use Prettier or Babel to export a JavaScript object instead of the `flattenObject()` and `flattenText()` functions.
1. Add package to the [Nix package manager](https://nixos.org/nix/).
1. Add support for [Highstocks](https://www.highcharts.com/products/highstock) and [Highmaps](https://www.highcharts.com/products/highmaps).


## Fork Info & Acknowledgements
This repository is a fork of [react-native-highcharts](rn-https://github.com/TradingPal/react-native-highcharts). I've used it successfully in production for a while but have some ideas for changes I don't want to bother the original authors with. In addition to that I see this as a learning opportunity to publish my first library, to gain a deeper understanding from the library author perspective.


I'd like to thank the following for their contributions to the original library:

* Bernardo Orozco Garza, [Infinity0106](https://github.com/Infinity0106)
* Donald P. Morton, [onaldmorton](https://github.com/donaldmorton)
* Matteo Mazzarolo, [mmazzarolo](https://github.com/mmazzarolo)
* Sergei Č., [Noiwex](https://github.com/Noiwex)
* [nkov](https://github.com/nkov)




 
