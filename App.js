import React from 'react';
import { TouchableHighlight, Image, Text, Dimensions } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Calendar from "./src/screens/Calendar"
import Gallery from "./src/screens/Gallery"
import Home from "./src/screens/Home"

import { pLightColor, sColor } from "./src/style/colors"

const RootNavigator = TabNavigator(
    {
        Home: { screen: Home },
        Calendar: { screen: Calendar },
        Gallery: { screen: Gallery },
    },
    {
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
                backgroundColor: pLightColor
            },
            labelStyle: {
                fontWeight: "bold"
            },
            indicatorStyle: {
                backgroundColor: sColor
            }
        }
    }
)

class App extends React.Component {
    render() {
        return <RootNavigator />
    }
}

export default () => <App />;