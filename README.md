# Kopernik Mobile

Mobile application of Kopernik Observatory & Science Center. It's made with
[React Native].

## Installation

'''
git clone https://github.com/batatop/kopernikMobile.git
cd kopernikMobile
npm install
'''

After you install the dependencies, go to node_modules/glamorous-native/src 
folder. Find react-native-elements.js and change the file with the following:
'''
import {
  FlatList,
  Image,
  ListView,
  ScrollView,
  SectionList,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ImageBackground,
  SafeAreaView,
  WebView,
} from 'react-native'

export const ReactNativeElementMap = {
  Image,
  ListView,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
}

// Gracefully append new components that may not be supported
// in earlier React Native versions
if (FlatList) {
  ReactNativeElementMap.FlatList = FlatList
}

if (SectionList) {
  ReactNativeElementMap.SectionList = SectionList
}

if (ImageBackground) {
  ReactNativeElementMap.ImageBackground = ImageBackground
}

if (SafeAreaView) {
  ReactNativeElementMap.SafeAreaView = SafeAreaView
}

if (WebView) {
  ReactNativeElementMap.WebView = WebView
}

export default Object.keys(ReactNativeElementMap)
'''

[React Native]:https://github.com/facebook/react-native