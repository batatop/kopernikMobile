import React from 'react';
import { SafeAreaView, ActivityIndicator, View, ListView, Text, StatusBar, Image, AppRegistry, ScrollView, StyleSheet, TouchableHighlight, FlatList } from 'react-native';
import glamorous from "glamorous-native";
import {List, ListItem} from 'react-native-elements'
import { Calendar, Agenda } from 'react-native-calendars';
import { bColor, pColor } from "../style/colors"
import request from 'superagent'



export default class AppCalendar extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Calendar",
    });

    

   constructor(props) {
        super(props)
        this.state= {
            clonedMovies:[],
            isLoading:true,
            events:[]
        }
    }



    componentDidMount(){
        let postsUrl = "https://www.googleapis.com/calendar/v3/calendars/3phl0f0rmkj3st8ahuhhss19a0@group.calendar.google.com/events?key=AIzaSyBcugNSaHaIf7j5gYPFs524Aw8HnHsopJU"
        fetch(postsUrl)
            .then((response) => response.json())
            .then((response) => {
                var standartDataSource=new ListView.DataSource({rowHasChanged: (r1, r2)=>r1!== r2});
                this.setState({
                    isLoading:false,
                    events:standartDataSource.cloneWithRows(response)
                })

            })
    } 

    


    handleEvents() {
        var confirmedEvents=0
        var cancelledEvents=0

        let e=[]
        if (this.state.events!= 0) {
            for (let i = 0; i < this.state.events._dataBlob.s1.items.length; i++) {
                    if(this.state.events._dataBlob.s1.items[i].status=="confirmed"){
                        let newEvent = {}
                        newEvent.title = this.state.events._dataBlob.s1.items[i].summary
                        newEvent.location = this.state.events._dataBlob.s1.items[i].location
                        newEvent.start=this.state.events._dataBlob.s1.items[i].start.date || this.state.events._dataBlob.s1.items[i].start.dateTime 
                        newEvent.end=this.state.events._dataBlob.s1.items[i].end.date || this.state.events._dataBlob.s1.items[i].end.dateTime 
                        e.push(newEvent)
                        confirmedEvents++;
                    }
                    else{
                        cancelledEvents++;    
                    }
                                        
            }
            return e
        }
        else {
            return []
        }
        console.log('Confirmed events are',confirmedEvents)
        console.log('Cancelled events are',cancelledEvents)
        // // if(this.state.events.length != 0) {
        // //     return <Text>hdjsak</Text>
        // //     let ret = this.state.events.map((item, i) => {
        // //         return(<Text>{item.id}</Text>)
        // //     })
        // // }
    }

    render() {
        console.log(this.state.events)
         if(this.state.events.length!= 0){
              // console.log(typeof this.state.events._dataBlob.s1.items[0].end.date );
              //console.log('type is',typeof(this.state.events._dataBlob.s1.items[102].start.date));
              console.log(this.handleEvents())
            
         }
                 return(
                        <List>
                            <FlatList
                                data={this.handleEvents()}
                                renderItem={({item})=>(
                                    <ListItem
                                        roundAvatar
                                        title={item.title}
                                        subtitle={item.location}
                                        avatar={{}}
                                    />


                                )}
                            />
                        </List>                  

                )
       
    }


    
}



const Container = glamorous.safeAreaView({
    flex: 1,
})
