import React from 'react';
import { Image, Dimensions } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { pColor, pLightColor, sColor, tLightColor } from "./src/style/colors"

import Calendar from "./src/screens/Calendar"
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
                color: tLightColor,
            },
            headerTintColor: tLightColor
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
                color: tLightColor,
            },
            headerTintColor: tLightColor
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
                color: tLightColor,
            },
            headerTintColor: tLightColor
        }
    }
)

const RootNavigator = TabNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                tabBarLabel: "Home",
            }
        },
        Calendar: {
            screen: CalendarNavigator,
            navigationOptions: {
                tabBarLabel: "Calendar",
            }
        },
        Gallery: {
            screen: GalleryNavigator,
            navigationOptions: {
                tabBarLabel: "Gallery",
            }
        },
    },
    {
        tabBarPosition: "bottom",
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

class App extends React.Component {
    render() {
        return (
            <RootNavigator />
        )
    }
}

export default () => <App />;