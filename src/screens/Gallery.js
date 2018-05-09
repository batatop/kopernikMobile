import React from 'react';
import { SafeAreaView, Dimension, Button, Alert, FlatList, View, Text, StatusBar, Image, AppRegistry, ScrollView, StyleSheet, TouchableHighlight, ActivityIndicator } from 'react-native';
import ZoomImage from 'react-native-zoom-image';
import {Easing} from 'react-native'; // import Easing if you want to customize easing function
import { generalPaddingSize, galleryImgHeight, galleryFocusedImgHeight, galleryIndex, galleryLoadHeight, screenPaddingHorSize, screenPaddingVerSize, black, textSize } from "../style/sizes"

import glamorous from "glamorous-native";
import { bColor, pDarkColor, hColor, hBarColor, white } from "../style/colors"

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
            images: [],
            index: galleryIndex,
            refreshing: false,
            loading: true
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
                            new_url.push({
                                key: "img_" + i,
                                uri: url + href[i].substring(6, href[i].length - 1)
                            })
                        }
                    }
                    if(this.refs.gallery) {
                        this.setState({
                            name: name,
                            images: new_url,
                            index: galleryIndex,
                            refreshing: false,
                            loading: false
                        })
                    }
                })
                .catch((err) => console.log(err));
        }
    }

     componentDidMount() {
        this.makeRequest()
    }

    makeRequest() {
        let name = this.state.name
        var url = "http://kopernik.org/wp-content/gallery/"
        url = url + name + "/"

        fetch(url).then((resp) => { return resp.text() })
            .then((text) => {//getLinks()
                var href = text.match(/href="(.*?)"/g)
                var new_url = []
                for (let i = 0; i < href.length; i++) {
                    if (href[i].includes("jpg")) {
                        new_url.push({
                            key: i,
                            uri: url + href[i].substring(6, href[i].length - 1)
                        })
                    }
                }
                if (this.refs.gallery) {
                    this.setState({
                        name: name,
                        images: new_url,
                        index: galleryIndex,
                        refreshing: false,
                        loading: false
                    })
                }
            })
            .catch((err) => console.log(err));
    }

    loadItems() {
        if (this.refs.gallery) {
            this.setState({
                index: this.state.index + galleryIndex
            })
        }
    }

    LoadMoreButton() {
        if(this.state.index < this.state.images.length) {
            return (
                <LoadMoreButton
                    onPress={this.loadItems.bind(this)}
                    underlayColor={hColor}
                >
                    <LoadMoreText>Load more.</LoadMoreText>
                </LoadMoreButton>
            )
        }
    }

    render() {
        if(this.state.loading) {
            return (
                <Container ref='gallery'>
                    <StatusBar
                        backgroundColor={pDarkColor}
                        barStyle="light-content"
                    />
                    <ActivityIndicatorContainer>
                        <ActivityIndicator size="large" />
                    </ActivityIndicatorContainer>
                </Container>
            )
        }
        else {
            return (
                <Container ref='gallery'>
                    <StatusBar
                        backgroundColor={pDarkColor}
                        barStyle="light-content"
                    />
                    <FlatList
                        ref="galleryList"
                        numColumns={3}
                        data={this.state.images.slice(0, this.state.index)}
                        keyExtractor={(item) => item.key.toString()}
                        extraData={this.state}
                        renderItem={({ item }) => 
                            <ZoomImage
                                style={{
                                    flex: 1,
                                    height: galleryFocusedImgHeight,
                                    margin: 1
                                }}
                                source={{ uri: item.uri }}
                                imgStyle={{ flex: 1, height: galleryFocusedImgHeight }}
                                duration={200}
                                enableScaling={true}
                                easingFunc={Easing.ease}
                                />
                            }
                    />
                    {this.LoadMoreButton()}
                </Container>
            );
        }
    }
}

const Container = glamorous.scrollView({
    flex: 1,
})

const ActivityIndicatorContainer = glamorous.view({
    padding: generalPaddingSize
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

const LoadMoreButton = glamorous.touchableHighlight({
    flex: 1,
    minHeight: galleryLoadHeight,
    marginLeft: screenPaddingHorSize,
    marginRight: screenPaddingHorSize,
    marginTop: screenPaddingVerSize,
    marginBottom: screenPaddingVerSize,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: black,
    shadowOpacity: 0.2,
    elevation: 5,
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center"
})

const LoadMoreText = glamorous.text({
    fontSize: textSize
})

const ListImage = glamorous.image({
    flex: 1,
    height: galleryImgHeight,
})
