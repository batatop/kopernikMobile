import React from 'react';
import { View, Text, StatusBar,Image,AppRegistry,ScrollView,StyleSheet } from 'react-native';
import { pDarkColor } from "../style/colors"

class Gallery extends React.Component {
    // state={
    //     images: null
    //     }
    static navigationOptions = ({ navigation }) => ({
        title: "Gallery", 
    });
    componentWillMount() {

         this.setState({
                    images: []
                })
    }
    componentDidMount() {
        console.log("dasasdasd")
         
        var urls="http://kopernik.org/wp-content/gallery/aurora/"
        var parent="http://kopernik.org/wp-content/gallery/"
        fetch(parent).then((resp)=>{ return resp.text() }).then((text)=>{
            console.log(text);
             var href = text.match(/href="(.*?)"/g)
             var new_cat=[];
             for(let i=1;i<href.length-1;i++){
                new_cat.push(parent+href[i].substring(6,href[i].length-1))
            }
            
            var new_url=[];
            for(let j=0;j<new_cat.length;j++){
                console.log(new_cat[j])
            fetch(new_cat[j]).then((resp)=>{ return resp.text() }).then((text)=>{//getLinks() 
                 
                var href = text.match(/href="(.*?)"/g)
                

                for(let i=0;i<href.length;i++){
                 if(href[i].contains("jpg"))   
                    new_url.push(new_cat[j]+href[i].substring(6,href[i].length-1))
                }
                for(let i=0;i<new_url.length;i++){
                        
                        console.log(new_url[i])
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
    }/*
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
    listImages() {
        var listView = this.state.images.map(function(imgUrl, i) {
            return <Image key={'image_'+i} source={{ uri: imgUrl }} style={{width: 120, height: 120}} />
        });
        return listView;
    }

    render() {
        
        
        return(
            <ScrollView>
            <View style={{margin:15,flex: 1,flexDirection:'row',justifyContent:'flex-start',justifyContent:'space-between',alignItems:'stretch',flexWrap:'wrap'}}>
                <StatusBar
                    backgroundColor={pDarkColor}
                    barStyle="light-content"
                />
                
                {this.listImages()}
                
            </View>
            </ScrollView>
        );
    }
}

export default () => <Gallery />;