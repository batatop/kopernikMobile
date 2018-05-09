import React from 'react';
import { SafeAreaView, Text, TouchableHighlight, Image } from 'react-native';
import glamorous from "glamorous-native";
import { bColor, pDarkColor, hBarColor, black, white } from "../style/colors"
import { titleSize, subtitleSize, textSize, generalPaddingSize, screenPaddingHorSize, screenPaddingVerSize } from "../style/sizes"

export default class ContactUsGeneral extends React.Component {
    static navigationOptions = ({ screenProps, navigation }) => ({
        title: "Contact Us",
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
                <ContactUsGeneralView>
                    <Subtitle>Address</Subtitle>
                    <Content>
                        698 Underwood Road, Vestal NY 13850
                    </Content>
                    <Subtitle>Phone</Subtitle>
                    <Content>
                        607-748-3685
                    </Content>
                    <Subtitle>Fax</Subtitle>
                    <Content>
                        607-748-3222
                    </Content>
                    <Subtitle>E-mail</Subtitle>
                    <Content>
                        info@kopernik.org
                    </Content>
                    <Subtitle>Kopernik Astronomical Society [KAS]</Subtitle>
                    <Content>
                        George Normandin, President{"\n"}
                        Optics, Astrophotography and CCD Imaging Expert{"\n"}
                        gnormandin@stny.rr.com
                    </Content>
                </ContactUsGeneralView>
            </Container>
        );
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
    backgroundColor: bColor
})

const ContactUsGeneralView = glamorous.scrollView({
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
    paddingTop: generalPaddingSize,
    paddingLeft: generalPaddingSize,
    paddingRight: generalPaddingSize
})

const Content = glamorous.text({
    fontSize: textSize,
    paddingBottom: generalPaddingSize,
    paddingLeft: generalPaddingSize,
    paddingRight: generalPaddingSize
})