import React from 'react';
import { SafeAreaView, View, ScrollView, Text } from 'react-native';
import glamorous from "glamorous-native"
import { NavigationActions } from 'react-navigation';

import GalleryDrawerItem from "./GalleryDrawerItem"
import { pColor } from '../style/colors';

export default class Drawer extends React.Component {
    async componentWillMount() {
        let activeRoute = "aurora"
        if(this.props.navigation.state.routes[0].params != undefined) {
            activeRoute = this.props.navigation.state.routes[0].params.currentRoute
        }

        this.setState({
            groups: [],
            activeRoute: activeRoute
        })

        var parent = "http://kopernik.org/wp-content/gallery/"
        let groups = await fetch(parent).then((resp) => { return resp.text() }).then((text) => {
            var href = text.match(/href="(.*?)"/g)
            var new_cat = [];
            var button = [];
            for (let i = 1; i < href.length - 1; i++) {
                new_cat.push(parent + href[i].substring(6, href[i].length - 1))
                if (!href[i].includes("cache")) {
                    button.push(href[i].substring(6, href[i].length - 2))
                }
            }
            return button
        });
        
        if(this.refs.galleryDrawer) {
            this.setState({
                groups: groups
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            activeRoute: nextProps.navigation.state.routes[0].params.currentGroup
        })
    }

    mapItems() {
        let self = this
        let groupItems = this.state.groups.map(function(group, i) {
            return (
                <GalleryDrawerItem
                    key={"group_" + i}
                    title={group}
                    routeName="Gallery"
                    navigation={self.props.navigation}
                    activeRoute={self.state.activeRoute}
                />
            )
        });
        return groupItems
    }
    
    render() {
        return (
            <Container ref='galleryDrawer'>
                <ScrollView>
                    {this.mapItems()}
                </ScrollView>
            </Container>
        );
    }
}

const Container = glamorous.safeAreaView({
    flex: 1,
    backgroundColor: pColor
})