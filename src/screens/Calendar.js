import React from 'react';
import { SafeAreaView, Text, StatusBar, Image, AppRegistry, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import glamorous from "glamorous-native";
import { bColor, pDarkColor, highlightColor } from "../style/colors"

export default class Calendar extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Gallery",
    });

    componentWillMount() {
        this.setState({
            images: [],
            loadingIndex: 0,
        })
    }

    componentDidMount() {
        let calendar = "https://www.googleapis.com/calendar/v3/calendars/3phl0f0rmkj3st8ahuhhss19a0@group.calendar.google.com/events?key={AIzaSyDUa-1pt439wXjBEfWrazbubrthUI0pg6M}"
        fetch(calendar)
        .then((res) => { return res })
        .then((res2) => {
            console.log(res2)
        });
    }

    render() {
        return (
            <Container>
                <ScrollContainer>
                    <Text>Calendar</Text>
                </ScrollContainer>
            </Container>
        );
    }
}

const Container = glamorous.scrollView({
    flex: 1,
})

const ScrollContainer = glamorous.safeAreaView({
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    backgroundColor: bColor,
})