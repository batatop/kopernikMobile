import React from 'react';
import { SafeAreaView, Text, TouchableHighlight, Image } from 'react-native';
import glamorous from "glamorous-native";
import { bColor, pDarkColor, hBarColor } from "../style/colors"
import { generalPaddingSize, screenPaddingHorSize, screenPaddingVerSize, textSize } from "../style/sizes"

export default class DirectionsRegular extends React.Component {
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
                <Content>
                    Take Interstate Route 81 or 88 to the Binghamton area.
                    Follow Route 17 West to Route 26 South (Exit 67s).
                    Proceed 5 miles and turn right at Glenwood Road. (Note
                    the green observatory sign). Take the first left onto
                    Underwood Road and proceed 1.8 miles up the hill. Kopernik
                    Observatory will be visible soon on the left.
                    {"\n"}
                </Content>
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

const Content = glamorous.text({
    fontSize: textSize
})