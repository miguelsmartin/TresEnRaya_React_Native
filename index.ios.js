
import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import App from './components/App';
import Indexwindow from './components/Indexwindow'

var TresEnRaya = React.createClass({
  render: function(){
    return(
      <Navigator
        initialRoute = {{
          id: 'Indexwindow'
        }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    );
  },
  navigatorRenderScene: function(route, navigator){
    _navigator = navigator;
    switch(route.id){
      case 'Indexwindow':
        return(<Indexwindow navigator={navigator} tittle="Indexwindow" />);
      case 'App':
        return(<App navigator={navigator} tittle="App" />);
    }
  }
});

AppRegistry.registerComponent('TresEnRaya', () => TresEnRaya);
