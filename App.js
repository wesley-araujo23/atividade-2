
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <View style={styles.vermelho}></View>
          <View style={styles.azul}></View>
          <View style={styles.verde}></View>
          <View style={styles.amarelo}></View>
          <View style={styles.laranja}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  vermelho: {
    backgroundColor: 'red',
    width: 200,
    height: 200,
    marginRight: 20,
  },
  azul: {
    backgroundColor: 'blue',
    width: 200,
    height: 200,
    marginRight: 20,
  },
  verde: {
    backgroundColor: 'green',
    width: 200,
    height: 200,
    marginRight: 20,
  },
  amarelo: {
    backgroundColor: 'yellow',
    width: 200,
    height: 200,
    marginRight: 20,
  },
  laranja: {
    backgroundColor: 'orange',
    width: 200,
    height: 200,
    marginRight: 20,
  },
});

export default App;