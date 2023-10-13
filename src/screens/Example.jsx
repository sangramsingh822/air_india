import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import ModalDropdown from "react-native-modal-dropdown";
import DatePicker from "react-native-date-picker";
export default function TableComponent() {
  const initialTableData = [
    {
      description: "Wheel Chair",
      unit: "1",
      qty: "1",
      from: new Date(),
      to: new Date(),
      remark: ""
    }
    // Add more rows as needed...
  ];
  const [tableData, setTableData] = useState(initialTableData);

  // Function to handle changes in the data
  const handleChange = (index, field, value) => {
    const updatedTableData = tableData.map((row, i) => {
      if (i === index) {
        return { ...row, description: "value" };
      }
      return row;
    });
    setTableData(updatedTableData);
  };

  // Function to handle time picker
  const handleTimePickerToggle = (index, field) => {
    // Implement your logic to toggle the time picker here
    // For example, you can use `Modal` to show/hide the time picker
    // and use `setDate` to update the date for the specific row and field
  };

  // Columns for the table
  const tableHead = [
    "Description",
    "Unit No.",
    "QTY.",
    "From",
    "To.",
    "Remark/Changes"
  ];

  // Function to render each row in the table
  const renderRow = ({ item, index }) => (
    <Row data={Object.values(item)} textStyle={styles.tableData} />
  );

  // Function to get the unique key for each row in the FlatList
  const keyExtractor = (item, index) => index.toString();

  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
        <Table borderStyle={{ borderWidth: 1, borderColor: "gray" }}>
          <Row
            data={tableHead}
            style={{ alignItems: "center" }}
            textStyle={styles.tableHead}
          />
          <Rows data={tableData} textStyle={styles.tableData} />
        </Table>
      </View>
      {/* Here, you can render the FlatList to handle data input */}
      <FlatList
        data={tableData}
        renderItem={({ item, index }) => (
          <View style={styles.rowContainer}>
            {/* Render the static columns */}
            <Text style={styles.tableDataText}>{item.description}</Text>
            <Text style={styles.tableDataText}>{item.unit}</Text>
            <Text style={styles.tableDataText}>{item.qty}</Text>
            {/* Render the "From" time picker */}
            <TouchableOpacity
              style={styles.timeFrom}
              onPress={() => handleTimePickerToggle(index, "from")}
            >
              <Text style={styles.timetext}>From</Text>
            </TouchableOpacity>
            {/* Render the "To" time picker */}
            <TouchableOpacity
              style={styles.timeFrom}
              onPress={() => handleTimePickerToggle(index, "to")}
            >
              <Text style={styles.timetext}>To</Text>
            </TouchableOpacity>
            {/* Render the input field */}
            <TextInput
              style={styles.textInput}
              placeholder="Enter Remark/Changes"
              value={item.remark}
              onChangeText={(value) => handleChange(index, "remark", value)}
            />
          </View>
        )}
        keyExtractor={keyExtractor}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tableData: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center"
  },
  tableHead: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 1,
    textAlign: "center"
  },
  tableDataText: {
    color: "black",
    paddingLeft: 10,
    fontSize: 16
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 4,
    alignSelf: "center",
    width: "70%"
  },
  dropdownText: {
    fontSize: 16
  },
  dropdownOptions: {
    width: 200,
    borderColor: "gray",
    backgroundColor: "white",
    padding: 8,
    height: 150,
    alignItems: "center"
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: "#d2c5c5",
    marginVertical: 30
  },
  timeFrom: {
    alignSelf: "center",
    backgroundColor: "#dadada",
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: 8,
    width: 80
  },
  timetext: {
    textAlign: "center"
  }
});
