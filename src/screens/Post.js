import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import glamorous from "glamorous-native";
import { backgroundColor } from "../style/colors"

import PostItem from "../elements/PostItem"

export default class Post extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Post", 
    });

    render() {
        return (
            <Container>
                <Text>Post</Text>
            </Container>
        );
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
    backgroundColor: backgroundColor
})