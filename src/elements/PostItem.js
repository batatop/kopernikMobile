import React from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import glamorous from "glamorous-native";
import { backgroundColor, tDarkColor } from "../style/colors"

export default class PostItem extends React.Component {
    render() {
        return (
            <TouchableHighlight onPress={() => this.props.navigation.navigate("Post")}>
                <View>
                    <Text>{this.props.title}</Text>
                    <Image
                        style={{ height: 50, width: 50 }}
                        source={{ uri: this.props.img }}
                    />
                </View>
            </TouchableHighlight>
        )
    }
}