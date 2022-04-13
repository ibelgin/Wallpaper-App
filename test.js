import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Dev_Height = Dimensions.get('window').height;
const Dev_Width = Dimensions.get('window').width;

export default class App extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logomainview}>
          <Image
            source={require('./assets/logo.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textinputmainview}>
          <TextInput
            style={styles.textinput}
            placeholder="Phone Number, Username or Email "
          />
        </View>

        <View style={styles.textinputmainview}>
          <TextInput style={styles.textinput} placeholder="Password" />
        </View>

        <View style={styles.forgotpasswordview}>
          <TouchableOpacity>
            <Text style={styles.forgotpasstext}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonview}>
          <TouchableOpacity style={styles.buttontouch}>
            <Text style={styles.logintext}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dev_Height,
    width: Dev_Width,
    backgroundColor: '#FFF',
  },
  helloworld: {
    fontSize: 40,
    color: 'red',
  },
  image: {
    height: '80%',
    width: '100%',
  },
  logomainview: {
    height: '15%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinputmainview: {
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    height: '80%',
    width: '90%',
    borderWidth: 1,
    borderColor: '#E4E5E5',
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 10,
  },
  forgotpasswordview: {
    height: '10%',
    width: '100%',
    justifyContent: 'center',
  },
  forgotpasstext: {
    fontSize: 15,
    color: '#009AFF',
    justifyContent: 'center',
    marginLeft: '60%',
  },
  buttonview: {
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontouch: {
    height: '80%',
    width: '90%',
    backgroundColor: '#00CEFF',
    borderRadius:10,
    justifyContent:"center",
    alignItems: 'center',
  },
  logintext:{
    fontSize:16,
    color:"#FFF",
    fontWeight:"bold",
  }
});
