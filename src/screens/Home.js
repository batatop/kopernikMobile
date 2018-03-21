import React from 'react';
import { SafeAreaView, FlatList, StatusBar, ScrollView, Text } from 'react-native';
import glamorous from "glamorous-native";
import { bColor, pDarkColor } from "../style/colors"

import PostItem from "../elements/PostItem"

export default class Home extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Kopernik", 
    });

    componentWillMount() {
        this.setState({
            posts: null
        })
    }

    componentDidMount() {
        let postsUrl = "http://www.kopernik.org/wp-json/wp/v2/posts?_embed"
        fetch(postsUrl)
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    posts: response
                })
            })
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

    render() {
        return (
            <Container>
                <ScrollContainer>
                    <MainImage source={require('../style/assets/home.jpg')} />
                    <FlatList
                        data={this.getPosts()}
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

const Container = glamorous.safeAreaView({
    flex: 1,
})

const ScrollContainer = glamorous.scrollView({
    flex: 1,
    backgroundColor: bColor
})

const MainImage = glamorous.image({
    flex: 1,
    height: 120,
    maxHeight: 120,
    maxWidth: "100%",
    overflow: "hidden"
})