import React from 'react';
import { SafeAreaView, Text, Image, ScrollView, Dimensions, StatusBar } from 'react-native';
import glamorous from "glamorous-native";
import HTMLView from 'react-native-htmlview';
import { bColor, pColor, sColor, pDarkColor, black, white } from "../style/colors"
import { titleSize, textSize, postImgHeight, screenPaddingVerSize, screenPaddingHorSize, generalPaddingSize } from "../style/sizes"

import PostItem from "../elements/PostItem"

export default class Post extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Post", 
    });

    render() {
        return (
            <Container>
                <StatusBar
                    backgroundColor={pDarkColor}
                    barStyle="light-content"
                />
                <PostScrollView>
                    <HTMLView
                        value={`<div>${this.props.navigation.state.params.post.title}</div>`}
                        stylesheet={{ 
                            div: {
                                fontSize: titleSize,
                                padding: generalPaddingSize
                            },
                            a: {
                                color: sColor
                            }
                        }}
                    />
                    <PostImageContainer>
                        <PostImage source={{ uri: this.props.navigation.state.params.post.img }} />
                    </PostImageContainer>
                    <HTMLView
                        value={`<div>${this.props.navigation.state.params.post.content}</div>`}
                        stylesheet={{
                            div: {
                                fontSize: textSize,
                                paddingBottom: generalPaddingSize,
                                paddingLeft: generalPaddingSize,
                                paddingRight: generalPaddingSize
                            },
                            a: {
                                color: sColor
                            }
                        }}
                    />
                </PostScrollView>
            </Container>
        );
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
    backgroundColor: bColor
})

const PostScrollView = glamorous.scrollView({
    flex: 1,
    marginLeft: screenPaddingHorSize,
    marginRight: screenPaddingHorSize,
    marginTop: screenPaddingVerSize,
    marginBottom: screenPaddingVerSize,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: black,
    shadowOpacity: 0.2,
    elevation: 5,
    backgroundColor: white,
})

const PostImageContainer = glamorous.view({
    paddingBottom: generalPaddingSize,
    paddingLeft: generalPaddingSize,
    paddingRight: generalPaddingSize
})

const PostImage = glamorous.image({
    flex: 1,
    height: postImgHeight,
    resizeMode: 'contain'
})