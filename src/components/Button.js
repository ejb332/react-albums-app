import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// onPress prop comes down from AlbumDetail (the parent)
// children prop comes down from the 'Buy Now' text in the Button
// from AlbumDetail
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    // onPress prop is run as part of the onPress attribute of TouchableOpacity
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
