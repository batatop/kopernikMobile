import React from 'react';
import { SafeAreaView,Dimension,Button,Alert, View, Text, StatusBar, Image, AppRegistry, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import ZoomImage from 'react-native-zoom-image';
import {Easing} from 'react-native'; // import Easing if you want to customize easing function
import { generalPaddingSize, galleryImgHeight, galleryFocusedImgHeight } from "../style/sizes"

import glamorous from "glamorous-native";
import { bColor, pDarkColor, hColor, hBarColor } from "../style/colors"

export default class Gallery extends React.Component {
    static navigationOptions = ({ screenProps, navigation }) => ({
        title: "Gallery",
        headerLeft: (
            <TouchableHighlight
                style={{ padding: generalPaddingSize }}
                onPress={() => screenProps.rootNavigation.navigate("DrawerToggle")}
                underlayColor={hBarColor}
            >
                <Image source={require("../style/assets/menuIcon.png")} />
            </TouchableHighlight>
        ),
        headerRight: (
            <TouchableHighlight
                style={{ padding: generalPaddingSize }}
                onPress={() => screenProps.galleryNavigation.navigate("DrawerToggle")}
                underlayColor={hBarColor}
            >
                <Image source={require("../style/assets/groupsIcon.png")} />
            </TouchableHighlight>
        )
    });

    componentWillMount() {
        let groupName = this.props.screenProps.defaultGroup
        if (this.props.screenProps.galleryNavigation.state.params != undefined) {
            groupName = this.props.screenProps.galleryNavigation.state.params.currentGroup
        }
        this.setState({
            name: groupName,
            images: []
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.screenProps.galleryNavigation.state.params != undefined) {
            let name = nextProps.screenProps.galleryNavigation.state.params.currentGroup
            var url = "http://kopernik.org/wp-content/gallery/"
            url = url + name + "/"

            fetch(url).then((resp) => { return resp.text() })
                .then((text) => {//getLinks()
                    var href = text.match(/href="(.*?)"/g)
                    var new_url = []
                    for (let i = 0; i < href.length; i++) {
                        if (href[i].includes("jpg")) {
                            new_url.push(url + href[i].substring(6, href[i].length - 1))
                        }
                    }
                    if(this.refs.gallery) {                    
                        this.setState({
                            name: name,
                            images: new_url
                        })
                    }
                });
        }
    }

     componentDidMount() {
        // var name =this.props.navigation.state.params.cata
        let name = this.state.name
        var url = "http://kopernik.org/wp-content/gallery/"
        url=url+name+"/"        
        
        fetch(url).then((resp) => { return resp.text() })
        .then((text) => {//getLinks()
            var href = text.match(/href="(.*?)"/g)
            var new_url = []
            for (let i = 0; i < href.length; i++) {
                if (href[i].includes("jpg")){
                    new_url.push(url + href[i].substring(6, href[i].length - 1))
                }
            }
            if(this.refs.gallery) {
                this.setState({
                    name:name,
                    images:new_url
                })
            }
        });   
    }

    listImages() {
        let self = this
        let images = []
        let tmpImages = []
        let imageTotal=0
        if(this.state.images.length>30){
            imageTotal=30
        }
        else
            imageTotal=this.state.images.length 
        for(let i = 1; i<=imageTotal; i++) {
            if (i%3 == 0) {
                tmpImages.push(this.state.images[i-1])
                images.push(tmpImages)
                tmpImages = []
            }
            else {
                tmpImages.push(this.state.images[i-1])
            }
            if(i==imageTotal){
                if(i%3!=0){
                    images.push(tmpImages)
                }
            }
        }
        let listView = images.map(function (imgSubset, i) {
            return(
                <Row key={"row_"+i}>
                    {self.rowImages(imgSubset, i)}
                </Row>
            )
        });
        return listView;
    }

    rowImages(images, rowIndex) {
        let self = this
        let rowImages = images.map(function (imgUrl, i) {

            return (
                <ZoomImage
                        key={"zoom_"+"."+i}
                        style={{
                            flex: 1,
                            height: galleryFocusedImgHeight,
                            margin:1
                        }}
                        source={{uri: imgUrl}}
                        imgStyle={{flex: 1, height: galleryFocusedImgHeight}}
                        duration={200}
                        enableScaling={true}
                        easingFunc={Easing.ease}

                    />
            )
        });

        return rowImages
    }

    render() {
        return (
            <Container ref='gallery'>
                <StatusBar
                    backgroundColor={pDarkColor}
                    barStyle="light-content"
                />
                <Column>
                    {this.listImages()}
                </Column>
            </Container>
        );
    }
}

const Container = glamorous.scrollView({
    flex: 1,
})

const Row = glamorous.view({
    flex: 1,
    flexDirection: 'row',
    backgroundColor: bColor,
})

const Column = glamorous.view({
    flex: 1,
    flexDirection: 'column',
    backgroundColor: bColor,
})

const ImageContainer = glamorous.touchableHighlight({
    flex: 1,
    backgroundColor: bColor,
    margin: 1,
})

const ListImage = glamorous.image({
    flex: 1,
    height: galleryImgHeight,
})
