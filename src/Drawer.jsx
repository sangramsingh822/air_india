import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// npm install @react-navigation/drawer
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FlightInfo from './screens/FlightInfo';
import FlightStatus from './screens/FlightStatus';
import ServiceProvided from './screens/ServiceProvided';
import EquipmentProvided from './screens/EquipmentProvided';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './context/AuthContext';
import FlightInfo2 from './screens/FlightInfo2';
import Sign from './screens/Signature';
const Drawer = createDrawerNavigator();

export default function DrawerScreen({ navigation }) {

  const {setUser}=useContext(AuthContext)
  const handleLogout = () => {
    setUser(null);
    AsyncStorage.removeItem('user');
  };
  return (
      <Drawer.Navigator 
   
      initialRouteName='Home'
      screenOptions={({route}) => ({
        drawerIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Flight Info':
              iconName = focused ? 'information-circle' : 'information-circle-outline';
              break;
              case 'Flight Info 2':
                iconName = focused ? 'information-circle' : 'information-circle-outline';
                break;
            case 'Flight Status':
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
              break;
            case 'Service Provided':
              iconName = focused ? 'apps' : 'apps-outline';
              break;
            case 'Equipment Provided':
              iconName = focused ? 'hammer' : 'hammer-outline';
              break;
              case 'Signature':
              iconName = focused ? 'pencil-sharp' : 'pencil-outline';
              break;
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      >
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Flight Info' component={FlightInfo} />
        <Drawer.Screen name='Flight Info 2' component={FlightInfo2} />
        <Drawer.Screen name='Flight Status' component={FlightStatus} />
        {/* <Drawer.Screen name='Service Provided' component={ServiceProvided} /> */}
        {/* <Drawer.Screen name='Equipment Provided' component={EquipmentProvided} /> */}
        <Drawer.Screen name='Signature' component={Sign} />
      
      </Drawer.Navigator>

  );
}

const LogoutButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.drawerItem} onPress={onPress}>
      <Text>Logout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  drawerItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  drawerLabel: {
    marginLeft: -16, // Adjust for proper alignment with custom button
  },
});