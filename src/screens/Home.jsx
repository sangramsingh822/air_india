import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {FlatList} from 'react-native-gesture-handler';
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';
import {CheckInLoader, LoginLoader} from '../component/Loaders';
import { widthPercentageToDP } from 'react-native-responsive-screen';
export default function Home({navigation}) {
  const [currentPage, setCurrentPage] = useState(1);
  const {user, BASE_URL,setFlightInfoId} = useContext(AuthContext);
  const [loader, setLoader] = useState(false);
  const [raData, setRadata] = useState([]);
  const itemsPerPage = 10;

  const memoizedData = useMemo(() => raData, [raData]);
  const keyExtractor = useCallback(item => item.id.toString(), []);
  const renderItem = useCallback(
    ({item, index}) => (
      <View style={styles.row}>
        <Text style={styles.cell}>{index + 1}</Text>
        <Text style={styles.cell}>{item.sequence}</Text>
        <Text style={styles.cell}>
          {item.flt_no !== '' ? item.flt_no : 'Not available'}
        </Text>
        <Text style={styles.cell}>{item.partner_name}</Text>
        <Text style={styles.cell}>{item.arrival_date}</Text>
        <Text style={styles.cell}>{item.sta}</Text>
        <Text style={styles.cell}>{item.departure_date}</Text>
        <Text style={styles.cell}>{item.std}</Text>
        <TouchableOpacity
          style={styles.cellIcon}
          onPress={() =>
          {
            setFlightInfoId(item.id)
            navigation.navigate('Flight Info')
          } }>
          <Icon name="create" size={35} color="#71639e" />
        </TouchableOpacity>
      </View>
    ),
    [],
  );
  const fetchLocal = async () => {
    try {
      setLoader(true);
      const response = await axios.post(
        `${BASE_URL}get_ra_list`,
        {
          params: {
            uid: user.uid,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = response.data.result;
      if (data.status.success) {
        // console.log(data.result, 'ra list');
        setRadata(data.result);
        setLoader(false);
      }
    } catch (error) {
      console.log('Error fetching data from AsyncStorage', error);
    }
  };

  useEffect(() => {
    fetchLocal();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainBox}>
        <View style={styles.createHeader}>
          <View style={{flexDirection: 'row', gap: 20}}>
            <View style={styles.inputBox}>
              <TextInput style={styles.input} placeholder="Search..." />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  zIndex: 1,
                }}>
                <Icon name="search" size={35} color="lightgray" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', gap: 4}}>
            <Text
              style={[
                styles.text,
                {paddingVertical: 5, paddingHorizontal: 10},
              ]}>
              1-80/172
            </Text>
            <TouchableOpacity style={styles.button}>
              <Icon name="chevron-back-outline" size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon name="chevron-forward-outline" size={35} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            marginTop: 5,
            borderColor: 'lightgray',
          }}></View>
        <View style={styles.table}>
          <View style={styles.rowHeading}>
            <Text style={[styles.cellHeading, {width: 20}]}>S.No</Text>
            <Text style={styles.cellHeading}>NSOP No</Text>
            <Text style={styles.cellHeading}>Flight No</Text>
            <Text style={styles.cellHeading}>Customer Name</Text>
            <Text style={styles.cellHeading}>Arrival Date</Text>
            <Text style={styles.cellHeading}>Arrival Time</Text>
            <Text style={styles.cellHeading}>Departure Date</Text>
            <Text style={styles.cellHeading}>Departure Time</Text>
            <Text style={styles.cellHeading}>Action</Text>
          </View>
          <View style={styles.row}>
            {loader ? (
              <View style={{flex:1,alignItems:'center',marginTop:widthPercentageToDP('10%')}}>
                <ActivityIndicator size="large" />
              </View>
            ) : (
              <>
                <FlatList
                  data={memoizedData}
                  renderItem={renderItem}
                  keyExtractor={keyExtractor}
                />
              </>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  labelhead: {
    fontSize: 18,
    marginBottom: 20,
    color: 'red',
    marginBottom: 10,
    fontFamily: 'poppins',
  },
  mainBox: {
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    padding: 5,
    textAlign: 'center',
  },
  dropdown: {
    backgroundColor: 'lightgray',
    width: 60,
    alignItems: 'center',
    borderRadius: 5,
    height: 35,
  },
  dropdownText: {
    color: 'black',
    paddingHorizontal: 3,
    paddingVertical: 3,
    fontSize: 16,
  },
  inputBox: {
    position: 'relative',
    borderWidth: 0.5,
    borderColor: '#ad6c6c',
    height: 40,
    width: '40%',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    height: 50,
    paddingLeft: 40,
    color: '#6d6d6d',
  },
  button: {
    backgroundColor: 'lightgray',
    // width: '13%',
    borderRadius: 10,
    height: 40,
  },
  createHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginRight: 40,
  },
  dropdownOptions: {
    width: 60,
    borderColor: 'gray',
    backgroundColor: 'white',
    // padding: 8,
    height: 150,
    alignItems: 'center',
  },
  tableBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  tableHeadText: {
    fontWeight: '900',
    color: 'black',
    fontSize: 18,
  },
  tabledata: {
    fontWeight: '600',
    color: 'black',
    fontSize: 14,
  },
  table: {
    flexDirection: 'column',
    // borderWidth: 1,
    borderColor: 'black',
  },
  rowHeading: {
    flexDirection: 'row',
    backgroundColor: '#d7d7d7',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },

  cell: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: 'black',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 8,
  },
  cellHeading: {
    flex: 1,
    borderWidth: 0.5,
    color: '#383838',
    borderColor: '#787878',
    padding: 10,
    fontWeight: '900',
    fontSize: 16,
  },
  cellIcon: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    marginTop: 80,
  },
});
