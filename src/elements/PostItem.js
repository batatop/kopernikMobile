import React from 'react';
import { TouchableHighlight, View, Text, Image, WebView } from 'react-native';
import glamorous from "glamorous-native";
import HTMLView from 'react-native-htmlview';
import { backgroundColor, tDarkColor, black, grey, tBlack } from "../style/colors"

export default class PostItem extends React.Component {
    componentWillMount() {
        this.getTitle = this.getTitle.bind(this)
    }
// replace(/(<([^>]+)>)/ig, "")
    getTitle() {
        // let title = decodeURI(this.props.title)
        let title = "<p style='text-align: center;'" + this.props.title + "</p>"
        return this.props.title
    }

    render() {
        return (
            <ItemHighlight onPress={() => this.props.navigation.navigate("Post", { post: this.props.post })}>
                <ItemView>
                    <ItemIconSide>
                        <ItemImage source={{ uri: this.props.post.img }} />
                    </ItemIconSide>
                    <ItemContentSide>
                        <HTMLView
                            value={`<div>${this.props.post.title}</div>`}
                            stylesheet={{ div: { fontSize: 15 } }}
                        />
                    </ItemContentSide>
                </ItemView>
            </ItemHighlight>
        )
    }
}

const ItemHighlight = glamorous.touchableHighlight({
    flexDirection: "row",
    flex: 1,
    height: 100,
    margin: 5,
    shadowOffset: { width: 20, height: 20 },
    shadowColor: black,
    shadowOpacity: 1,
    elevation: 5,
    backgroundColor: backgroundColor
})

const ItemView = glamorous.view({
    flexDirection: "row",
    flex: 1,
})

const ItemIconSide = glamorous.view({
    flex: 0.25
})

const ItemContentSide = glamorous.view({
    flex: 0.75,
    justifyContent: "center",
})

const ItemImage = glamorous.image({
    margin: 8,
    height: 80,
    width: 80,
    borderWidth: 1,
    borderColor: grey,
    resizeMode: 'contain',
})