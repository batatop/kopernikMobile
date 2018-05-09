import React from 'react';
import { SafeAreaView, Text, Image, ScrollView, Dimensions, StatusBar, TouchableHighlight } from 'react-native';
import glamorous from "glamorous-native";
import HTMLView from 'react-native-htmlview';
import { bColor, pColor, sColor, pDarkColor, hBarColor, white, black } from "../style/colors"
import { titleSize, subtitleSize, textSize, generalPaddingSize, screenPaddingHorSize, screenPaddingVerSize } from "../style/sizes"

export default class About extends React.Component {
    static navigationOptions = ({ screenProps, navigation }) => ({
        title: "About",
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
                <StatusBar
                    backgroundColor={pDarkColor}
                    barStyle="light-content"
                />
                <AboutScrollView>
                    <Title>About the Kopernik Observatory & Science Center</Title>
                    <Content>
                        The Kopernik Observatory & Science Center opened in 1974,
                        built by the Kopernik Society of Broome County to commemorate
                        the 500th anniversary of the birth of Mikolaj Kopernik, the man
                        known to the world as Copernicus – the “father” of modern
                        astronomy. Since that time, hundreds of thousands of children
                        and adults have experienced the wonders of science through
                        the Observatory’s programs.
                    </Content>
                    <Content>
                        Located atop a 1740 foot hill in Vestal, NY, 13 miles southwest
                        of Binghamton, the Observatory has been one of the best-sited
                        and best equipped public observatories in the Northeast United
                        States for over 40 years.
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
                        helping at Kopernik programs.
                    </Content>
                    <Subtitle>
                        Facilities
                    </Subtitle>
                    <ListItem>
                        &#9679; 3 Observatory Telescopes{"\n"}
                        &#9679; Solar Heliostat{"\n"}
                        &#9679; Over 12 Portable Telescopes{"\n"}
                        &#9679; Heliostat Solar Telescope{"\n"}
                        &#9679; High Resolution CCD camera and filter set{"\n"}
                        &#9679; Hershel Wedge & other solar filters{"\n"}
                        &#9679; Photovoltaic Array{"\n"}
                        &#9679; True Color 3D projector{"\n"}
                        &#9679; Computer Lab{"\n"}
                        &#9679; Space Science Lab{"\n"}
                        &#9679; Physics/Laser Lab{"\n"}
                        &#9679; Earth Science Lab{"\n"}
                        &#9679; Weather Station{"\n"}
                        &#9679; Amateur Radio Station (K2ZRO){"\n"}
                        &#9679; 24 Acres{"\n"}
                        &#9679; Portable Planetarium{"\n"}
                    </ListItem>
                </AboutScrollView>
            </Container>
        );
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
    backgroundColor: bColor,
})

const AboutScrollView = glamorous.scrollView({
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

const Title = glamorous.text({
    fontSize: titleSize,
    paddingTop: generalPaddingSize,
    paddingBottom: generalPaddingSize,
    paddingLeft: generalPaddingSize,
    paddingRight: generalPaddingSize,  
})

const Content = glamorous.text({
    fontSize: textSize,
    paddingLeft: generalPaddingSize,
    paddingRight: generalPaddingSize,
    paddingBottom: generalPaddingSize,  
})

const Subtitle = glamorous.text({
    fontSize: subtitleSize,
    paddingBottom: generalPaddingSize,
    paddingLeft: generalPaddingSize,
    paddingRight: generalPaddingSize,
})

const ListItem = glamorous.text({
    fontSize: textSize,
    paddingLeft: generalPaddingSize,    
    paddingRight: generalPaddingSize,    
    paddingBottom: generalPaddingSize,    
})