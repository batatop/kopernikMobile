import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { pColor, pLightColor, sColor, tLightColor } from "./src/style/colors"

import Calendar from "./src/screens/Calendar"
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
                color: tLightColor
            },
            headerTintColor: tLightColor
        }
    }
)

const RootNavigator = TabNavigator(
    {
        Home: { screen: HomeNavigator },
        Calendar: { screen: Calendar },
        Gallery: { screen: Gallery },
    },
    {
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
                backgroundColor: pLightColor,
            },
            labelStyle: {
                color: tLightColor,
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
        return (
            <RootNavigator />
        )
    }
}

export default () => <App />;