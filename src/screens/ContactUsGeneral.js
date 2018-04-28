import React from 'react';
import { SafeAreaView, Text, TouchableHighlight, Image } from 'react-native';
import glamorous from "glamorous-native";
import { bColor, pDarkColor, hBarColor } from "../style/colors"
import { titleSize, subtitleSize, textSize } from "../style/sizes"

export default class ContactUsGeneral extends React.Component {
    static navigationOptions = ({ screenProps, navigation }) => ({
        title: "Contact Us",
        headerLeft: (
            <TouchableHighlight
                style={{ padding: 18 }}
                onPress={() => screenProps.rootNavigation.navigate("DrawerToggle")}
                underlayColor={hBarColor}
            >
                <Image source={require("../assets/menuIcon.png")} />
            </TouchableHighlight>
        ),
    });

    render() {
        return (
            <Container>
                <Subtitle>Address</Subtitle>
                <Content>
                    698 Underwood Road, Vestal NY 13850{"\n"}
                </Content>
                <Subtitle>Phone</Subtitle>
                <Content>
                    607-748-3685{"\n"}
                </Content>
                <Subtitle>Fax</Subtitle>
                <Content>
                    607-748-3222{"\n"}
                </Content>
                <Subtitle>E-mail</Subtitle>
                <Content>
                    info@kopernik.org{"\n"}
                </Content>
                <Subtitle>Kopernik Astronomical Society [KAS]</Subtitle>
                <Content>
                    George Normandin, President{"\n"}
                    Optics, Astrophotography and CCD Imaging Expert{"\n"}
                    gnormandin@stny.rr.com{"\n"}
                </Content>
            </Container>
        );
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
    backgroundColor: bColor,
    padding: 5
})

const Subtitle = glamorous.text({
    fontSize: subtitleSize
})

const Content = glamorous.text({
    fontSize: textSize
})