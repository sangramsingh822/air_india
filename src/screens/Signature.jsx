import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import SignatureScreen from 'react-native-signature-canvas';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const Sign = () => {
  const [signAiasl, setSignaiasl] = useState('');
  const [signOperator, setSignoperator] = useState('');
 

  const signatureRef1 = useRef();
  const signatureRef2 = useRef();

  const handlesave = (signature, signof) => {
    if (signof === 'operator') {
      console.log(signature);
      setSignoperator(signature);
    } else if (signof === 'aiasl') {
      console.log(signature);
      setSignaiasl(signature);
    }
  };

  const sign1clear = () => {
    signatureRef1.current.clearSignature();
  };
  const sign2clear = () => {
    signatureRef2.current.clearSignature();
  };

  const handleConfirmaiasl = () => {
    signatureRef1.current.readSignature();
  };
  const handleConfirmoperator = () => {
    signatureRef2.current.readSignature();
  };

  const imgWidth = widthPercentageToDP('30%');
  const imgHeight = widthPercentageToDP('26%');
  const style = `.m-signature-pad {box-shadow: none; border: none; } 
              .m-signature-pad--body {border: none;}
              .m-signature-pad--footer {display: none; margin: 0px;}
              body,html {
              width: ${imgWidth}px; height: ${imgHeight}px;}`;

  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View style={styles.signatureMainBox}>
          <SignatureScreen
            ref={signatureRef1}
            bgWidth={imgWidth}
            bgHeight={imgHeight}
            webStyle={style}
            onOK={e => handlesave(e, 'aiasl')}
          />
          <Text style={styles.heading}>Aiasl Signature</Text>
          <View style={styles.row}>
            <Button color={'#71639e'}  title="Clear" onPress={sign1clear} />
            <Button color={'#71639e'}  title="Confirm" onPress={handleConfirmaiasl} />
          </View>
        </View>

        <View style={styles.signatureMainBox}>
          <SignatureScreen
            ref={signatureRef2}
            bgWidth={imgWidth}
            bgHeight={imgHeight}
            webStyle={style}
            onOK={e => handlesave(e, 'operator')}
            
          />
          <Text style={styles.heading}>Operator Signature</Text>
          <View style={styles.row}>
           
                <Button color={'#71639e'} title="Clear" onPress={sign2clear} />
                <Button
                  color={'#71639e'}
                  title="Confirm"
                  onPress={handleConfirmoperator}
                />
          
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Flight Status')}>
          <Text style={styles.buttonText}>Submit</Text>
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
  signaturePad: {
    width: '100%',
    height: 100,
  },
  signatureMainBox: {
    width: widthPercentageToDP('30%'),
    height: widthPercentageToDP('37%'),
  },
  heading: {
    fontSize: widthPercentageToDP('1.8%'),
    marginVertical: widthPercentageToDP('1%'),
    color: '#71639e',
    fontWeight: '900',
    textAlign: 'center',
  },
  row: {
     gap:5,
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
    marginHorizontal: 20,
    alignSelf:'center'
  },
});

export default Sign;
