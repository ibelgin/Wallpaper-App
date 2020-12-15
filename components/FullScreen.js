import React from "react"
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native"

const Dev_Height = Dimensions.get('screen').height
const Dev_Width = Dimensions.get('screen').width

import { createClient } from 'pexels';
const client = createClient('563492ad6f917000010000010f702841514f4d11b90c1c5cedbd07a5');

export default class FullScreen extends React.Component{

    FindImages=(query)=>{
      client.photos.search({ query , per_page: 20 }).then(photos => {
        this.setState({ carouselItems : photos })
        this.setState({ carouselItems : this.state.carouselItems['photos'] })
      });
    }

    Find_New=()=>{
      
    }

    constructor(props){
        super(props);
        this.state = {
          carouselItems:[ ],
          query:this.props.route.params.query
      }
      this.FindImages(this.state.query)
    }
  render(){
    return(
      <SafeAreaView style={styles.container}>
      <View style={styles.FlatList_Container}>
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          data={this.state.carouselItems}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={{height:Dev_Height-(0.7*Dev_Height),width:"48%",borderRadius:15,justifyContent:"center",alignItems:"center"}} >
                <Image  source={{uri:item['src']['medium']}} style={{height:"95%",width:"95%",borderRadius:15}} />
              </TouchableOpacity>
            );
          }}
          ItemSeparatorComponent={()=>{
            return(
              <View style={{height:10}} />
            )
          }}
      />
      </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:Dev_Height,
    width:Dev_Width,
    justifyContent:"center",
    alignItems:"center"
  },
  FlatList_Container:{
    height:"100%",
    width:"95%"
  }
})
