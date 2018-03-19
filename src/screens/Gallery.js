import React from 'react';
import { SafeAreaView, Text, StatusBar, Image, AppRegistry, ScrollView, StyleSheet } from 'react-native';
import glamorous from "glamorous-native";
import { backgroundColor, pDarkColor } from "../style/colors"

export default class Calendar extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Gallery",
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

        this.setState({
            images: []
        })
    }
    
    listImages() {
        let index = this.state.loadingIndex

        let bufferImages = this.state.images.filter((imgUrl) => {
            if (index <= this.state.loadingIndex + 15) {
                index++
                return true
            }
            else {
                return false
            }
        });

        let listView = bufferImages.map(function (imgUrl, i) {
            return <ListImage key={'image_' + i} source={{ uri: imgUrl }} />
        });

        return listView;
    }

    render() {
        return (
            <Container>
                <ScrollContainer>
                    <StatusBar
                        backgroundColor={pDarkColor}
                        barStyle="light-content"
                    />

                    {this.listImages()}

                </ScrollContainer>
            </Container>
        );
    }
}

const Container = glamorous.scrollView({
    flex: 1,
})

const ScrollContainer = glamorous.safeAreaView({
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    backgroundColor: backgroundColor,
})

const ListImage = glamorous.image({
    height: 120,
    width: 120,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 3,
    marginBottom: 3,
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