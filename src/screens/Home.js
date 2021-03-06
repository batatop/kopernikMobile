import React from 'react';
import { SafeAreaView, FlatList, StatusBar, ScrollView, Text, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import glamorous from "glamorous-native";
import { bColor, pDarkColor, hBarColor } from "../style/colors"
import { generalPaddingSize, mainImgHeight } from "../style/sizes"

import PostItem from "../elements/PostItem"

export default class Home extends React.Component {
    static navigationOptions = ({ screenProps, navigation }) => ({
        title: "Kopernik",
        headerLeft: (
            <TouchableHighlight
                style={{ padding: generalPaddingSize }}
                onPress={() => screenProps.rootNavigation.navigate("DrawerToggle")}
                underlayColor={hBarColor}
            >
                <Image source={require("../style/assets/menuIcon.png")} />
            </TouchableHighlight>
        ),
    });

    componentWillMount() {
        this.handleRefresh = this.handleRefresh.bind(this)
        this.setState({
            posts: null,
            refreshing: false,
            loading: true
        })
    }

    componentDidMount() {
        this.makeRequest()
    }

    makeRequest() {
        let postsUrl = "http://www.kopernik.org/wp-json/wp/v2/posts?_embed"
        fetch(postsUrl)
            .then((response) => response.json())
            .then((response) => {
                if (this.refs.home) {
                    this.setState({
                        posts: response,
                        refreshing: false,
                        loading: false
                    })
                }
            })
            .catch((err) => console.log(err))
    }

    getPosts() {
        let p = []
        if (this.state.posts != null) {
            for (let i = 0; i < this.state.posts.length; i++) {       
                let newPost = {}
                newPost.key = this.state.posts[i].id.toString()
                newPost.title = this.state.posts[i].title.rendered
                newPost.img = this.state.posts[i]._embedded["wp:featuredmedia"][0].source_url
                newPost.content = this.state.posts[i].content.rendered
                p.push(newPost)
            }
            return p
        }
        else {
            return []
        }
    }

    handleRefresh() {
        this.setState({
            refreshing: true
        }, function() {
            this.makeRequest()
        })
    }

    render() {
        if(this.state.loading) {
            return(
                <Container ref='home'>
                    <StatusBar
                        backgroundColor={pDarkColor}
                        barStyle="light-content"
                    />
                    <ScrollContainer>
                        <MainImage source={require('../style/assets/homeImg.jpg')} />
                        <ActivityIndicatorContainer>
                            <ActivityIndicator size="large" />
                        </ActivityIndicatorContainer>
                    </ScrollContainer>
                </Container>
            )
        }
        else {
            return (
                <Container ref='home'>
                    <StatusBar
                        backgroundColor={pDarkColor}
                        barStyle="light-content"
                    />
                    <ScrollContainer>
                        <MainImage source={require('../style/assets/homeImg.jpg')} />
                        <FlatList
                            data={this.getPosts()}
                            refreshing={this.state.refreshing}
                            onRefresh={this.handleRefresh}
                            renderItem={({ item }) =>
                                <PostItem
                                    navigation={this.props.navigation}
                                    post={item}
                                />
                            }
                        />
                    </ScrollContainer>
                </Container>
            );
        }
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
})

const ScrollContainer = glamorous.scrollView({
    flex: 1,
    backgroundColor: bColor
})

const ActivityIndicatorContainer = glamorous.view({
    padding: generalPaddingSize
})

const MainImage = glamorous.image({
    flex: 1,
    height: mainImgHeight,
    maxHeight: mainImgHeight,
    maxWidth: "100%",
    overflow: "hidden"
})