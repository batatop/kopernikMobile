import React from 'react';
import { Image, WebView,Linking, SafeAreaView, ImageBackground, View, Text, StatusBar, AppRegistry, ScrollView, StyleSheet, TouchableHighlight, FlatList,Dimensions } from 'react-native';
import glamorous from "glamorous-native";
import { Calendar, Agenda } from 'react-native-calendars';
import { bColor, pColor, black } from "../style/colors"

export default class AppCalendar extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Clear Sky Chart",
    });

    render() {
           return (
                <Container>
                    <ClearSkyImg source={{uri: 'http://www.cleardarksky.com/c/KprnkObNYcsk.gif?c=2714406'}} />
                </Container>
            );
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
    backgroundColor: black
})

const ClearSkyImg = glamorous.image({
    flex: 1,
    alignSelf: 'center',
    height: 605,
    width: 550,
    justifyContent: 'center',
    backgroundColor: '#000000',
    borderRadius: 1,
    transform: [{ rotate: '90deg' }],
    resizeMode: 'contain',
})