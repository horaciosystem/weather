'use strict';

import React,{
  Component,
  AppRegistry,
  View,
  StyleSheet,
  Text,
} from 'react-native'

import MapView from 'react-native-maps';

class Weather extends Component {
  render() {
    return (
      <MapView
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={styles.map}>
      </MapView>
    )
  }
}

var styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

AppRegistry.registerComponent('weather', () => Weather);
