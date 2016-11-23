import React, { Component } from 'react';
import {TouchableHighlight, Text} from 'react-native';

var Boton = React.createClass({
 manejaClick: function(){
   this.props.nuevaPartidaClick();
 },
 render: function () {
   return (
     <TouchableHighlight onPress={this.manejaClick}>
        <Text>Nueva partida</Text>
     </TouchableHighlight>
   )
 }
});
module.exports = Boton;
