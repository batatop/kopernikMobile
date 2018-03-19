import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import glamorous from "glamorous-native";
import { backgroundColor, pDarkColor } from "../style/colors"

import PostItem from "../elements/PostItem"

export default class Calendar extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Calendar",
    });

    render() {
        return (
            <Container>
                <Text>Calendar</Text>
            </Container>
        );
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
    backgroundColor: backgroundColor
})