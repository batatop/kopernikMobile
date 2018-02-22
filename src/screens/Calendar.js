import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { pDarkColor } from "../style/colors"


class Calendar extends React.Component {
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor={pDarkColor}
                    barStyle="light-content"
                />
                <Text>Calendar</Text>
            </View>
        )
    }
}

export default () => <Calendar />;