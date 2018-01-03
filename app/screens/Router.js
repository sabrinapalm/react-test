import React, { Component } from 'react';
import { TabNavigator, StackNavigator, StyleSheet } from 'react-navigation';
import { Icon } from 'react-native-elements';

import LedigaJobb from './LedigaJobb';
import Profil from './Profil';
import MinaJobb from './MinaJobb';
import JobDetails from './JobDetails';


export const JobStack = StackNavigator({
  LedigaJobb: {
    screen: LedigaJobb,
    navigationOptions: {
      title: 'Lediga jobb',
      headerStyle: {
        backgroundColor: '#33425B',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: '#33425B',
        shadowOffset: { height: 0, width: 0 },
      },
      headerTitleStyle: {
        color: '#FFF',
      },
    },
  },
  JobDetails: {
    screen: JobDetails,
    navigationOptions: ({ navigation }) => ({
      title: 'Bonsai',
      tabBarVisible: false,
      headerStyle: {
        backgroundColor: '#33425B',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: '#33425B',
        shadowOffset: { height: 0, width: 0 },
      },
      headerTitleStyle: {
        color: '#FFF',
      },
      headerLeft:
      <Icon name={'close'}
      iconStyle={{marginLeft: 20, fontSize: 20, width: 120, fontWeight: 'normal'}}
      underlayColor={'transparent'}
      color={'white'}
      onPress={ () => { navigation.goBack(null) }}
      />
    })
  }
}, {
  mode: 'modal',
});

export const Root = StackNavigator({
  MinaJobb:{
    screen: MinaJobb,
    navigationOptions:{
      title: 'Mina jobb',
      headerStyle: {
        backgroundColor: '#33425B',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: '#33425B',
        shadowOffset: { height: 0, width: 0 },
      },
      headerTitleStyle: {
        color: '#FFF',
      },
    }
  }
})

export const Root1 = StackNavigator({
  Profil:{
    screen: Profil,
    navigationOptions:{
      title: 'Profil',
      headerStyle: {
        backgroundColor: '#33425B',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: '#33425B',
        shadowOffset: { height: 0, width: 0 },
      },
      headerTitleStyle: {
        color: '#FFF',
      },
      headerRight:
      <Icon name={'settings'}
      iconStyle={{ fontSize: 25, marginRight: 10, fontWeight: 'normal' }}
      underlayColor={'transparent'}
      color={'white'}
      onPress={ () => { alert('Vill du logga ut?') }}
      />
    }
  }
})


export const Tabs = TabNavigator({
  LedigaJobb:{
    screen: JobStack,
    navigationOptions: {
      tabBarLabel: 'Lediga jobb',
      tabBarIcon: ({ tintColor }) => <Icon name="search" size={30} color={tintColor} />,
      }
    },
  MinaJobb:{
    screen: Root,
    navigationOptions: {
      tabBarLabel: 'Mina jobb',
      tabBarIcon: ({ tintColor }) => <Icon name="event-available" size={30} color={tintColor} />,
    }
  },
  Profil:{
    screen: Root1,
    navigationOptions: {
      tabBarLabel: 'Profil',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={30} color={tintColor} />,
    }
  },
}, {
  animationEnabled: true,
  tabBarOptions: {
  activeTintColor: '#33425B',
  inactiveTintColor: '#DDDDDD',
  style: {
    backgroundColor: '#FFF',
    paddingBottom: 5,
    height: 55,
  },
  },
});
