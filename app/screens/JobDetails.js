import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import { information } from './data'
import { jobinfo } from './data';

class JobDetails extends Component {

  _onPressButton() {
    return null
  }
  render() {
    const { jobtitle, jobtype, jobinfo, time, avatar_url} = this.props.navigation.state.params;
    const { goBack } = this.props.navigation;

    return(
      <ScrollView>
      <StatusBar barStyle="light-content"/>
        <View style={styles.container}>
          <Text style={styles.title}>{jobtitle}{' | '}{jobinfo.jobtype}</Text>
          <Text style={styles.desc}>{jobinfo.time}{'\n'}</Text>
          <Text style={styles.desc}>{jobinfo.info}</Text>
        </View>
        <View style={styles.footer}>
        <Text style={styles.infotitle}>Information</Text>
        <View style={styles.contactwrap}>
          <View style={styles.infowrap}>
            <Text style={styles.info}>Företag</Text>
            <Text style={styles.info}>Adress</Text>
            <Text style={styles.info}>Kontaktperson</Text>
            <Text style={styles.info}>Kontaktnummer</Text>
            <Text style={styles.info}>Jobbtyp</Text>
          </View>
          <View>
            <Text style={styles.jobinfo}>{jobtitle}</Text>
            <Text style={styles.jobinfo}>{information.adress}</Text>
            <Text style={styles.jobinfo}>{information.contact}</Text>
            <Text style={styles.jobinfo}>{information.contactphone}</Text>
            <Text style={styles.jobinfo}>{jobinfo.time}</Text>
          </View>
        </View>
        <View>
        </View>
          <List containerStyle={styles.listView}>
          <TouchableOpacity onPress={this._onPressButton}>
            <ListItem titleStyle={styles.ListItem} containerStyle={styles.ListContainer} hideChevron={true}
              title= "Lämna intresseanmälan"
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
            <ListItem titleStyle={styles.ListItem} containerStyle={styles.ListContainer} hideChevron={true}
              title= "Visa på kartan"
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
            <ListItem titleStyle={styles.ListItem} containerStyle={styles.ListContainer} hideChevron={true}
              title= "Ring kontaktperson"
            />
            </TouchableOpacity>
          </List>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 25,
    flexDirection: 'column',
    marginBottom: 20,
  },
  title: {
    fontWeight: '500',
    fontSize: 14,
    color: '#6a6a6a'
  },
  desc: {
    fontSize: 12,
    color: '#6a6a6a',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
    backgroundColor: '#FBFBFB',
    marginTop: -20,
  },
  contactwrap: {
    flexDirection: 'row',
    backgroundColor: '#FBFBFB',
    padding: 10,
  },
  infotitle: {
    color: '#6a6a6a',
    fontSize: 16,
    marginLeft: 38,
    marginTop: 20,
  },
  infowrap: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  info: {
    fontSize: 12,
    textAlign: 'right',
    color: '#99999a',
    marginBottom: 5,
  },
  jobinfo: {
    fontSize: 12,
    color: '#6a6a6a',
    marginBottom: 5,
  },
  listView: {
    backgroundColor: '#FBFBFB',
    borderTopWidth: 0,
    padding: 30,
    paddingTop: -20,
    marginBottom: 30,
  },
  ListItem: {
    textAlign: 'center',
    color: '#72c8b6',
    opacity: 0.9,
  },
  ListContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  }

});


export default JobDetails;
