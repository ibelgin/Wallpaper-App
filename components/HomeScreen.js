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
  Animated
} from "react-native"



const Dev_Height = Dimensions.get('screen').height
const Dev_Width = Dimensions.get('screen').width
const Item_Width = Dev_Width-(0.6*Dev_Width)

import Icon from "react-native-vector-icons/AntDesign"
import Carousel from 'react-native-snap-carousel';

import { createClient } from 'pexels';
const client = createClient('****');

export default class HomeScreen extends React.Component{

    slide = () => {
    Animated.spring(this.state.x, {
      toValue: 0,
      useNativeDriver:"true",
      speed:0.2
    }).start();
    this.setState({
      visible: true,
    });
  };

    constructor(props){
        super(props);
        this.state = {
          activeIndex:1,
          carouselItems:[],
          selectedIndex:1,
          searchQuery:"",
          visible: false,
          x: new Animated.Value(-100),
          categories:[            
            {
              "title":"Food",
              "img_url":"https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Music",
              "img_url":"https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Cars",
              "img_url":"https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Animals",
              "img_url":"https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            },

            {
              "title":"Art",
              "img_url":"https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Games",
              "img_url":"https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },

            {
              "title":"Nature",
              "img_url":"https://images.pexels.com/photos/2724664/pexels-photo-2724664.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Jungle",
              "img_url":"https://images.pexels.com/photos/1583207/pexels-photo-1583207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Sports",
              "img_url":"https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Space",
              "img_url":"https://images.pexels.com/photos/5439/earth-space.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Technology",
              "img_url":"https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Places",
              "img_url":"https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              "title":"Abstract",
              "img_url":"https://images.pexels.com/photos/2110951/pexels-photo-2110951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            },
          ]
        }
    }

    FindImages=()=>{
      const query = "Landscapes"
      client.photos.search({ query , per_page: 10 }).then(photos => {
        this.setState({ carouselItems : photos })
        this.setState({ carouselItems : this.state.carouselItems['photos'] })
      })
    }

    componentDidMount(){
     this.slide()
     this.FindImages()
    }

    _renderItemCatogories=({item,index})=>{
      return(
          <TouchableOpacity style={{ 
            height:"90%",
            width:Dev_Width-(0.6*Dev_Width),
            backgroundColor:"transparent",borderRadius:15,justifyContent:"center",alignItems:"center"}} 
            onPress={()=>this.props.navigation.navigate("FullCatogery",{ "query" : item.title })}
              >
              <ImageBackground 
                source={{uri:item.img_url}} 
                style={{height:"100%",width:"100%",borderRadius:15,justifyContent:"flex-end"}} 
                imageStyle={{borderRadius:15}}
              >
              <Text style={{marginBottom:"10%",marginLeft:"10%",color:"#FFF",fontWeight:"bold",fontSize:18}}>{item.title}</Text>
            </ImageBackground>
          </TouchableOpacity>
      )
    }

  renderSeparator = () => (
    <View
      style={{
        width: 20,
      }}
    />
  );  

    _renderItem=({item,index})=>(
          <TouchableOpacity style={{ height:"100%",width:"100%",borderRadius:15,justifyContent:"center",alignItems:"center"}} 
            onPress={()=>this.props.navigation.navigate("ImageDisplay",{
              "id":item["id"]
            })}>
            <Image source={{uri:item['src']['medium']}} style={{height:"100%",width:"100%",borderRadius:15}}/>
          </TouchableOpacity>
    )


  render(){
    return(
      <View style={styles.container}>
	<StatusBar translucent backgroundColor="transparent" />
      <View style={{height:"100%",width:"100%"}}>
          <ImageBackground
            source={{uri:"https://cdn.dribbble.com/users/1325237/screenshots/12008929/media/fd36b900a9e355bfee1e8585f6052ed8.png"}} 
            style={styles.MainBackground_View}
            imageStyle={{height:"100%",width:"100%",borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
            <View style={{height:"100%",width:"100%",alignItems:"center",paddingTop:StatusBar.currentHeight}}>
              <Animated.View style={{height:"45%",width:"100%",justifyContent:"center",alignItems:"center",marginTop:"5%",
              transform: [{translateX:this.state.x}]              
              }}>
                <Text style={{fontSize:18,fontWeight:"bold",color:"#FFF"}}> Check Out All The High   </Text>
                <Text style={{fontSize:18,fontWeight:"bold",color:"#FFF"}}> Quality Wallpaper's  </Text>
              </Animated.View>
              <Animated.View style={{...styles.SearchBox_Main_Style,transform: [{translateX:this.state.x}]}}>
              <TextInput 
                style={{height:"80%",width:"75%",marginLeft:"5%",color:"#FFF"}} 
                placeholder="Search For Free Wallpaper" 
                placeholderTextColor="gray" 
                value={this.state.searchQuery}
                onChangeText={(value)=>this.setState({ searchQuery : value })}
              />
                <TouchableOpacity style={{height:"80%",width:"15%",justifyContent:"center",alignItems:"center"}} 
                  onPress={()=>this.props.navigation.navigate("FullCatogery",{ "query" : this.state.searchQuery })}>
                  <Icon name="search1" color="#FFF" size={15}/>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </ImageBackground>

      <View style={{height:"10%",justifyContent:"center",width:"100%"}}>
        <Text style={{fontSize:18,color:"#FFF",fontWeight:"bold",marginLeft:"5%"}}>Top Pick's For You !</Text>
      </View>

      <View style={{height:"20%"}}>
        <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              data={this.state.carouselItems}
              sliderWidth={Dev_Width}
              itemWidth={Item_Width}
              renderItem={this._renderItem}
              bounces={true} 
              keyExtractor={(item, index) => item.key}
              activeSlideAlignment={"center"}
              autoplay={true}
              loop={true}
          />
          </View>


          <View style={{height:"10%",justifyContent:"center",width:"100%"}}>
            <Text style={{fontSize:18,color:"#FFF",fontWeight:"bold",marginLeft:"5%"}}>Categories</Text>
          </View>

          <View style={{height:"25%",width:"100%",justifyContent:"center",alignItems:"center"}}>
	        <FlatList
                style={{
                height:"100%",width:"93%"}}
                data={this.state.categories}
                keyExtractor={({ _id }, index) => _id}
                renderItem={this._renderItemCatogories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={this.renderSeparator}
                alwaysBounceHorizontal={true}
                bounces={true}
              />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:Dev_Height,
    width:Dev_Width,
    backgroundColor:"#222222",
  },
  MainBackground_View:{
    height:"30%",
    width:"100%",
    justifyContent:"center",
  },
  SearchBox_Main_Style: {
    marginTop: "5%",
    height: "20%", 
    width: "80%", 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#222222", 
    borderRadius: 10, 
    flexDirection: "row"
  }
})
