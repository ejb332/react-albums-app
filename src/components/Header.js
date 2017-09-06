import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  // destructure textStyle portion of styles variable
  // allows removal of duplicate references to styles object
  // ie do no have to use styles.viewStyle in the return statement
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// make the component available to other parts of the app
export default Header;
