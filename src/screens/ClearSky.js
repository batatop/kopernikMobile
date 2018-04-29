import React from 'react';
import { Image, SafeAreaView, TouchableHighlight, Dimensions } from 'react-native';
import glamorous from "glamorous-native";
import { Calendar, Agenda } from 'react-native-calendars';
import { bColor, pColor, black, hBarColor } from "../style/colors"

export default class AppCalendar extends React.Component {
    static navigationOptions = ({ screenProps, navigation }) => ({
        title: "Clear Sky Chart",
        headerLeft: (
            <TouchableHighlight
                style={{ padding: 18 }}
                onPress={() => screenProps.rootNavigation.navigate("DrawerToggle")}
                underlayColor={hBarColor}
            >
                <Image source={require("../style/assets/menuIcon.png")} />
            </TouchableHighlight>
        ),
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
    height: 500, // a big number
    margin: 10,
    resizeMode: 'contain',
})

// // Rotated
// const ClearSkyImg = glamorous.image({
//     flex: 1,
//     alignSelf: 'center',
//     height: 605,
//     width: 550,
//     justifyContent: 'center',
//     backgroundColor: '#000000',
//     borderRadius: 1,
//     transform: [{ rotate: '90deg' }],
//     resizeMode: 'contain',
// })