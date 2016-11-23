import React, { Component } from 'react';
import {TouchableHighlight, Text, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  viewborde: {
    borderColor: 'black'
  },
  textoBoton: {
    color: "midnightblue"
  },
  boton:{
    justifyContent: 'center',
    marginTop:5,
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    height: 20
  }
});


var Boton = React.createClass({
 manejaClick: function(){
   this.props.nuevaPartidaClick();
 },
 render: function () {
   return (
     <View style={styles.viewborde}>
       <TouchableHighlight style={styles.boton} onPress={this.manejaClick}>
          <Text>Nueva partida</Text>
       </TouchableHighlight>
     </View>
   )
 }
});
module.exports = Boton;
