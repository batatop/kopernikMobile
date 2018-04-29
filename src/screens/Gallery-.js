import React from 'react';
import { SafeAreaView,Button,Alert, View, Text, StatusBar, Image, AppRegistry, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import glamorous from "glamorous-native";
import { bColor, pDarkColor, hColor, hBarColor } from "../style/colors"

export default class Calendar extends React.Component {
    static navigationOptions = ({ screenProps, navigation }) => ({
        title: "Gallery",
        headerLeft: (
            <TouchableHighlight
                style={{ padding: 18 }}
                onPress={() => screenProps.rootNavigation.navigate("DrawerToggle")}
                underlayColor={hBarColor}
            >
                <Image source={require("../style/assets/menuIcon.png")} />
            </TouchableHighlight>
        ),
    });

    componentWillMount() {
        this.setState({     
            buttons: [],
        })
    }

    componentDidMount() {
        
        var parent = "http://kopernik.org/wp-content/gallery/"
        fetch(parent).then((resp) => { return resp.text() }).then((text) => {
            var href = text.match(/href="(.*?)"/g)
            var new_cat = [];
            var button = [];
            for (let i = 1; i < href.length - 1; i++) {
                new_cat.push(parent + href[i].substring(6, href[i].length - 1))
                if(!href[i].includes("cache")){
                    button.push(href[i].substring(6, href[i].length - 2))
                }
            }
            this.setState({
                buttons:button
                
            })
        });
    }
    toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
    imgButtons(){
        
        let self= this
        let array = this.state.buttons
        let listButton = array.map(function (name,i){
            var title=name.charAt(0).toUpperCase() + name.slice(1);
            
            title=title.replace(/-/g,' ');
            title=self.toTitleCase(title)
            return (
                <Button
                key={"butt"+i}
                color="#841584"
                onPress={() => self.props.navigation.navigate("GalleryImage", {cata: name,title:title})}
                title={title}
                />
            
                )})
                return listButton
    }
 
    render() {
        return (
            <Container>
                <StatusBar
                    backgroundColor={pDarkColor}
                    barStyle="light-content"
                />
                <Column>
                    {this.imgButtons()}
                    
                </Column>
            </Container>
        );
    }
}

const Container = glamorous.scrollView({
    flex: 1,
})

const Row = glamorous.view({
    flex: 1,
    flexDirection: 'row',
    backgroundColor: bColor,
})

const Column = glamorous.view({
    flex: 1,
    flexDirection: 'column',
    backgroundColor: bColor,
})

const ImageContainer = glamorous.touchableHighlight({
    flex: 1,
    backgroundColor: bColor,
    margin: 1,
})

const ListImage = glamorous.image({
    flex: 1,
    height: 120,
})
