import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import axios from 'axios';
import {AuthContext} from './context/AuthContext';
import {Search} from './component/Loaders';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
export default function Login({navigation}) {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('aiasl@12345');
  const {isLoading, setIsLoading,BASE_URL,setUser} = useContext(AuthContext);
  const [inputColor,setInputcolor]=useState(false)
  const loginUser = async () => {
    if (username && password) {
      try {
        setIsLoading(true);
        const response = await axios.post(
          `${BASE_URL}login`,
          {
            params: {
              login: username,
              password: password,
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
          const user = {
            uid: data?.result?.uid ,
            username: data?.result?.name
          }
         const userData = JSON.stringify(user)
          await AsyncStorage.setItem('user',userData);
          setUser([user])
          setIsLoading(false);
          // navigation.navigate('Dashboard');
        } else {
          setInputcolor(true)
          setIsLoading(false);
        }
        // console.log(data, 'data login here');
      } catch (error) {
        setIsLoading(false);
        console.error('Error logging in:', error);
      }
    } else {
      alert('Fill the required field');
    }
  };
  return (
    <>
      {isLoading ? (
        <>
          <Search />
        </>
      ) : (
        <>
        <ScrollView>

       
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
              <View style={styles.centerizedView}>
                <Text style={styles.loginTitleText}>
                  AI AIRPORT SERVICES LTD
                </Text>
                <Text style={styles.loginTitleText2}>
                  SERVICE RENDERED FORM CUM REVENUE FORM
                </Text>
                <Image
                      source={require('./Images/aiasllogo.png')}
                      style={styles.logo}
                    />
                <View style={styles.authBox}>
                  <Text style={styles.loginTitleText}>Login</Text>
                  <View style={styles.inputBox}>
                    <Icon
                      style={styles.iconStyle}
                      name="mail-outline"
                      size={30}
                    />
                    <TextInput
                      style={[styles.input,{borderColor:inputColor ?'red':'black'}]}
                      placeholder="Username"
                      value={username}
                      onChangeText={setUsername}
                    />
                  </View>
                  <View style={styles.inputBox}>
                    <Icon
                      name="lock-closed-outline"
                      size={30}
                      style={styles.iconStyle}
                    />
                    <TextInput
                      placeholder="Password"
                      style={[styles.input,{borderColor:inputColor ?'red':'black'}]}
                      secureTextEntry={true}
                      textContentType="password"
                      value={password}
                      onChangeText={setPassword}
                    />
                  </View>
                  <View style={styles.forgotbox}>
                    <BouncyCheckbox
                      size={20}
                      fillColor="red"
                      text="Remember Me"
                      iconStyle={{borderColor: '#020202'}}
                      innerIconStyle={{borderWidth: 2}}
                      textStyle={{
                        fontFamily: 'JosefinSans-Regular',
                        textDecorationLine: 'none',
                        fontWeight: 'bold',
                      }}
                      onPress={e => {
                        console.log(e);
                      }}
                    />
                    <TouchableOpacity>
                      <Text style={styles.forgotPasswordText}>
                        Forgot Password?
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.loginButton}>
                    <Text
                      style={styles.loginButtonText}
                      onPress={() => loginUser()}>
                      Submit
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.bottomLogo}>
                  <View style={{alignItems: 'center'}}>
                    <Image
                      source={require('./Images/uniqdata.png')}
                      style={{width: 150, height: 70}}
                    />
                    <Text style={styles.logotext}>
                      www.uniqdatasolution.com / erpsupport@uniqdatasolution.com
                      / +079 xxxxxxxxx{' '}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          </ScrollView>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  centerizedView: {
    width: '100%',
    top: '2%',
  },
  authBox: {
    width: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  loginTitleText: {
    fontSize: widthPercentageToDP('3%'),
    fontWeight: '900',
    marginTop: widthPercentageToDP('0.1%'),
    alignSelf: 'center',
    color: '#FD0100',
  },
  loginTitleText2: {
    fontSize: widthPercentageToDP('1.5%'),
    fontWeight: '900',
    alignSelf: 'center',
    color: '#00327E',
    marginBottom: widthPercentageToDP('0.5%'),
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 2,
    paddingHorizontal: 10,
    paddingLeft: 40,
    borderWidth: 0.3,
    borderColor: '#414040',
  },
  loginButton: {
    backgroundColor: '#FD0100',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 8,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  forgotPasswordText: {
    marginTop: 12,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  forgotbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  iconStyle: {
    position: 'absolute',
    left: 2,
    top: 5,
    zIndex: 1,
  },
  bottomIcon: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 300,
    marginTop: 40,
  },
  iconText: {
    fontWeight: 'bold',
  },
  Icon: {
    backgroundColor: 'white',
    borderWidth: 1,
  },
  bottomLogo: {
    flexDirection: 'row',
    justifyContent:'center',
    marginHorizontal: '5%',
    marginTop: '4%',
  },
  logotext: {
    color: 'black',
    marginTop: 5,
  },
  logo:{
    width: widthPercentageToDP('22%'),
     height: widthPercentageToDP('10%'),
     alignSelf:'center',
     marginBottom:widthPercentageToDP('1%')}
});
