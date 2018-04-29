import React from 'react';
import { SafeAreaView, Text, TouchableHighlight, Image, Dimensions } from 'react-native';
import glamorous from "glamorous-native";
import { bColor, pDarkColor, hBarColor } from "../style/colors"
import { generalPaddingSize, screenPaddingHorSize, screenPaddingVerSize, textSize } from "../style/sizes"

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
                <Content>
                    In the event of icy or snow covered roads this alternative
                    route is longer but not as steep. Just take West Hill Rd. in
                    Vestal Center. Then take a left on Ridge Rd. follow by another
                    left on Underwood Rd. Kopernik Observatory will be on your
                    right.
                    {"\n"}
                </Content>
                <RouteImage source={require("../style/assets/snowRouteMap.png")} />                
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

const RouteImage = glamorous.image({
    width: Dimensions.get('window').width - (2 * screenPaddingHorSize),
    resizeMode: 'contain',
    backgroundColor: "#efece4"    
})