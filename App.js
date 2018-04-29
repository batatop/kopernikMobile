import React from 'react';
import { Image, Dimensions } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import { pColor, pLightColor, sColor, tLightColor, white } from "./src/style/colors"

import Drawer from "./src/elements/Drawer"
import GalleryDrawer from "./src/elements/GalleryDrawer"

import About from "./src/screens/About"
import Calendar from "./src/screens/Calendar"
import ClearSky from "./src/screens/ClearSky"
import ContactUsGeneral from "./src/screens/ContactUsGeneral"
import ContactUsStaff from "./src/screens/ContactUsStaff"
import DirectionsRegular from "./src/screens/DirectionsRegular"
import DirectionsSnow from "./src/screens/DirectionsSnow"
import Gallery from "./src/screens/Gallery"
import Home from "./src/screens/Home"
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

const GalleryStackNavigator = StackNavigator(
    {
        GalleryStack: { screen: Gallery },
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

const GalleryNavigator = DrawerNavigator(
    {
        Gallery: {
            screen: ({ navigation, screenProps }) =>
                <GalleryStackNavigator
                    screenProps={{
                        galleryNavigation: navigation,
                        rootNavigation: screenProps.rootNavigation,
                        defaultGroup: "aurora"
                    }}
                />
        }
        // Gallery: { screen: GalleryStackNavigator }
    },
    {
        contentComponent: GalleryDrawer,
        drawerWidth: 300,
        drawerPosition: "right"
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

const ContactUsTabNavigator = TabNavigator(
    {
        GeneralContactUs: {
            screen: ContactUsGeneral,
            navigationOptions: {
                tabBarLabel: "General",
            }
        },
        StaffContactUs: {
            screen: ContactUsStaff,
            navigationOptions: {
                tabBarLabel: "Staff",
            }
        },
    },
    {
        tabBarOptions: {
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

const ContactUsNavigator = StackNavigator(
    {
        ContactUsTab: { screen: ContactUsTabNavigator },
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

const DirectionsTabNavigator = TabNavigator(
    {
        RegularRoute: {
            screen: DirectionsRegular,
            navigationOptions: {
                tabBarLabel: "Regular Route",
            }
        },
        SnowRoute: {
            screen: DirectionsSnow,
            navigationOptions: {
                tabBarLabel: "Snow Route",
            }
        },
    },
    {
        tabBarOptions: {
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

const DirectionsNavigator = StackNavigator(
    {
        DirectionsTab: { screen: DirectionsTabNavigator },
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
    },
)

const MainNavigator = TabNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                tabBarLabel: "Home",
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./src/style/assets/homeIcon.png')}
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
                        source={require('./src/style/assets/calendarIcon.png')}
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
                        source={require('./src/style/assets/galleryIcon.png')}
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
                        source={require('./src/style/assets/clearSkyIcon.png')}
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
        Directions: {
            screen: ({ navigation, screenProps }) =>
                <DirectionsNavigator
                    screenProps={{
                        rootNavigation: navigation
                    }}
                />,
            navigationOptions: {
                title: "Directions",
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