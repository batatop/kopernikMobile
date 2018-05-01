import React from 'react';
import { SafeAreaView, ActivityIndicator, View, ListView, Text, StatusBar, Image, AppRegistry, ScrollView, StyleSheet, TouchableHighlight, FlatList } from 'react-native';
import glamorous from "glamorous-native";
import { Calendar, Agenda } from 'react-native-calendars';
import { pColor, pLightColor, sColor, hBarColor, white, bColor } from "../style/colors"
import { textColor } from 'react-native-calendars/src/style';
import { generalPaddingSize, screenPaddingHorSize, screenPaddingVerSize } from "../style/sizes"

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
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "Calendar",
        headerLeft: (
            <TouchableHighlight
                style={{ padding: generalPaddingSize }}
                onPress={() => screenProps.rootNavigation.navigate("DrawerToggle")}
                underlayColor={hBarColor}
            >
                <Image source={require("../style/assets/menuIcon.png")} />
            </TouchableHighlight>
        ),
    });

    

   constructor(props) {
        super(props)
        this.state= {
            isLoading:true,
            events:[],
            items:{}
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
    }

    render() {
        return (
            <Agenda
                items={this.state.items}
                loadItemsForMonth={this.loadItems.bind(this)}
                selected={today}
                renderItem={this.renderItem.bind(this)}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                renderDay={this.renderDay.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
                theme={{
                    backgroundColor: bColor,
                    calendarBackground: white,
                    selectedDayBackgroundColor: pColor,
                    todayTextColor: sColor,
                    agendaKnobColor: pColor,
                    agendaTodayColor: sColor,
                    dotColor: pColor,
                }}
            />
        )
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
                            if (data[j].start == strTime) {
                                this.state.items[strTime].push({
                                    name: data[j].hour + " - " + data[j].title,
                                });
                            }
                        }
                    }
                }
              
              const newItems = {};
              Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
              this.setState({
                items: newItems
              });
            }, 1000);

      }
       
    }

      renderItem(item) {
        return (
          <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
        );
      }

      renderEmptyDate() {
        return (
          <View style={styles.emptyDate}><Text> </Text></View>
        );
      }

    renderDay(day, item) {
        return (
            <View style={styles.day}>
                <Text>{day.day}</Text>
                <Text>{mapDays(day.month)}</Text>
            </View>
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

function mapDays(month) {
    if(month == 1) {
        return "Jan"
    }
    else if (month == 2) {
        return "Feb"
    }
    else if (month == 3) {
        return "Mar"
    }
    else if (month == 4) {
        return "Apr"
    }
    else if (month == 5) {
        return "May"
    }
    else if (month == 6) {
        return "Jun"
    }
    else if (month == 7) {
        return "Jul"
    }
    else if (month == 8) {
        return "Aug"
    }
    else if (month == 9) {
        return "Sep"
    }
    else if (month == 10) {
        return "Oct"
    }
    else if (month == 11) {
        return "Nov"
    }
    else if (month == 12) {
        return "Dec"
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: white,
        borderRadius: 5,
        paddingLeft: screenPaddingHorSize,
        paddingRight: screenPaddingHorSize,
        paddingTop: screenPaddingVerSize,
        paddingBottom: screenPaddingVerSize,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        flex: 1,
        height: 15,
        paddingTop: 30
    },
    day: {
        flex: 0.11,
        paddingLeft: screenPaddingHorSize,
        paddingRight: screenPaddingHorSize,
        paddingTop: screenPaddingVerSize,
        paddingBottom: screenPaddingVerSize,
        marginTop: 17,
        justifyContent: 'center',
    }
});
