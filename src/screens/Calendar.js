import React from 'react';
import { SafeAreaView, Text, StatusBar, Image, AppRegistry, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import glamorous from "glamorous-native";
import { Calendar, Agenda } from 'react-native-calendars';
import { bColor, pColor, pLightColor, pDarkColor } from "../style/colors"

export default class AppCalendar extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Gallery",
    });

    componentWillMount() {
        let calendar = "https://www.googleapis.com/calendar/v3/calendars/3phl0f0rmkj3st8ahuhhss19a0@group.calendar.google.com/events?key=AIzaSyBcugNSaHaIf7j5gYPFs524Aw8HnHsopJU"
        fetch(calendar)
        .then((res) => {
            console.log(res)
        })
    }

    render() {
        return (
            <Container>
                <StatusBar
                    backgroundColor={pDarkColor}
                    barStyle="light-content"
                />
                <Agenda
                    style={{height: "100%"}}
                    theme={{
                        selectedDayBackgroundColor: pColor,
                        todayTextColor: pLightColor,
                        agendaKnobColor: pColor
                    }}
                />
            </Container>
        );
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
})