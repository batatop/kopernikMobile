import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import glamorous from "glamorous-native";
import { backgroundColor, pDarkColor } from "../style/colors"

export default class GalleryImage extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Image",
    });

    render() {
        return (
            <Container>
                <Text>Gallery Image</Text>
            </Container>
        );
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
    backgroundColor: backgroundColor
})