import React from 'react';
import { SafeAreaView, Text, TouchableHighlight, Image } from 'react-native';
import glamorous from "glamorous-native";
import { bColor, pDarkColor, hBarColor, black, white } from "../style/colors"
import { titleSize, subtitleSize, textSize, generalPaddingSize, screenPaddingHorSize, screenPaddingVerSize } from "../style/sizes"

export default class ContactUsStaff extends React.Component {
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
                <ContactUsStaffView>
                    <Subtitle>Drew Deskur</Subtitle>
                    <Content>
                        BSEE, MBA: Director{"\n"}
                        607-748-3685 X 303{"\n"}
                        ddeskur@kopernik.org
                    </Content>
                    <Subtitle>Tish Bresee</Subtitle>
                    <Content>
                        BS: School Programs Coordinator & NYS Certified Teacher{"\n"}
                        607-748-3685 X 305{"\n"}
                        tbresee@kopernik.org
                    </Content>
                    <Subtitle>Pat Stacconi</Subtitle>
                    <Content>
                        BS: Professional Development Coordinator & NYS Certified Teacher{"\n"}
                        607-748-3685 X 303{"\n"}
                        pstacconi@kopernik.org
                    </Content>
                    <Subtitle>Nicholas M Guydosh</Subtitle>
                    <Content>
                        PhD: Science Educator{"\n"}
                        607-748-3685{"\n"}
                        guydosh@binghamton.edu
                    </Content>
                </ContactUsStaffView>
            </Container>
        );
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
    backgroundColor: bColor
})

const ContactUsStaffView = glamorous.scrollView({
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