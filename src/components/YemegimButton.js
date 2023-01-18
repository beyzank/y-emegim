import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const YemegimButton = props => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  button: {
    backgroundColor: '#967',
    width: '60%',
    height: 50,
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
  },
};
export default YemegimButton;
