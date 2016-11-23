import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  textoBoton: {
    flex:1,
    fontSize: 40,
    paddingTop: 200,
    paddingRight: 20,
    paddingLeft: 20,
    color: "white"
  },
  boton:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'mediumturquoise',
  }
});

var Indexwindow = React.createClass({
  render: function () {
    return(
      <TouchableHighlight style={styles.boton} onPress={this.onButtonClick}>
        <Text style={styles.textoBoton}>¡Empezar a jugar!</Text>
      </TouchableHighlight>)
  },
  onButtonClick: function(){
    this.props.navigator.push({
      id: 'App'
    });
  }

});
module.exports = Indexwindow;
