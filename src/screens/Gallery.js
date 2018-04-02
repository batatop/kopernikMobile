import React from 'react';
import { SafeAreaView, View, Text, StatusBar, Image, AppRegistry, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
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
                <Image source={require("../assets/menuIcon.png")} />
            </TouchableHighlight>
        ),
    });

    componentWillMount() {
        this.setState({
            images: [],
            loadingIndex: 0,
        })
    }

    componentDidMount() {
        var urls = "http://kopernik.org/wp-content/gallery/aurora/"
        var parent = "http://kopernik.org/wp-content/gallery/"
        fetch(parent).then((resp) => { return resp.text() }).then((text) => {
            var href = text.match(/href="(.*?)"/g)
            var new_cat = [];
            for (let i = 1; i < href.length - 1; i++) {
                new_cat.push(parent + href[i].substring(6, href[i].length - 1))
            }

            var new_url = [];
            for (let j = 0; j < new_cat.length; j++) {
                fetch(new_cat[j]).then((resp) => { return resp.text() })
                .then((text) => {//getLinks()
                    var href = text.match(/href="(.*?)"/g)

                    for (let i = 0; i < href.length; i++) {
                        if (href[i].contains("jpg"))
                            new_url.push(new_cat[j] + href[i].substring(6, href[i].length - 1))
                    }

                    this.setState({
                        images: new_url
                    })
                });
            }
        });
    }

    rowImages(images, rowIndex) {
        let self = this
        
        let rowImages = images.map(function (imgUrl, i) {
            return (
                <ImageContainer
                    key={"image_"+rowIndex+"."+i}
                    // onPress={() => self.props.navigation.navigate("GalleryImage")} // navigasyonu demo için kapadım
                    underlayColor={hColor}
                >
                    <ListImage source={{ uri: imgUrl }} />
                </ImageContainer>
            )
        });

        return rowImages
    }
    
    listImages() {
        let self = this
        let images = []

        let tmpImages = []
        // for (let i = 0; i < this.state.images.length; i++) {
        // şu anlık resimlerin hepsini yüklemesin diye i<20 yaptım
        // aslında this.state.images.length olması lazım
        for(let i = 1; i<20; i++) {
            // şu an bozuk, i%3 != 0'sa images'a eklemiyor
            if (i%3 == 0) {
                tmpImages.push(this.state.images[i-1])
                images.push(tmpImages)
                tmpImages = []
            }
            else {
                tmpImages.push(this.state.images[i-1])
            }
        }

        let listView = images.map(function (imgSubset, i) {
            return(
                <Row key={"row_"+i}>
                    {self.rowImages(imgSubset, i)}
                </Row>
            )
        });

        return listView;
    }

    render() {
        return (
            <Container>
                <StatusBar
                    backgroundColor={pDarkColor}
                    barStyle="light-content"
                />
                <Column>
                    {this.listImages()}
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

// style={{ margin: 15, flex: 1, flexDirection: 'row', justifyContent: 'flex-start', justifyContent: 'space-between', alignItems: 'stretch', flexWrap: 'wrap' }}
/*
    getLinks(url){
        fetch(url).then((resp)=>{ return resp.text() }).then((text)=>{ 
                 
                var href = text.match(/href="(.*?)"/g)
                var new_url=[];

                for(let i=0;i<href.length;i++){
                 if(href[i].contains("jpg"))   
                    new_url.push(url+href[i].substring(6,href[i].length-1))
                }
                for(let i=0;i<new_url.length;i++){
                        
                        console.log(new_url[i])
                    }
                
                 this.setState({
                    images: new_url
                })
            });
    }*/