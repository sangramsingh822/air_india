import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import { AuthContext } from '../context/AuthContext';

const FlightInfo = ({navigation}) => {

const {BASE_URL,flightinfoid,setFlightInfo,flightInfo}=useContext(AuthContext)
const [loader,setLoader]=useState(false)
  const fetchLocal = async () => {
    try {
      setLoader(true);
      const response = await axios.post(
        `${BASE_URL}get_ra_data`,
        {
          "params" : {
              "ra_id" : flightinfoid 
          }
      },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = response.data.result;
      if (data.status.success) {
        setFlightInfo(data.result)
        console.log(data.result, 'flight info data');
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  // console.log(flightInfo.date,'data.....')
  useEffect(() => {
    fetchLocal();
  }, [])
  
  return (

      <View style={styles.container}>
        <View style={styles.inputRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date:</Text>
            <TextInput style={styles.input}
            // value={flightInfo.date}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Serial No:</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Bay No:</Text>
            <TextInput style={styles.input} />
          </View>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Station:</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Flight Sector:</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Quote / Reference No:</Text>
            <TextInput style={styles.input} />
          </View>
        </View>

        <View style={styles.inputRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Flight No:</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Type of Aircraft:</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Aircraft Registration No:</Text>
            <TextInput style={styles.input} />
          </View>
        </View>
        <Text style={styles.heading}>Carrier Details</Text>
        <View style={styles.inputRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Operator/carrier:</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Customer GSTIN:</Text>
            <TextInput style={styles.input} />
          </View>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Aircraft Body:</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Operation:</Text>
            <TextInput style={styles.input} />
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Flight Info 2')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputRow: {
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: widthPercentageToDP('2%'),
    marginBottom: widthPercentageToDP('.2%'),
  },
  label: {
    fontSize: widthPercentageToDP('1.7%'),
    color: 'black',
    marginBottom: widthPercentageToDP('0.5%'),
  },
  input: {
    width: '100%',
    height: widthPercentageToDP('3.5%'),
    paddingHorizontal: widthPercentageToDP('2%'),
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: widthPercentageToDP('0.5%'),
    fontSize: widthPercentageToDP('1.5%'),
  },
  heading: {
    fontSize: widthPercentageToDP('1.8%'),
    marginTop: widthPercentageToDP('1%'),
    color: '#71639e',
    alignSelf: 'flex-start',
    marginHorizontal: widthPercentageToDP('2%'),
    fontWeight: '900',
  },
  buttonText: {
    fontSize: widthPercentageToDP('1.8%'),
    color: '#ffffff',
    textAlign: 'center',
  },
  button: {
    alignSelf: 'flex-end',
    marginRight: widthPercentageToDP('2%'),
    backgroundColor: '#71639e',
    width: widthPercentageToDP('8%'),
    height: widthPercentageToDP('3%'),
    borderRadius: widthPercentageToDP('0.5%'),
    marginTop: widthPercentageToDP('2%'),
  },
});

export default FlightInfo;
