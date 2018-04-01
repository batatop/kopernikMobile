import React from 'react';
import { SafeAreaView, Text, TouchableHighlight, Image } from 'react-native';
import glamorous from "glamorous-native";
import { bColor, pDarkColor, hColor } from "../style/colors"

export default class ClearSky extends React.Component {
    static navigationOptions = ({ screenProps, navigation }) => ({
        title: "Clear Sky",
        headerLeft: (
            <TouchableHighlight
                style={{ padding: 18 }}
                onPress={() => screenProps.rootNavigation.navigate("DrawerToggle")}
                underlayColor={hColor}
            >
                <Image source={require("../assets/menuIcon.png")} />
            </TouchableHighlight>
        ),
    });

    render() {
        return (
            <Container>
                <Text>Clear Sky</Text>
            </Container>
        );
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
    backgroundColor: bColor
})