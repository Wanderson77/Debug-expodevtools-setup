import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const stepInto = () => {
    console.log("Steppd into");
  };

  const stepOver = () => {
    console.log("Stepped over");
  };
    
  const onButtonPress = () => {
    console.log("Called when button pressed");
  }

  useEffect(() => {
    console.log("Pause here and step over");
    stepOver();
    stepInto();
  },[]);

  return (
    <View style={styles.container}>
      <Button onPress={onButtonPress} title="My button" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
