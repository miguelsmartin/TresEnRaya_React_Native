
import React, { Component } from 'react';
import { Text } from 'react-native';

var Contador = React.createClass({
 render: function () {
   return (<Text>Número de movimientos: {this.props.texto}</Text>)
 }
});
module.exports = Contador;
