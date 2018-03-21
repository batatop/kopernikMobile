import React from 'react';
import { SafeAreaView, Text, Image, ScrollView, Dimensions, StatusBar } from 'react-native';
import glamorous from "glamorous-native";
import HTMLView from 'react-native-htmlview';
import { bColor, pColor, sColor, pDarkColor } from "../style/colors"

import PostItem from "../elements/PostItem"

export default class Post extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Post", 
    });

    render() {
        return (
            <Container>
                <StatusBar
                    backgroundColor={pDarkColor}
                    barStyle="light-content"
                />
                <ScrollView>
                    <HTMLView
                        value={`<div>${this.props.navigation.state.params.post.title}</div>`}
                        stylesheet={{ 
                            div: {
                                fontSize: 30,
                                padding: 5
                            },
                            a: {
                                color: sColor
                            }
                        }}
                    />
                    <PostImage source={{ uri: this.props.navigation.state.params.post.img }} />
                    <HTMLView
                        value={`<div>${this.props.navigation.state.params.post.content}</div>`}
                        stylesheet={{
                            div: {
                                fontSize: 15,
                                padding: 5 
                            },
                            a: {
                                color: sColor
                            }
                        }}
                    />
                </ScrollView>
            </Container>
        );
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
    backgroundColor: bColor
})

const PostImage = glamorous.image({
    flex: 1,
    height: 200,
    resizeMode: 'contain',
})