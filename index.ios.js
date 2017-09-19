// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  // use view tag to wrap all other tags
  // can only return one top-level tag
  // flex 1 expands component to fill entire content area of device
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
// Only the root component uses "AppRegistry"
// first argument must match name of root folder
// second argument must match name of root component w/ implicit return
AppRegistry.registerComponent('albums', () => App);
