
import React, { Component } from 'react';
import { Text, AsyncStorage, StyleSheet,ListView, View, TouchableHighlight } from 'react-native';

const Cabecera = require('./Cabecera.js');
const Tablero = require('./Tablero.js');
const Boton = require('./Boton.js');
const ContadorMov = require('./ContadorMov.js');
const BotonLista = require('./BotonLista.js');
const Lista = require('./Lista.js');

const JUGADORX = "jugador 1 - las X";
const JUGADOR0 = "jugador 2 - los 0";

var listaActual = [];

const styles = StyleSheet.create({
  viewborde: {
    borderColor: 'black'
  },
  textoBoton: {
    color: "black"
  },
  boton:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 20,
    marginTop:5
  },
  contenedor:{
    //backgroundColor: 'paleturquoise',
    flex: 1, margin: 10
  },
  saveandload:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkkhaki',
    height: 20,
    marginTop:5
  }
});



var App = React.createClass({

 getInitialState: function () {
   const VALORES = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
   var listaMov = []; /*declarada aqui por el mismo motivo que valores,
   no se limpiaba cuando se volvia a pantalla inicial*/

   return {
     turno: JUGADORX,
     valores: VALORES,
     playingGame: true,
     numberMov: 0,
     listaMov: listaMov
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

   /*Borra los datos de la variable listaActual cuando se vuelve
   a la pantalla de inicio sin reiniciar ya que listaMov se limpia en el init.
   Basicamente actualiza la variable listaActual con la prop del estado cada vez que se pincha,
   para evitar asi que la variable contenga algo */
   listaActual=this.state.listaMov;
   /*Comentario anterior era solo para la sentencialistaActual=this.state.listaMov;*/

   this.addMov(numeroFila, numeroColumna);
   this.setState({
     listaMov: listaActual
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

//funcion que lo unico que hace es subir la lista de ordenes hacia index
 upArray: function(){
   this.props.upArray(this.state.listaMov);
 },

//añade una fila al array cada vez que se hace algun click
 addMov: function(numeroFila, numeroColumna){
    listaActual.push(this.state.turno+" coloca en ["+numeroFila+"],["+numeroColumna+"]");
    return listaActual;
 },

 buttonClick: function(){
   this.props.navigator.pop();
 },


render: function () {
 var texto = "Turno del " + this.state.turno;
 return (
  <View style={styles.contenedor}>
     <Cabecera texto={texto} turno={this.state.turno} estado={this.state.playingGame}/>
     <ContadorMov texto={this.state.numberMov}/>
     <Tablero valores={this.state.valores} manejadorTableroClick={this.appClick} playingGame ={this.state.playingGame} estado={this.state}/>
     <Boton nuevaPartidaClick={this.nuevaPartidaClick}/>
     
     <BotonLista navigator={this.props.navigator} upArray={this.upArray}/>

     <View style={styles.viewborde}>
         <TouchableHighlight style={styles.saveandload} onPress={this.saveState}>
           <Text style={styles.textoBoton}>Guardar Partida</Text>
       </TouchableHighlight>
     </View>

     <View style={styles.viewborde}>
         <TouchableHighlight style={styles.saveandload} onPress={this.loadState}>
           <Text style={styles.textoBoton}>Cargar Partida</Text>
       </TouchableHighlight>
     </View>

     <View style={styles.viewborde}>
       <TouchableHighlight style={styles.boton} onPress={this.buttonClick}>
         <Text style={styles.textoBoton}>Volver a Inicio</Text>
     </TouchableHighlight>
    </View>

  </View>
)
},

//guardar y cargar estado unicamente
 saveState: async function(){
   try {
     let stateToSave = JSON.stringify(this.state);
     await AsyncStorage.setItem('@HelloWorld:state',stateToSave);
   } catch (error) {
      }
 },

 loadState: async function(){
   try {
     let stateToLoad = await AsyncStorage.getItem('@HelloWorld:state');
     if (stateToLoad !== null){
       let state = JSON.parse(stateToLoad);
       this.setState(state);
     }
   } catch (error) {
     }
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
     numberMov: 0,
     listaMov: []
   });
 }
});
module.exports = App;
