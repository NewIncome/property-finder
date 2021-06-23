'use strict';
/* adds improved error handling and disables some less-than-ideal
JavaScript language features (it makes JS better).
*/
import React, {Component} from 'react';
// import type {Node} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// import { Colors, DebugInstructions, Header, LearnMoreLinks,
//   ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

class App extends Component {

  render() {
    return React.createElement(Text, {style: styles.description}, "Search for houses to buy!");
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});

export default App;
