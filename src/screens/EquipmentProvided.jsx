import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {Table, Row, Rows} from 'react-native-table-component';
import ModalDropdown from 'react-native-modal-dropdown';
import DatePicker from 'react-native-date-picker';
export default function EquipmentProvided() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open1a, setOpen1a] = useState(false);

  const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const tableHead = [
    'Description',
    'Unit No.',
    'QTY.',
    'From',
    'To.',
    'Remark/Changes',
  ];

  //   const tableData = [['checkinTime', 'checkoutTime']];
  const tableData = [
    [
      <Text style={styles.tableDataText}>Wheel Chair</Text>,
      <ModalDropdown
        options={options}
        defaultValue={'I Enter Quantity'}
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <ModalDropdown
        options={options}
        defaultValue={'1 QTY'}
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <>
        <TouchableOpacity
          style={styles.timeFrom}
          onPress={() => setOpen1(true)}>
          <Text style={styles.timetext}>I From</Text>
        </TouchableOpacity>
        <DatePicker
          modal
          mode="time"
          open={open1}
          date={date}
          onConfirm={date => {
            console.log(date);
            setDate(date);
            setOpen1(false);
          }}
          onCancel={() => {
            setOpen1(false);
          }}
        />
      </>,
      <>
        <TouchableOpacity
          style={styles.timeFrom}
          onPress={() => setOpen1a(true)}>
          <Text style={styles.timetext}>I To</Text>
        </TouchableOpacity>
        <DatePicker
          modal
          mode="time"
          open={open1a}
          date={date}
          onConfirm={date => {
            setDate(date);
            setOpen1a(false);
          }}
          onCancel={() => {
            setOpen1a(false);
          }}
        />
      </>,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [<Text style={styles.tableDataText}>UNM</Text>, '', '', '', '', ''],
    [<Text style={styles.tableDataText}>VIP/CIP</Text>, '', '', '', '', ''],
    [<Text style={styles.tableDataText}>Deportee</Text>, '', '', '', '', ''],
    [
      <Text style={styles.tableDataText}>Head Set Servies</Text>,
      '',
      '',
      '',
      '',
      '',
    ],
    [
      <Text style={styles.tableDataText}>Boarding Tag</Text>,
      '',
      '',
      '',
      '',
      '',
    ],
    [
      <Text style={styles.tableDataText}>EBT Collected</Text>,
      '',
      '',
      '',
      '',
      '',
    ],
    [
      <Text style={styles.tableDataText}>
        ARR (Break up)- Cargo palletization
      </Text>,
      '',
      '',
      '',
      '',
      '',
    ],
    [
      <Text style={styles.tableDataText}>
        DEP(Make up)- Cargo Palletization
      </Text>,
      '',
      '',
      '',
      '',
      '',
    ],
    [
      <Text style={styles.tableDataText}>Plastic Sheets</Text>,
      '',
      '',
      '',
      '',
      '',
    ],
    [
      <Text style={styles.tableDataText}>W/H-Cargo handled in KGs:ARR</Text>,
      '',
      '',
      '',
      '',
      '',
    ],
    [
      <Text style={styles.tableDataText}>W/H-Cargo handled in KGs:DEP</Text>,
      '',
      '',
      '',
      '',
      '',
    ],
    [
      <Text style={styles.tableDataText}>
        WH-Valueable Cargo Handled in KGS(ARR/DEP)
      </Text>,
      '',
      '',
      '',
      '',
      '',
    ],
    [
      <Text style={styles.tableDataText}>Cabin Cleaning</Text>,
      '',
      '',
      '',
      '',
      '',
    ],
    [
      <Text style={styles.tableDataText}>
        Man Power(Additional Requirement)
      </Text>,
      '',
      '',
      '',
      '',
      '',
    ],
    [
      <Text style={styles.tableDataText}>Payment INR/USR</Text>,
      '',
      '',
      '',
      '',
      '',
    ],
    [<Text style={styles.tableDataText}>Amount</Text>, '', '', '', '', ''],
    [
      <Text style={styles.tableDataText}>Transaction Details</Text>,
      '',
      '',
      '',
      '',
      '',
    ],
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: 'gray'}}>
          <Row
            data={tableHead}
            style={{alignItems: 'center'}}
            textStyle={styles.tableHead}
          />
          <Rows data={tableData} textStyle={styles.tableData} />
        </Table>
      </View>
      <View style={styles.hr}></View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'gray',
            width: 90,
            padding: 10,
            borderRadius: 10,
          }}>
          <Text style={{color: 'white'}}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            width: 90,
            padding: 10,
            borderRadius: 10,
          }}>
          <Text style={{color: 'white'}}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  tableData: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  tableHead: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 1,
    textAlign: 'center',
  },
  tableDataText: {
    color: 'black',
    paddingLeft: 10,
    fontSize: 16,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    alignSelf: 'center',
    width: '70%',
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownOptions: {
    width: 200,
    borderColor: 'gray',
    backgroundColor: 'white',
    padding: 8,
    height: 150,
    alignItems: 'center',
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: '#d2c5c5',
    marginVertical: 30,
  },
  timeFrom: {
    alignSelf: 'center',
    backgroundColor: '#dadada',
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: 8,
    width: 80,
  },
  timetext: {
    textAlign: 'center',
  },
});
