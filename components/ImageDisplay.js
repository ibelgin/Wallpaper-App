import React from "react"
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  ImageBackground,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  NativeModules
} from "react-native"
 // 
import { createClient } from 'pexels';
import RNFetchBlob from 'rn-fetch-blob'

const client = createClient('***');
import Icon from 'react-native-vector-icons/AntDesign';

const Dev_Height = Dimensions.get('screen').height
const Dev_Width = Dimensions.get('screen').width

export default class ImageDisplay extends React.Component{

  constructor(props){
    super(props);
    this.state={
      id: this.props.route.params.id,
      image_uri:"",
      isloading:false,
      Activity_Indicator:true
    }
    this.Findimage()
  }

  Findimage=()=>{
      this.setState({ isloading : true })
      client.photos.show({ id: this.state.id }).then(photo => {
         this.setState({ image_uri : photo["src"]["original"] })
         this.setState({ isloading : false })
      });
  }

downloadImage(){
   var date      = new Date();
   var ext       = this.getExtention(this.state.image_uri);
   ext = "."+ext[0];
   const { config, fs } = RNFetchBlob ; 
   let PictureDir = fs.dirs.PictureDir
   let options = {
   fileCache: true,
    addAndroidDownloads : {
      useDownloadManager : true,
      notification : true,
      path:  PictureDir + "/image_"+Math.floor(date.getTime() 
          + date.getSeconds() / 2)+ext,
     description : 'Image'
      }
   }
    config(options).fetch('GET', this.state.image_uri).then((res) => {
      Alert.alert("Download Success !");
   });
}

getExtention(filename){
    return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : 
undefined;
}

  render(){
    return(
      <View style={styles.container}>
	    <StatusBar translucent backgroundColor="transparent" /> 
      {!this.state.isloading ? ( 
        <ImageBackground 
         source={{uri:this.state.image_uri}} 
         style={{height:"100%",width:"100%"}}
         onLoadStart={()=>this.setState({ Activity_Indicator : true })}
         onLoadEnd={()=>this.setState({ Activity_Indicator : false })}
         >
         <ActivityIndicator 
          color="#FFF" 
          size="large"  
          style={{position:"absolute",top:Dev_Height-(0.5*Dev_Height),right:Dev_Width-(0.55*Dev_Width)}} 
          animating={this.state.Activity_Indicator}/>
          <View style={styles.close_button_style}>
            <TouchableOpacity style={styles.Close_Button_Touchable} onPress={()=>this.props.navigation.goBack()}>
              <Icon name="left" size={18} color="#FFF" />
            </TouchableOpacity>
          </View>

          <View style={{height:"70%",width:"100%",justifyContent:"flex-end",backgroundColor:"transparent",alignItems:"center"}}>
            <TouchableOpacity onPress={()=>this.downloadImage()}
             style={{height:"8%",width:"40%",borderRadius:15,backgroundColor:"rgba(225,225,225,0.9)",justifyContent:"center",alignItems:"center"}}>
              <Text style={{color:"#121212",fontSize:16}}>Download</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      ) : 
      (
        <View style={{height:"100%",width:"100%"}}>
          <View style={styles.close_button_style}>
            <TouchableOpacity style={styles.Close_Button_Touchable} onPress={()=>this.props.navigation.goBack()}>
              <Icon name="left" size={18} color="#2abb9b" />
            </TouchableOpacity>
          </View>
          <View style={{height:"50%",width:"100%",justifyContent:"center",alignItems:"center"}}>
          <ActivityIndicator color="#2abb9b" size="large" />
          </View>
        </View>
      )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:Dev_Height,
    width:Dev_Width,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#222222",
  },
  close_button_style: {
    height: '20%',
    width: '90%',
    justifyContent:"center",
    paddingTop:StatusBar.currentHeight
  },
  Close_Button_Touchable: {
    height: 50,
    width: 50,
    backgroundColor: 'rgba(225,225,225,0.1)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:"10%"
  },
})
