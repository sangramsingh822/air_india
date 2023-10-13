import { View,StyleSheet} from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';


const Search =() => {
  return (
    <View style={styles.container}>
        <LottieView source={require('../../assets/search.json')} autoPlay loop />
    </View>
  )
};

const LoginLoader =() => {
  return (
    <View style={styles.container}>
        <LottieView source={require('../../assets/Loader.json')} autoPlay loop />
    </View>
  )
};

  export {Search,LoginLoader}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
    },
    activityIndicator: {
      alignItems: 'center',
      height: 80,
    },
  });