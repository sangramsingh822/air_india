import React, {useState, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();
import axios from 'axios';
export const AuthProvider = ({children, navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [splashLoader, setSplashLoader] = useState(false);
  const [flightinfoid,setFlightInfoId]=useState(null)
  const [flightInfo,setFlightInfo]=useState([])
  const BASE_URL = 'http://52.66.12.25:8072/api/'


  
  const fetchLocal = async () => {
    try {
      setSplashLoader(true);
      const response = await AsyncStorage.getItem('user');
      const data = JSON.parse(response)
      if (data) {
        setUser(data); 
        setSplashLoader(false);
      }else{
        setSplashLoader(false);
      }
    } catch (error) {
      setSplashLoader(false);
      console.log('Error fetching data from  AsyncStorage', error);
    }
  };
  useEffect(() => {
    fetchLocal();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        setIsLoading,
        user,
        splashLoader,
        BASE_URL,
        setUser,flightinfoid,setFlightInfoId,setFlightInfo,flightInfo
      }}>
      {children}
    </AuthContext.Provider>
  );
};
