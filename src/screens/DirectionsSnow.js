import React from 'react';
import { SafeAreaView, Text, TouchableHighlight, Image } from 'react-native';
import glamorous from "glamorous-native";
import { bColor, pDarkColor, hBarColor } from "../style/colors"
import { generalPaddingSize, screenPaddingHorSize, screenPaddingVerSize } from "../style/sizes"

export default class DirectionsSnow extends React.Component {
    static navigationOptions = ({ screenProps, navigation }) => ({
        title: "Directions",
        headerLeft: (
            <TouchableHighlight
                style={{ padding: generalPaddingSize }}
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
                <Text>Snow Route</Text>
            </Container>
        );
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
    backgroundColor: bColor,
    paddingLeft: screenPaddingHorSize,
    paddingRight: screenPaddingHorSize,
    paddingTop: screenPaddingVerSize,
    paddingBottom: screenPaddingVerSize,
})