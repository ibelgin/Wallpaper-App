import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  TextInput,
TouchableOpacity
} from 'react-native';

const Dev_Height = Dimensions.get('window').height;
const Dev_Width = Dimensions.get('window').width;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.imagemainview}>
          <Image
            style={styles.image}
            source={require('./assets/snack-icon.png')}
            resizeMode="contain"></Image>
        </View>

        <View style={styles.textinputmainview}>
          <TextInput
            style={styles.textinput}
            placeholder="Phone Number ot Email ID or User Name"
          />
        </View>
        
        <View style={styles.textinputmainview}>
          <TextInput
            style={styles.textinput}
            placeholder="Password"
          />
        </View>

        <View style={styles.forgottextmainview}>
          <TouchableOpacity>
            <Text style={styles.forgettext}>Forgot Password </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonmainview}>
          <TouchableOpacity style={styles.buttontouch}>
            <Text style={styles.loginin}>Login In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dev_Height,
    width: Dev_Width,
    backgroundColor: '#FFF',
  },
  image: {
    height: '40%',
    width: '100%',
  },
  imagemainview: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinputmainview: {
    height: '15%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    height: '60%',
    width: '90%',
    borderWidth: 2,
    borderColor: '#E2E3E3',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  forgottextmainview:{
    height:"10%",
    width:"100%",
    justifyContent:"center"
  },
  forgettext:{
    fontSize:13,
    color:"#0098FF",
    marginLeft:"50%"
  },
  buttonmainview:{
    height:"13%",
    width:"100%",
    justifyContent:'center',
    alignItems:'center'
  },
  buttontouch:{
    height:"80%",
    width:"90%",
    backgroundColor:"#00CEFF",
    borderRadius:5,
    alignItems:"center",
    justifyContent:"center"
  },
  loginin:{
    color:"#FFF",
    fontSize:18
  }
});
