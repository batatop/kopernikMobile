import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import glamorous from "glamorous-native";
import { backgroundColor } from "../style/colors"

import PostItem from "../elements/PostItem"

export default class Home extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Home", 
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
                <FlatList
                    data={this.getPosts()}
                    renderItem={({ item }) =>
                        <PostItem
                            navigation={this.props.navigation}
                            key={item.key}
                            title={item.title}
                            img={item.img}
                        />
                    }
                />
            </Container>
        );
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
    backgroundColor: backgroundColor
})