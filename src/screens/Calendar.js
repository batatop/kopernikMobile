import React from 'react';
import { SafeAreaView, Text, StatusBar, Image, AppRegistry, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import glamorous from "glamorous-native";
import { Calendar, Agenda } from 'react-native-calendars';
import { bColor, pColor } from "../style/colors"

export default class AppCalendar extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Gallery",
    });

    componentWillMount() {
        this.setState({
            images: [],
            loadingIndex: 0,
        })
    }

    render() {
        return (
            <Agenda
                style={{height: "100%"}}
            />
        );
    }
}

const Container = glamorous.scrollView({
    flex: 1,
    backgroundColor: "red"
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