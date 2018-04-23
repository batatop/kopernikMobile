import React from 'react';
import { SafeAreaView, ActivityIndicator, View, ListView, Text, StatusBar, Image, AppRegistry, ScrollView, StyleSheet, TouchableHighlight, FlatList } from 'react-native';
import glamorous from "glamorous-native";
import {List, ListItem} from 'react-native-elements'
import { Calendar, Agenda } from 'react-native-calendars';
import { bColor, pColor } from "../style/colors"
import request from 'superagent'



var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1; //January is 0!
var year = today.getFullYear();

if(day<10) {
    day = '0'+day
} 

if(month<10) {
    month = '0'+month
} 

today = year+'-'+month+'-'+day; 
postsl="https://www.googleapis.com/calendar/v3/calendars/3phl0f0rmkj3st8ahuhhss19a0@group.calendar.google.com/events?key=AIzaSyBcugNSaHaIf7j5gYPFs524Aw8HnHsopJU&singleEvents=true&orderBy=startTime&timeMin=" + year + "-"+ month+ "-" + day + "T00:00:00Z&timeMax="+year+2+"-"+"01-01T00:00:00Z"

export default class AppCalendar extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Calendar",
    });

    

   constructor(props) {
        super(props)
        this.state= {
            isLoading:true,
            events:[],
            items:[]
        }
    }



    componentDidMount(){
        let postsUrl = "https://www.googleapis.com/calendar/v3/calendars/3phl0f0rmkj3st8ahuhhss19a0@group.calendar.google.com/events?key=AIzaSyBcugNSaHaIf7j5gYPFs524Aw8HnHsopJU&singleEvents=true&orderBy=startTime&timeMin=" + year + "-"+ month+ "-" + day + "T00:00:00Z&timeMax="+year+2+"-"+"01-01T00:00:00Z"
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
                        var start=this.state.events._dataBlob.s1.items[i].start.date || this.state.events._dataBlob.s1.items[i].start.dateTime 
                        var splitData=start.split('-')
                        var splitforDay=splitData[2].split(':')
                        var splitYear=splitData[0]
                        var splitMonth=splitData[1]
                        var splitDay=splitforDay[0][0]+splitforDay[0][1]
                        start=splitYear+'-'+splitMonth+'-'+splitDay
                        newEvent.start=start
                        var exactDayd=splitData[2]
                        var exactDay=exactDayd[3]+exactDayd[4]+exactDayd[5]+exactDayd[6]+exactDayd[7]
                        newEvent.hour=exactDay
                        var end=this.state.events._dataBlob.s1.items[i].end.date || this.state.events._dataBlob.s1.items[i].end.dateTime
                        splitData=end.split('-')
                        splitforDay=splitData[2].split(':')
                        splitYear=splitData[0]
                        splitMonth=splitData[1]
                        splitDay=splitforDay[0][0]+splitforDay[0][1]
                        end=splitYear+'-'+splitMonth+'-'+splitDay
                        newEvent.end=end
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
        console.log('Today is ', today)
         if(this.state.events.length!= 0){
             var splitData= this.state.events._dataBlob.s1.items[3].start.dateTime
            //  var splitData2= this.state.events._dataBlob.s1.items[4].start.dateTime
            //  var splitData3= this.state.events._dataBlob.s1.items[5].start.dateTime
            //  console.log('blablalblb',splitData)
            //  console.log('2',splitData2)
            //  console.log('3',splitData3)
            var splitDay=splitData.split('-')
            var deneme=splitDay[2]
            console.log(deneme)
            console.log(deneme[3]+deneme[4]+deneme[5]+deneme[6]+deneme[7])
            //console.log('data',splitDay[2])

            var day=splitDay[0][0]+splitDay[0][1]

            // console.log('splitted data',this.state.events._dataBlob.s1.items[4])
            // console.log('splitted year',splitData[0]);
            // console.log('splitted month ',splitData[1])
            // console.log('splitted day',day)
              //console.log('type is',typeof(this.state.events._dataBlob..items[102].start.date));
              //console.log(this.handleEvents())
            
         }
         return(
                <Agenda
                    items={this.state.items}
                    loadItemsForMonth={this.loadItems.bind(this)}
                    selected={today}
                    renderItem={this.renderItem.bind(this)}
                    renderEmptyDate={this.renderEmptyDate.bind(this)}
                    rowHasChanged={this.rowHasChanged.bind(this)}
                    // markingType={'period'}
                    // markedDates={{
                    //    '2017-05-08': {textColor: '#666'},
                    //    '2017-05-09': {textColor: '#666'},
                    //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
                    //    '2017-05-21': {startingDay: true, color: 'blue'},
                    //    '2017-05-22': {endingDay: true, color: 'gray'},
                    //    '2017-05-24': {startingDay: true, color: 'gray'},
                    //    '2017-05-25': {color: 'gray'},
                    //    '2017-05-26': {endingDay: true, color: 'gray'}}}
                     // monthFormat={'yyyy'}
                     // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
                    //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
                 />
        )
                //  return(
                //         <List>
                //             <FlatList
                //                 data={this.handleEvents()}
                //                 renderItem={({item})=>(
                //                     <ListItem
                //                         roundAvatar
                //                         title={item.title}
                //                         subtitle={item.location}
                //                         avatar={{}}
                //                     />


                //                 )}
                //             />
                //         </List>                  

                // )
       
    }

      loadItems(day) {
        if(this.state.events.length!=0){
            data=this.handleEvents()
            setTimeout(() => {
              for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                  this.state.items[strTime] = [];
                  const numItems = data.length;
                  for (let j = 0; j < numItems; j++) {
                    if(data[j].start==strTime){
                        this.state.items[strTime].push({
                          name: data[j].title + " " + data[j].hour,
                          height: Math.max(50, Math.floor(Math.random() * 150))
                        });
                      }
                      else{
                        //console.log('zaman',strTime)
                      }
                  }  
                }
              }
              //console.log(this.state.items);
              const newItems = {};
              Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
              this.setState({
                items: newItems
              });
            }, 1000);

      }
        // console.log(`Load Items for ${day.year}-${day.month}`);
    }

      renderItem(item) {
        return (
          <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
        );
      }

      renderEmptyDate() {
        return (
          <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
        );
      }

      rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
      }

      timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
      }


    
}



const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});
