import React from 'react';
import { Image, WebView,Linking, SafeAreaView, ImageBackground, View, Text, StatusBar, AppRegistry, ScrollView, StyleSheet, TouchableHighlight, FlatList,Dimensions } from 'react-native';
import glamorous from "glamorous-native";
import { Calendar, Agenda } from 'react-native-calendars';
import { bColor, pColor } from "../style/colors"
import request from 'superagent'
//import Image from 'react-native-transformable-image'
import HTML from 'react-native-render-html';
import PhotoView from 'react-native-photo-view';





export default class AppCalendar extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Clear Sky Chart",
    });

    constructor(props){
        super(props)
        this.state= {
             imgWidth: 0,
             imgHeight: 0
        }
    }

    componentDidMount(){
    Image.getSize('http://www.cleardarksky.com/c/KprnkObNYcsk.gif?c=2714406', (width, height) => {
      // calculate image width and height 
      const screenWidth = Dimensions.get('window').width
      const scaleFactor = width / screenWidth
      const imageHeight = height / scaleFactor
      this.setState({imgWidth: screenWidth, imgHeight: imageHeight})
    })
    }
    





    render() {
           return (
                <Image source={{uri: 'http://www.cleardarksky.com/c/KprnkObNYcsk.gif?c=2714406'}} style={s.backgroundImage} />
            );
        
    }

}

const win = Dimensions.get('window');
const s = StyleSheet.create({
  backgroundImage: {
    flex:1,
    alignSelf: 'center',
    height: 605,
    width: 550,
    justifyContent:'center',
     backgroundColor: '#000000',
     //borderColor: '#F44336',
    //borderWidth: 1,
     borderRadius: 1,
    transform:[{rotate:'90deg'}],
    resizeMode:'contain',
    
  }
});








