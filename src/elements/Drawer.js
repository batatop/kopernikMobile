import React from 'react';
import { SafeAreaView, View, ScrollView, Text } from 'react-native';
import glamorous from "glamorous-native"
import { NavigationActions } from 'react-navigation';

import DrawerItem from "./DrawerItem"
import { pColor } from '../style/colors';

export default class Drawer extends React.Component {
    render() {
        return (
            <Container>
                <ScrollView>
                    <DrawerItem
                        title="Kopernik"
                        routeName="Main"
                        navigation={this.props.navigation}
                        activeRoute={this.props.activeItemKey}
                    />
                    <DrawerItem
                        title="About"
                        routeName="About"
                        navigation={this.props.navigation}
                        activeRoute={this.props.activeItemKey}
                    />
                    <DrawerItem
                        title="Directions"
                        routeName="Directions"
                        navigation={this.props.navigation}
                        activeRoute={this.props.activeItemKey}
                    />
                    <DrawerItem
                        title="Contact Us"
                        routeName="ContactUs"
                        navigation={this.props.navigation}
                        activeRoute={this.props.activeItemKey}
                    />
                </ScrollView>
            </Container>
        );
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
    backgroundColor: pColor
})