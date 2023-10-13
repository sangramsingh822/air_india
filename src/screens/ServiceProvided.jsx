import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Table, Row, Rows} from 'react-native-table-component';
import ModalDropdown from 'react-native-modal-dropdown';
export default function ServiceProvided() {
  const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const tableHead = ['Description', 'Quantity', 'Remark/Changes'];
  //   const tableData = [['checkinTime', 'checkoutTime']];
  const tableData = [
    [
      <Text style={styles.tableDataText}>Wheel Chair</Text>,
      <ModalDropdown
        options={options}
        defaultValue="Qty"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [
      <Text style={styles.tableDataText}>UNM</Text>,
      <ModalDropdown
        options={options}
        defaultValue="I Enter Quality"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [
      <Text style={styles.tableDataText}>VIP/CIP</Text>,
      <ModalDropdown
        options={options}
        defaultValue="I Enter Quality"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [
      <Text style={styles.tableDataText}>Deportee</Text>,
      <ModalDropdown
        options={options}
        defaultValue="I Enter Quality"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [
      <Text style={styles.tableDataText}>Head Set Servies</Text>,
      <ModalDropdown
        options={options}
        defaultValue="I Enter Quality"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [
      <Text style={styles.tableDataText}>DCS : Self Carrier</Text>,
      <ModalDropdown
        options={options}
        defaultValue="I Enter Quality"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [
      <Text style={styles.tableDataText}>Boarding Tag</Text>,
      <ModalDropdown
        options={options}
        defaultValue="I Enter Quality"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [
      <Text style={styles.tableDataText}>Baggage Tag</Text>,
      <ModalDropdown
        options={options}
        defaultValue="I Enter Quality"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [
      <Text style={styles.tableDataText}>EBT Collected</Text>,
      <ModalDropdown
        options={options}
        defaultValue="I Enter Quality"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [
      <Text style={styles.tableDataText}>
        ARR (Break up)- Cargo palletization
      </Text>,
      <ModalDropdown
        options={options}
        defaultValue="I Enter Quality"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [
      <Text style={styles.tableDataText}>
        DEP(Make up)- Cargo Palletization
      </Text>,
      <ModalDropdown
        options={options}
        defaultValue="I Enter Quality"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [
      <Text style={styles.tableDataText}>Plastic Sheets</Text>,
      <ModalDropdown
        options={options}
        defaultValue="I Enter Quality"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [
      <Text style={styles.tableDataText}>W/H-Cargo handled in KGs:ARR</Text>,
      <ModalDropdown
        options={options}
        defaultValue="I Enter Quality"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [
      <Text style={styles.tableDataText}>W/H-Cargo handled in KGs:DEP</Text>,
      <ModalDropdown
        options={options}
        defaultValue="I Enter Quality"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [
      <Text style={styles.tableDataText}>
        WH-Valueable Cargo Handled in KGS(ARR/DEP)
      </Text>,
      <ModalDropdown
        options={options}
        defaultValue="I Enter Quality"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [
      <Text style={styles.tableDataText}>Cabin Cleaning</Text>,
      <ModalDropdown
        options={options}
        defaultValue="I Enter Quality"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [
      <Text style={styles.tableDataText}>
        Man Power(Additional Requirement)
      </Text>,
      <ModalDropdown
        options={options}
        defaultValue="I Enter Quality"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [
      <Text style={styles.tableDataText}>Payment INR/USR</Text>,
      <ModalDropdown
        options={options}
        defaultValue="I Enter Quality"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [
      <Text style={styles.tableDataText}>Amount</Text>,
      <ModalDropdown
        options={options}
        defaultValue="I Enter Quality"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
    [
      <Text style={styles.tableDataText}>Transaction Details</Text>,
      <ModalDropdown
        options={options}
        defaultValue="I Enter Quality"
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions}
      />,
      <TextInput
        style={styles.textInput}
        placeholder="I Enter Remark/Changes"
      />,
    ],
  ];
  return (
    <ScrollView style={{backgroundColor:'white'}}>
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

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'gray',
            width: 90,
            padding: 10,
            borderRadius: 10,
          }}>
          <Text style={{color: 'white'}}>Next</Text>
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
    width: '80%',
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
    borderColor: '#727272',
    marginVertical: 30,
  },
});
