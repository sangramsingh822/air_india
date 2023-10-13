import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {widthPercentageToDP} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
const FlightInfo2 = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([
    'italy',
    'spain',
    'barcelona',
    'finland',
  ]);
  const [items, setItems] = useState([
    {label: 'Contractual', value: 'Contractual'},
    {label: 'Casual', value: 'Casual'},
    {label: 'Credit', value: 'Credit'},
    {label: 'Advance', value: 'Advance'},


  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Flight Details</Text>
      <View style={styles.inputRow}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Arrival Date:</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>STA:</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>ATA:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Difference:</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
      <View style={styles.inputRow}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Departure Date:</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>STA:</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>ATA:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Difference:</Text>
          <TextInput style={styles.input} />
        </View>
      </View>

      <View style={styles.inputRow}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Cancellation Date:</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Time:</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Flight Info')}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Flight Status')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: '#71639e',
    width: widthPercentageToDP('9%'),
    height: widthPercentageToDP('3%'),
    borderRadius: widthPercentageToDP('0.5%'),
    marginTop: widthPercentageToDP('2%'),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});

export default FlightInfo2;
