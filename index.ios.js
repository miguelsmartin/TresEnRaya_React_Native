
import React, { Component } from 'react';
 import { AppRegistry, Navigator } from 'react-native';
 import App from './components/App';
 import Indexwindow from './components/Indexwindow'
 import Lista from './components/Lista'

 var TresEnRaya = React.createClass({
   getInitialState: function () {
     return {
       listaMov: []
     };
    },

   render: function(){
     return(
       <Navigator initialRoute = {{ id: 'Indexwindow'}} renderScene={this.navigatorRenderScene}/>
     );
   },
   //carga en el prop listaMov de index la lista de movimientos que proviene de App.js
   upArray: function(listaMov){
     this.state.listaMov = listaMov;
   },
   navigatorRenderScene: function(route, navigator){
     //_navigator = navigator;
     switch(route.id){
       case 'Indexwindow':
         return(<Indexwindow navigator={navigator} tittle="Indexwindow" />);
       case 'App':
       //declara la funcion upArray en App.js
         return(<App navigator={navigator} upArray={this.upArray} tittle="App" />);
       case 'Lista':
       //pasamos la listaMov para ser repesentada en escena correspondiente
         return(<Lista navigator={navigator} listaMov={this.state.listaMov} tittle="Lista" />);
     }
   }
 });

 AppRegistry.registerComponent('TresEnRaya', () => TresEnRaya);
