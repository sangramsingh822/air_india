import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';

export default function TopNav() {
  const {user} = useContext(AuthContext);
  return (
    <View style={{elevation: 1}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#71639e',
          elevation: 10,
          padding: 3,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Image
            source={require('../Images/uniqdata.png')}
            style={{width: 140, height: 70}}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 25, color: '#fff',alignSelf:'center'}}>
              AI AIRPORT SERVICES LTD
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>
              SERVICE RENDERED FORM CUM REVENUE FORM
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              marginHorizontal: 20,
            }}>
            <Icon name="notifications-outline" size={40} color='white' />
          </TouchableOpacity>
          <Image
            source={require('../Images/user.png')}
            style={{width: 40, height: 40, borderRadius: 40}}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: '#fff',
              marginHorizontal: 10,
            }}>
            {user.username}
          </Text>
        </View>
      </View>
    </View>
  );
}
