import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ContractType() {
  return (
    <View style={styles.container}>
      <View style={styles.mainBox}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SCHEDULE RA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>NON-SCHEDULE RA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainBox:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:'15%'
  },
  button:{
    height:50,
    backgroundColor:'red',
    borderRadius:10
  },
buttonText:{
    fontSize :23,
    fontWeight :"bold",
    color:"#fff",
    padding:10
}
});
