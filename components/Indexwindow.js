import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cabecera: {
    padding: 5,
    fontSize: 25,
    marginBottom: 20
  }
});

var Cabecera = React.createClass({
 render: function () {
   if (this.props.estado == false) {
     return(<Text style={styles.cabecera}>"Fin del Juego. Pulse el boton de Nueva Partida."</Text>)
   }
    else {
     return(<Text style={styles.cabecera}>{this.props.texto}</Text>)
   }
}});
module.exports = Cabecera;
