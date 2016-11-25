
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const styles = StyleSheet.create({
    nadaStyle: {
      flex: 1,
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "black",
      backgroundColor: 'paleturquoise'
    },
    xStyle: {
      flex: 1,
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "black",
      backgroundColor: 'palegreen'
    },
    oStyle: {
      flex: 1,
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "black",
      backgroundColor: 'lightcoral'
    },
    casillaStyleText: {
        fontSize: 60
    }
});

let Casilla = React.createClass({
   casillaClick: function () {
     if ((this.props.valor === "-") && this.props.playingGame) {
      this.props.manejadorClick(this.props.indiceFila, this.props.indiceColumna);
     }
   },
   selectColor: function(){
     if(this.props.valor ==="-"){
       return styles.nadaStyle;
     } else if (this.props.valor === "X"){
       return styles.xStyle;
     } else {
       return styles.oStyle;
     }
   },
   render: function () {
     return (
      <TouchableHighlight style={this.selectColor()} onPress={this.casillaClick} disabled={this.props.valor !== "-"}>
          <Text style={styles.casillaStyleText}>{this.props.valor}</Text>
      </TouchableHighlight>)
}});
module.exports = Casilla;
