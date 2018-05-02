import React from 'react';
import { TouchableHighlight, View, Text, Image, WebView } from 'react-native';
import glamorous from "glamorous-native";
import HTMLView from 'react-native-htmlview';
import FlexImage from 'react-native-flex-image';
import { bLightColor, tDarkColor, black, grey, tBlack, sColor, hColor } from "../style/colors"
import { screenPaddingHorSize, screenPaddingVerSize, postHeight, postImgHeight, textSize, postItemImgMarginSize, postItemContentPaddingSize } from "../style/sizes"

export default class PostItem extends React.Component {
    componentWillMount() {
        this.getTitle = this.getTitle.bind(this)
    }

    getTitle() {
        let title = "<p style='text-align: center;'" + this.props.title + "</p>"
        return this.props.title
    }

    render() {
        return (
            <ItemHighlight
                onPress={() => this.props.navigation.navigate("Post", { post: this.props.post })}
                underlayColor={hColor}
            >
                <ItemView>
                    <ItemIconSide>
                        <FlexImage
                            source={{
                                uri: this.props.post.img
                            }}

                            style={{
                                marginLeft: postItemImgMarginSize,
                            }}
                        />
                    </ItemIconSide>
                    <ItemContentSide>
                        <HTMLView
                            value={`<div>${this.props.post.title}</div>`}
                            stylesheet={{
                                div: {
                                    fontSize: textSize,                     
                                },
                                a: {
                                    color: sColor                          
                                }
                            }}
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
    minHeight: postHeight,
    marginLeft: screenPaddingHorSize,
    marginRight: screenPaddingHorSize,
    marginTop: screenPaddingVerSize,
    marginBottom: screenPaddingVerSize,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: black,
    shadowOpacity: 0.2,
    elevation: 5,
    backgroundColor: bLightColor
})

const ItemView = glamorous.view({
    flexDirection: "row",
    flex: 1,
})

const ItemIconSide = glamorous.view({
    flex: 0.25,
    justifyContent: "center",    
})

const ItemContentSide = glamorous.view({
    flex: 0.75,
    padding: postItemImgMarginSize,
    justifyContent: "center",
})