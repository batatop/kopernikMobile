import React from 'react';
import { TouchableHighlight, Text, View} from 'react-native';
import { NavigationActions } from 'react-navigation';
import glamorous from "glamorous-native"
import { pLightColor, tLightColor, sColor, white, hBarColor } from "../style/colors"

export default class DrawerItem extends React.Component {
    navigateToScreen(route) {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        if (this.props.routeName == this.props.activeRoute) {
            return (
                <View style={{flexDirection:"row"}}>
                    <SelectedItem />
                    <ItemContainer
                        onPress={this.navigateToScreen.bind(this, this.props.routeName)}
                        underlayColor={hBarColor}
                        style={{
                            backgroundColor: pLightColor
                        }}
                    >
                        <SelectedTitle>{this.props.title}</SelectedTitle>
                    </ItemContainer>
                </View>
            )
        }
        else {
            return (
                <ItemContainer
                    style={{ flexDirection: "row" }}
                    onPress={this.navigateToScreen.bind(this, this.props.routeName)}
                    underlayColor={hBarColor}
                >
                    <View style={{width: "100%"}}>
                        <NotSelectedTitle>{this.props.title}</NotSelectedTitle>
                    </View>
                </ItemContainer>
            )
        }
    }
}

const ItemContainer = glamorous.touchableHighlight({
    borderBottomColor: pLightColor,
    padding: 18,
    width: "100%"
})

const SelectedTitle = glamorous.text({
    fontSize: 15,
    color: white,
    fontWeight: "bold"
})

const NotSelectedTitle = glamorous.text({
    fontSize: 15,
    color: tLightColor,
    fontWeight: "bold",
    marginLeft: 10
})

const SelectedItem = glamorous.text({
    width: 10,
    backgroundColor: sColor
})