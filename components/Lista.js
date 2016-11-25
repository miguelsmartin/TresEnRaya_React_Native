import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet,ListView, View, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  textoBoton: {
    color: "white"
  },
  boton:{
    justifyContent: 'center',
    marginTop:30,
    alignItems: 'center',
    backgroundColor: 'blue',
    height: 20
  }
});

var Lista = React.createClass({
    _renderRow: function(rowData){ //estilo y dibujo de cada fila
        return (
          <View>
            <Text style={{fontSize: 20, marginLeft:10}}>{rowData}</Text>
          </View>
        )
      },
    render: function(){
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); //esto no vale pa na
      var dataSource = ds.cloneWithRows(this.props.listaMov); //cargamos el array como yun datasource
      return (
        <View>
          <TouchableHighlight style={styles.boton} onPress={this.onButtonClick}>
            <Text style={styles.textoBoton}>Atras</Text>
          </TouchableHighlight>
          <ListView
            dataSource={dataSource}
            renderRow={this._renderRow}
            enableEmptySections
            />
        </View>
      );
    },

    onButtonClick: function(){
      this.props.navigator.pop()
    }

});

module.exports = Lista;
