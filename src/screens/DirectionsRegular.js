import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableHighlight, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import glamorous from "glamorous-native";
import { bColor, pDarkColor, hBarColor } from "../style/colors"
import { generalPaddingSize, screenPaddingHorSize, screenPaddingVerSize, textSize, mapHeight } from "../style/sizes"

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
                <MapView style={styles.map}
                    initialRegion={{
                        latitude: 42.002061,
                        longitude: -76.032772,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>
                    <Marker
                        coordinate={{
                            latitude: 42.002061,
                            longitude: -76.032772,
                        }}
                        title={"Kopernik Observatory & Science Center"}
                        description={"Look Up... and Dream Big!"}
                >
                        <View style={styles.radius}>
                            <View style={styles.marker} />
                        </View>
                    </Marker>
                </MapView>
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

const styles = StyleSheet.create({
    map: {
        height: mapHeight
    },
    marker: {
        height: 20,
        width: 20,
    }
});