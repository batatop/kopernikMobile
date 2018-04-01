import React from 'react';
import { SafeAreaView, Text, TouchableHighlight, Image } from 'react-native';
import glamorous from "glamorous-native";
import { bColor, pDarkColor } from "../style/colors"

export default class ContactUs extends React.Component {
    static navigationOptions = ({ screenProps, navigation }) => ({
        title: "Contact Us",
        headerLeft: (
            <TouchableHighlight
                style={{ padding: 18 }}
                onPress={() => screenProps.rootNavigation.navigate("DrawerToggle")}
            >
                <Image source={require("../assets/menuIcon.png")} />
            </TouchableHighlight>
        ),
    });

    render() {
        return (
            <Container>
                <Text>Contact Us</Text>
            </Container>
        );
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
    backgroundColor: bColor
})