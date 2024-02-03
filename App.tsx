import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [randomBackgroundColor, setRandomBackgroundColor] = useState('#ffffff');

  const changeBackgroundColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * hexRange.length)];
    }
    setRandomBackgroundColor(color);
  };
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: randomBackgroundColor}]}>
      <StatusBar />
      <View>
        <TouchableOpacity onPress={changeBackgroundColor}>
          <Text style={styles.pressableText}>Press me</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressableText: {
    textTransform: 'uppercase',
    fontSize: 20,
    backgroundColor: '#6a1b4d',
    color: '#ffffff',
    borderRadius: 8,
    padding: 12,
    fontWeight: '400',
  },
});
