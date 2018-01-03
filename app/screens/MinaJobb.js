import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, StatusBar } from 'react-native';

class BackgroundImage extends Component {

    render() {
        return (
            <Image source={require('./bonsai.png')}
                  style={styles.backgroundImage}>
            </Image>
        )
    }
}

class MinaJobb extends Component {

  render() {
    return (
        <ScrollView>
        <StatusBar barStyle="light-content"/>
          <View style={styles.container}>
          <View>
            <Text style={styles.title}>Aktiva</Text>
            <Text style={styles.title}>Avslutade</Text>
          </View>
          <View style={styles.resultContainer}>
            <Text style={styles.result}>Inget resultat</Text>
          </View>
          </View>
          <BackgroundImage/>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#6a6a6a',
  },
  resultContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  result: {
    marginTop: 140,
    color: '#6a6a6a',
  },
  backgroundImage: {
    position: 'absolute',
    marginTop: 350,
    marginLeft: 113,
    width: 150,
    height:150,
    resizeMode: 'center',
    opacity: 0.1,
  },
});


export default MinaJobb;
