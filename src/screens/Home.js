import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

class PostItem extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.title}</Text>
                <Image
                    style={{ height: 50, width: 50 }}
                    source={{ uri: this.props.img }}
                />
            </View>
        )
    }
}

export default class Home extends React.Component {
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
            <View>
                <FlatList
                    data={this.getPosts()}
                    renderItem={({ item }) =>
                        <PostItem
                            key={item.key}
                            title={item.title}
                            img={item.img}
                        />
                    }
                />
            </View>
        );
    }
}