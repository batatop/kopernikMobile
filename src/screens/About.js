import React from 'react';
import { SafeAreaView, Text, Image, ScrollView, Dimensions, StatusBar, TouchableHighlight } from 'react-native';
import glamorous from "glamorous-native";
import HTMLView from 'react-native-htmlview';
import { bColor, pColor, sColor, pDarkColor, hBarColor } from "../style/colors"
import { titleSize, subtitleSize, textSize } from "../style/sizes"

export default class About extends React.Component {
    static navigationOptions = ({ screenProps, navigation }) => ({
        title: "About",
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

    componentWillMount() {
        this.setState({
            pages: []
        })
    }

    render() {
        return (
            <Container>
                <StatusBar
                    backgroundColor={pDarkColor}
                    barStyle="light-content"
                />
                <ScrollView>
                    <Title>About the Kopernik Observatory & Science Center{"\n"}</Title>
                    <Content>
                        The Kopernik Observatory & Science Center opened in 1974,
                        built by the Kopernik Society of Broome County to commemorate
                        the 500th anniversary of the birth of Mikolaj Kopernik, the man
                        known to the world as Copernicus – the “father” of modern
                        astronomy. Since that time, hundreds of thousands of children
                        and adults have experienced the wonders of science through
                        the Observatory’s programs.{"\n"}
                    </Content>
                    <Content>
                        Located atop a 1740 foot hill in Vestal, NY, 13 miles southwest
                        of Binghamton, the Observatory has been one of the best-sited
                        and best equipped public observatories in the Northeast United
                        States for over 40 years.{"\n"}
                    </Content>
                    <Content>
                        The Kopernik Observatory & Science Center is the first science
                        laboratory facility in New York State designed for K-12 teachers,
                        students and their families. Its mission is to offer hands-on
                        investigations using advanced telescopes, computers and other
                        tools, encouraging the discovery of the wonders of the Universe.
                        The Observatory is also the home of the Kopernik Astronomical
                        Society (KAS), a group of dedicated observational astronomers.
                        Visitors to the Observatory often will find KAS volunteers
                        helping at Kopernik programs.{"\n"}
                    </Content>
                    <Subtitle>
                        Facilities{"\n"}
                    </Subtitle>
                    <ListItem>
                        - 3 Observatory Telescopes{"\n"}
                        - Solar Heliostat{"\n"}
                        - Over 12 Portable Telescopes{"\n"}
                        - Heliostat Solar Telescope{"\n"}
                        - High Resolution CCD camera and filter set{"\n"}
                        - Hershel Wedge & other solar filters{"\n"}
                        - Photovoltaic Array{"\n"}
                        - True Color 3D projector{"\n"}
                        - Computer Lab{"\n"}
                        - Space Science Lab{"\n"}
                        - Physics/Laser Lab{"\n"}
                        - Earth Science Lab{"\n"}
                        - Weather Station{"\n"}
                        - Amateur Radio Station (K2ZRO){"\n"}
                        - 24 Acres{"\n"}
                        - Portable Planetarium{"\n"}
                    </ListItem>
                </ScrollView>
            </Container>
        );
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
    backgroundColor: bColor,
    margin: 10
})

const Title = glamorous.text({
    fontSize: titleSize,
})

const Content = glamorous.text({
    fontSize: textSize,
})

const Subtitle = glamorous.text({
    fontSize: subtitleSize,
})

const ListItem = glamorous.text({
    fontSize: textSize,
})