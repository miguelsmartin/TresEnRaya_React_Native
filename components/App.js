
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const Cabecera = require('./Cabecera.js');
const Tablero = require('./Tablero.js');
const Boton = require('./Boton.js');
const ContadorMov = require('./ContadorMov.js');

const JUGADORX = "jugador 1 - las X";
const JUGADOR0 = "jugador 2 - los 0";
const VALORES = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];

var App = React.createClass({

 getInitialState: function () {
   return {
     turno: JUGADORX,
     valores: VALORES,
     playingGame: true,
     numberMov: 0
   };
  },

 appClick: function (numeroFila, numeroColumna) {
   let valores = this.state.valores;
   let nuevoValor = this.state.turno === JUGADORX ? 'X' : '0';
   valores[numeroFila][numeroColumna] = nuevoValor;
   this.setState({
     turno: this.state.turno === JUGADORX ? JUGADOR0 : JUGADORX,
     valores: this.state.valores,
     numberMov: this.state.numberMov +1
   });
   var gameWinner = this.didFinish(this.state.turno, valores);
   if(gameWinner){
      alert("Ganó el: "+gameWinner);
      this.setState({
        playingGame: false
      });
   } else if (this.state.numberMov >= 8) {
     alert("Empate");
     this.setState({
       playingGame: false
     });
   }
 },

render: function () {
 var texto = "Turno del " + this.state.turno;
 return (
  <View style={{flex: 1, margin: 10}}>
     <Cabecera texto={texto} turno={this.state.turno} estado={this.state.playingGame}/>
     <ContadorMov texto={this.state.numberMov}/>
     <Tablero valores={this.state.valores} manejadorTableroClick={this.appClick} playingGame ={this.state.playingGame}/>
     <Boton nuevaPartidaClick={this.nuevaPartidaClick}/>
  </View>
)
},

//Función que comprueba si ganó algún usuario y lo devuelve
 didFinish: function(turno, valores){
  var winner = null;
  for(var f =0; f < valores.length; f++){
     if((valores[f][0] == valores[f][1]) && (valores[f][0] == valores[f][2])){
       if(valores[f][0] != '-'){
       winner = turno;}
     }
   }
  for(var c=0; c < valores[0].length; c++){
    if((valores[0][c] == valores[1][c]) && (valores[0][c] == valores[2][c])){
      if(valores[0][c] != '-'){
      winner = turno;}
    }
  }
  if((valores[0][0] == valores[1][1]) && (valores[1][1] == valores[2][2])){
    if(valores[1][1] != '-'){
    winner = turno;}
  }
  if((valores[2][0] == valores[1][1]) && (valores[1][1] == valores[0][2])){
    if(valores[1][1] != '-'){
    winner = turno;}
  }
  return winner;
 },

//Funcion que reinicia el estado al inicial
 nuevaPartidaClick: function(){
   this.setState({
     turno: JUGADORX,
     valores: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
     playingGame: true,
     numberMov: 0
   });
 }
});
module.exports = App;
