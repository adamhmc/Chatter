/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

var LandingPage = require("./src/LandingPage");
const SlidePage = require('./src/SlidePage');

class TestProject extends Component{
  render() {
    return (
            <NavigatorIOS
                style={styles.navigationContainer}
                initialRoute={{
                title: "",
                component: LandingPage,
                navigationBarHidden: true,
            }} />
        );
  }
}

const styles = StyleSheet.create({
  navigationContainer: {
        flex: 1
    }
});

AppRegistry.registerComponent('TestProject', () => TestProject);
