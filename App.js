import React from 'react';
import { Image, Dimensions } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import { pColor, pLightColor, sColor, tLightColor, white } from "./src/style/colors"

import Drawer from "./src/elements/Drawer"

import About from "./src/screens/About"
import Calendar from "./src/screens/Calendar"
import ClearSky from "./src/screens/ClearSky"
import ContactUs from "./src/screens/ContactUs"
import Gallery from "./src/screens/Gallery"
import Home from "./src/screens/Home"
import GalleryImage from "./src/screens/GalleryImage"
import Post from "./src/screens/Post"

const HomeNavigator = StackNavigator(
    {
        Home: { screen: Home },
        Post: { screen: Post },
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: pColor,
            },
            headerTitleStyle: {
                width: Dimensions.get('window').width,
                color: white,
            },
            headerTintColor: white
        }
    }
)

const CalendarNavigator = StackNavigator(
    {
        Calendar: { screen: Calendar },
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: pColor,
            },
            headerTitleStyle: {
                width: Dimensions.get('window').width,
                color: white,
            },
            headerTintColor: white
        }
    }
)

const GalleryNavigator = StackNavigator(
    {
        Gallery: { screen: Gallery },
        GalleryImage: { screen: GalleryImage },
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: pColor,
            },
            headerTitleStyle: {
                width: Dimensions.get('window').width,
                color: white,
            },
            headerTintColor: white
        }
    }
)

const AboutNavigator = StackNavigator(
    {
        About: { screen: About },
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: pColor,
            },
            headerTitleStyle: {
                width: Dimensions.get('window').width,
                color: white,
            },
            headerTintColor: white
        }
    }
)

const ContactUsNavigator = StackNavigator(
    {
        ContactUs: { screen: ContactUs },
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: pColor,
            },
            headerTitleStyle: {
                width: Dimensions.get('window').width,
                color: white,
            },
            headerTintColor: white
        }
    }
)

const ClearSkyNavigator = StackNavigator(
    {
        ClearSky: { screen: ClearSky },
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: pColor,
            },
            headerTitleStyle: {
                width: Dimensions.get('window').width,
                color: white,
            },
            headerTintColor: white
        }
    }
)

const MainNavigator = TabNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                tabBarLabel: "Home",
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./src/assets/homeIcon.png')}
                    />
                ),
            }
        },
        Calendar: {
            screen: CalendarNavigator,
            navigationOptions: {
                tabBarLabel: "Calendar",
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./src/assets/calendarIcon.png')}
                    />
                ),
            }
        },
        Gallery: {
            screen: GalleryNavigator,
            navigationOptions: {
                tabBarLabel: "Gallery",
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./src/assets/galleryIcon.png')}
                    />
                ),
            }
        },
        ClearSky: {
            screen: ClearSkyNavigator,
            navigationOptions: {
                tabBarLabel: "Clear Sky",
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./src/assets/clearSkyIcon.png')}
                    />
                ),
            }
        },
    },
    {
        tabBarPosition: "bottom",
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            style: {
                backgroundColor: pColor,
            },
            labelStyle: {
                color: tLightColor,
                fontWeight: "bold",
                width: Dimensions.get('window').width,
            },
            indicatorStyle: {
                backgroundColor: sColor
            }
        }
    }
)

const RootNavigator = DrawerNavigator(
    {
        Main: {
            screen: ({ navigation, screenProps }) =>
                <MainNavigator
                    screenProps={{
                        rootNavigation: navigation
                    }}
                />,
            navigationOptions: {
                title: "Kopernik",
            }

        },
        About: {
            screen: ({ navigation, screenProps }) =>
                <AboutNavigator
                    screenProps={{
                        rootNavigation: navigation
                    }}
                />,
            navigationOptions: {
                title: "About",
            }

        },
        ContactUs: {
            screen: ({ navigation, screenProps }) =>
                <ContactUsNavigator
                    screenProps={{
                        rootNavigation: navigation
                    }}
                />,
            navigationOptions: {
                title: "Contact Us",
            }

        },
    },
    {
        contentComponent: Drawer,
        drawerWidth: 300
    }
)

class App extends React.Component {
    render() {
        return (
            <RootNavigator />
        )
    }
}

export default () => <App />;