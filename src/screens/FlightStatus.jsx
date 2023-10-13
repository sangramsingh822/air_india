import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  CheckBox,
} from 'react-native';
import axios from 'axios';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import ModalDropdown from 'react-native-modal-dropdown';
import {AuthContext} from '../context/AuthContext';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
const FlightStatus = ({navigation}) => {
  const [selected, setSelected] = React.useState('');
  const [statusOption, setStatuOption] = useState([]);
  const [flttype, setFlttype] = useState([]);
  const [handletype, setHandleType] = useState([]);

  const initialData = [
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];

  const [loader, setLoader] = useState(false);
  const {BASE_URL} = useContext(AuthContext);
  const fetchLocal = async () => {
    try {
      setLoader(true);
      const response = await axios.post(`${BASE_URL}get_all_masters_datas`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = response.data.result;
      if (data.status.success) {
        // console.log(data.result.flight_types, 'ra list');
        setStatuOption(data.result.status_of_handlings);
        setFlttype(data.result.flight_types);
        setHandleType(data.result.main_flight_types)
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  const handleSelect = (selectedItems) => {
    const selectedIntegers = selectedItems.map((str) => parseInt(str)); // Convert selected strings to integers
    setSelected(selectedIntegers); // Call the setSelected function with integer values
  };

  const typeObject = handletype.reduce((acc, item) => {
    acc[item.id] = item.name;
    return acc;
  }, {});

  const handleType = Object.entries(typeObject).reduce(
    (acc, [key, value]) => {
      acc.push({key: key, value: value});
      return acc;
    },
    [],
  );
  useEffect(() => {
    fetchLocal();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Flight Details</Text>
      <View style={styles.inputRow}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Status of Handling:</Text>
          <ModalDropdown
            options={statusOption.map(option => option.name)}
            defaultValue="select"
            style={styles.dropdown}
            textStyle={styles.dropdownText}
            dropdownStyle={styles.dropdownOptions}
            onSelect={idx => console.log(statusOption[idx].id)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Flight Type:</Text>
          <ModalDropdown
            options={flttype.map(option => option.name)}
            defaultValue="select"
            style={styles.dropdown}
            textStyle={styles.dropdownText}
            dropdownStyle={styles.dropdownOptions}
            onSelect={idx => console.log(statusOption[idx].id)}
          />
        </View>
      
      </View>

      <View style={{flexDirection: 'row'}}>
      <View style={styles.inputContainer}>
          <Text style={styles.label}>Handling Type:</Text>
          <MultipleSelectList
            setSelected={val => setSelected(val)}
            data={handleType}
            save="key"
            onSelect={() => console.log(selected)}
            label="Handling Type"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Flight Info 2')}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signature')}>
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
  dropdown: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    fontSize: widthPercentageToDP('1.8%'),
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    alignSelf: 'center',
    width: '100%',
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownOptions: {
    width: widthPercentageToDP('19.5%'),
    borderColor: 'gray',
    backgroundColor: 'white',
    padding: 8,
    height: 150,
    alignItems: 'center',
  },
});

export default FlightStatus;
