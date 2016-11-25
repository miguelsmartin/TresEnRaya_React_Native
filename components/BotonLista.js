import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  textoBoton: {
    color: "black"
  },
  boton:{
    justifyContent: 'center',
    marginTop:5,
    alignItems: 'center',
    backgroundColor: 'yellow',
    height: 20
  }
});

//boton normal que ejecuta onButtonClick
var BotonLista = React.createClass({
  render: function () {
    return(
      <TouchableHighlight style={styles.boton} onPress={this.onButtonClick}>
        <Text style={styles.textoBoton}>Historial de acciones</Text>
      </TouchableHighlight>)

  },
  /*funcion que ordena la subida desde app.js hacia index del array
  de movimientos y a su vez ordena el cambio de escena*/
  onButtonClick: function(){
    this.props.upArray();
    this.props.navigator.push({
      id: 'Lista'
    });
  }

});
module.exports = BotonLista;
