import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

const Button = ({obj, index, pressHandler}) => {
  const blackTheme = {notPress: '#333333', press: '#3f3f3f'};
  const grayTheme = {notPress: '#a6a6a6', press: '#bababa'};
  const orangeTheme = {notPress: '#f09a25', press: '#ffa228'};
  //
  const [buttonTheme, setbuttonTheme] = useState({});
  //
  const value = obj.val;
  //
  useEffect(() => {
    if (obj.theme === 'black') {
      return setbuttonTheme(blackTheme);
    }
    if (obj.theme === 'gray') {
      return setbuttonTheme(grayTheme);
    }
    if (obj.theme === 'orange') {
      return setbuttonTheme(orangeTheme);
    }
  }, []);
  return (
    <>
      <Pressable
        key={'btn-' + index}
        onPress={() => pressHandler(obj.input)}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? buttonTheme.press : buttonTheme.notPress,
          },
          styles.Button_pressable,
          {
            width: obj.size ? 150 : 70,
          },
        ]}>
        <Text style={styles.Button_text}>{obj.input}</Text>
      </Pressable>
    </>
  );
};
export default Button;
// Styles are down here
const styles = StyleSheet.create({
  Button_pressable: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  Button_text: {
    color: '#fff',
    fontSize: 40,
  },
});
