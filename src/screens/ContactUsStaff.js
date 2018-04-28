import React from 'react';
import { SafeAreaView, Text, TouchableHighlight, Image } from 'react-native';
import glamorous from "glamorous-native";
import { bColor, pDarkColor, hBarColor } from "../style/colors"
import { titleSize, subtitleSize, textSize } from "../style/sizes"

export default class ContactUsStaff extends React.Component {
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
                <Subtitle>Drew Deskur</Subtitle>
                <Content>
                    BSEE, MBA: Director{"\n"}
                    607-748-3685 X 303{"\n"}
                    ddeskur@kopernik.org{"\n"}
                    {"\n"}
                </Content>
                <Subtitle>Tish Bresee</Subtitle>
                <Content>
                    BS: School Programs Coordinator & NYS Certified Teacher{"\n"}
                    607-748-3685 X 305{"\n"}
                    tbresee@kopernik.org{"\n"}
                    {"\n"}
                </Content>
                <Subtitle>Pat Stacconi</Subtitle>
                <Content>
                    BS: Professional Development Coordinator & NYS Certified Teacher{"\n"}
                    607-748-3685 X 303{"\n"}
                    pstacconi@kopernik.org{"\n"}
                    {"\n"}
                </Content>
                <Subtitle>Nicholas M Guydosh</Subtitle>
                <Content>
                    PhD: Science Educator{"\n"}
                    607-748-3685{"\n"}
                    guydosh@binghamton.edu{"\n"}
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