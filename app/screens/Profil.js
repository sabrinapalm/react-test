import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { List, ListItem } from 'react-native-elements';

const information = {
  "name": "Sabrina Palm",
  "adress": "Göteborg, Sverige",
  "phone": "0732313000",
  "email": "sabrina_palm@hotmail.com",
}

const contactinfo = {
  "phone": "031-3607660",
  "email": "kontakt@bonsai.se",
}

class Profil extends Component {
  _onPressButton() {}
  render() {
    return (
      <ScrollView>
      <StatusBar barStyle="light-content"/>
        <View style={styles.container}>
        <View style={styles.containerimg}>
        <Image style={styles.img}
          source={require('./meimg.jpg')}
        />
        <Text style={styles.titlestyle}>{information.name}</Text>
        </View>
          <View>
          <Text style={styles.information}>DIN INFO</Text>
          </View>
            <List containerStyle={styles.List}>
            <TouchableOpacity onPress={this._onPressButton}>
              <ListItem hideChevron={true} titleStyle={styles.ListItem} containerStyle={styles.List}
                title= {information.adress}
                subtitle={
                    <View style={styles.subtitleView}>
                      <Text style={styles.info}>Adress</Text>
                    </View>
                  }
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton}>
              <ListItem hideChevron={true} titleStyle={styles.ListItem} containerStyle={styles.List}
                title= {information.phone}
                subtitle={
                    <View style={styles.subtitleView}>
                      <Text style={styles.info}>Telefonnummer</Text>
                    </View>
                  }
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton}>
              <ListItem hideChevron={true} titleStyle={styles.ListItem} containerStyle={styles.List}
                title= {information.email}
                subtitle={
                    <View style={styles.subtitleView}>
                      <Text style={styles.info}>Email</Text>
                    </View>
                  }
              />
              </TouchableOpacity>
            </List>

          <View>
          <Text style={styles.information}>KONTAKTA OSS</Text>
          </View>
          <List containerStyle={styles.List}>
          <TouchableOpacity onPress={this._onPressButton}>
            <ListItem hideChevron={true} titleStyle={styles.ListItem} containerStyle={styles.List}
              title= {contactinfo.phone}
              subtitle={
                  <View style={styles.subtitleView}>
                    <Text style={styles.info}>Ring</Text>
                  </View>
                }
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
            <ListItem hideChevron={true} titleStyle={styles.ListItem} containerStyle={styles.List}
              title= {contactinfo.email}
              subtitle={
                  <View style={styles.subtitleView}>
                    <Text style={styles.info}>Maila</Text>
                  </View>
                }
            />
            </TouchableOpacity>
          </List>
          </View>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFBFB',
    padding: 0,
  },
  containerimg: {
    marginTop: 40,
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  titlestyle: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop: 10,
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#6a6a6a',
  },
  img: {
    borderRadius: 75,
    width: 150,
    height: 150,
    borderWidth: 5,
    borderColor: '#FFF',
  },
  information: {
    fontSize: 14,
    marginLeft: 20,
    marginTop: 15,
    marginBottom: -15,
    color: '#99999a',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  info: {
    color: '#72c8b6',
    fontSize: 14,
  },
  List: {
    borderTopColor: '#EEEEEE',
    borderBottomColor: '#EEEEEE',
    backgroundColor: '#FBFBFB',
  },

  ListItem: {
    color: '#6a6a6a',
    fontSize: 15,
    borderColor: '#EEEEEE',
  }
});

export default Profil;
