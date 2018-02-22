import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { pDarkColor } from "../style/colors"

class Gallery extends React.Component {
    render() {
        return(
            <View>
                <StatusBar
                    backgroundColor={pDarkColor}
                    barStyle="light-content"
                />
                <Text>Gallery</Text>
            </View>
        )
    }
}

export default () => <Gallery />;