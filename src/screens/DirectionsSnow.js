import React from 'react';
import { SafeAreaView, Text, TouchableHighlight, Image, Dimensions } from 'react-native';
import glamorous from "glamorous-native";
import { bColor, pDarkColor, hBarColor, black, white } from "../style/colors"
import { generalPaddingSize, screenPaddingHorSize, screenPaddingVerSize, textSize, subtitleSize } from "../style/sizes"

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
                <DirectionsSnowView>
                    <DirectionsSnowContentView>
                        <Subtitle>Snow Route Directions</Subtitle>
                        <Content>
                            In the event of icy or snow covered roads this alternative
                            route is longer but not as steep. Just take West Hill Rd. in
                            Vestal Center. Then take a left on Ridge Rd. follow by another
                            left on Underwood Rd. Kopernik Observatory will be on your
                            right.
                            {"\n"}
                        </Content>
                    </DirectionsSnowContentView>
                    <MapContainer>
                        <RouteImage source={require("../style/assets/snowRouteMap.png")} />
                    </MapContainer>
                </DirectionsSnowView>               
            </Container>
        );
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
    backgroundColor: bColor,
})

const DirectionsSnowView = glamorous.scrollView({
    flex: 1
})

const DirectionsSnowContentView = glamorous.scrollView({
    flex: 1,
    marginLeft: screenPaddingHorSize,
    marginRight: screenPaddingHorSize,
    marginTop: screenPaddingVerSize,
    marginBottom: screenPaddingVerSize,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: black,
    shadowOpacity: 0.2,
    elevation: 5,
    backgroundColor: white,
})

const Subtitle = glamorous.text({
    fontSize: subtitleSize,
    padding: generalPaddingSize
})

const Content = glamorous.text({
    fontSize: textSize,
    paddingBottom: generalPaddingSize,
    paddingLeft: generalPaddingSize,
    paddingRight: generalPaddingSize
})

const MapContainer = glamorous.view({
    padding: generalPaddingSize
})

const RouteImage = glamorous.image({
    width: Dimensions.get('window').width - (2 * screenPaddingHorSize),
    resizeMode: 'contain',
    backgroundColor: "#efece4"
})