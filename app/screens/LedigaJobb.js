import React, { Component } from 'react';
import { StyleSheet, ScrollView, StatusBar } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import { jobinfo } from './data';


class LedigaJobb extends Component{

  moreInfoJob = (jobs) => {
    this.props.navigation.navigate('JobDetails', jobs);
  }

  render(){
    return (
      <ScrollView>
      <StatusBar barStyle="light-content"/>
        <List containerStyle={styles.container}>
            {
              jobinfo.map((jobs, i) => (
                <ListItem hideChevron={true} titleStyle={styles.title} subtitleStyle={styles.info} titleNumberOfLines={2} subtitleNumberOfLines={2} containerStyle={styles.row}
                  roundAvatar
                  key={i}
                  title={jobs.jobtitle}
                  subtitle={jobs.jobinfo.jobtype}
                  avatar={{uri:jobs.jobinfo.avatar_url}}
                  rightTitle={jobs.jobinfo.time}
                  rightTitleStyle={{fontSize: 12}}
                  onPress={() => this.moreInfoJob(jobs)}
                />
              ))
            }
          </List>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'column',
    marginTop: 0,
    borderTopWidth: 0,
  },
  row: {
    backgroundColor: '#FFF',
    marginTop: 5,
    marginRight: 8,
    marginLeft: 8,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  title: {
    paddingTop: 0,
    color: '#50595C',
    fontSize: 14,
    fontWeight: '500',
    paddingLeft: 10,
  },
  info: {
    paddingBottom: 5,
    marginTop: 1,
    width: 210,
    color: '#50595C',
    opacity: 0.8,
    fontSize: 13,
    fontWeight: 'normal',
    marginLeft: 10,
    paddingLeft: 10,
  },
})

export default LedigaJobb;
