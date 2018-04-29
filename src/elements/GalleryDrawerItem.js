import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import glamorous from "glamorous-native"
import { pLightColor, tLightColor, sColor, white, hBarColor } from "../style/colors"
import { textSize, generalPaddingSize, drawerBulletWidth } from "../style/sizes"

export default class GalleryDrawerItem extends React.Component {    
    navigateToScreen(route, group) {
        const navigateAction = NavigationActions.navigate({
            routeName: route,
            params: {
                currentGroup: group
            }
        });
        this.props.navigation.dispatch(navigateAction);
    }

    makeTitle(group) {
        let title = group.charAt(0).toUpperCase() + group.slice(1);
        title = title.replace(/-/g, ' ');
        title = title.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        return title
    }

    render() {
        if (this.props.title == this.props.activeRoute) {
            return (
                <View style={{ flexDirection: "row" }}>
                    <ItemContainer
                        onPress={this.navigateToScreen.bind(this, this.props.routeName, this.props.title)}
                        underlayColor={hBarColor}
                        style={{
                            backgroundColor: pLightColor
                        }}
                    >
                        <SelectedTitle>{this.makeTitle(this.props.title)}</SelectedTitle>
                    </ItemContainer>
                    <SelectedItem/>
                </View>
            )
        }
        else {
            return (
                <ItemContainer
                    style={{ flexDirection: "row" }}
                    onPress={this.navigateToScreen.bind(this, this.props.routeName, this.props.title)}
                    underlayColor={hBarColor}
                >
                    <View style={{ width: "100%" }}>
                        <NotSelectedTitle>{this.makeTitle(this.props.title)}</NotSelectedTitle>
                    </View>
                </ItemContainer>
            )
        }
    }
}

const ItemContainer = glamorous.touchableHighlight({
    flex: 1,
    borderBottomColor: pLightColor,
    padding: generalPaddingSize,
})

const SelectedTitle = glamorous.text({
    fontSize: textSize,
    color: white,
    fontWeight: "bold"
})

const NotSelectedTitle = glamorous.text({
    fontSize: textSize,
    color: tLightColor,
    fontWeight: "bold"
})

const SelectedItem = glamorous.text({
    width: drawerBulletWidth,
    backgroundColor: sColor
})