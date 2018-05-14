# Kopernik Mobile

Mobile application of Kopernik Observatory & Science Center. It's made with
[React Native].

## Installation

Make sure you have [Node.js] and [npm]. You can download them through [here]. You can check if you have them by:
```
node -v
npm -v
```

You also need the react-native-cli. You can install it globally by:
```
npm install -g react-native-cli
```

Now you can download the repository:
```
git clone https://github.com/batatop/kopernikMobile.git
cd kopernikMobile
npm install
```

After you install the dependencies, go to ```/node_modules/glamorous-native/src```
inside the project folder. Find ```react-native-elements.js``` and change the 
file with the following:
```
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
```

[React Native]:https://github.com/facebook/react-native
[Node.js]:https://nodejs.org/en/
[npm]:https://www.npmjs.com/
[here]:https://nodejs.org/en/download/

## To Build

### Android

  - You can download the APK here: 'https://drive.google.com/open?id=1UASd0IqUiGveDR_tdGUPN4Mdq5IcLqVI'. When you download it, you can click on it to install.

### iOS

  - Open ```/ios/kopernikMobile.xcworkspace``` inside your project folder.
  - On the left side, you should see 'kopernikMobile' and 'Pods'. Click 'kopernikMobile'. Then go to 'General' tab in the middle. In the signg tab, add your development account. In our case team should be 'Kopernik Soc...'.
  - When XCode is opened, go to Product > Scheme > Edit Scheme. You can find it on the top bar. When the window pops up, click 'Run' tab on the left side. Make 'Build Configuration', 'Release'. Then click 'Close'.
  - Plug your phone. On the top side, you should see a box that says: kopernikMobile > [Device Name]. Change [Device Name] with your phone's name.
  - Build the program with the arrow on the top side.
  
More info: 'https://facebook.github.io/react-native/docs/getting-started.html'. Click 'Building with Native Code' tab before reading. 

## Troubleshooting

- When you run ```react-native run-android```, if packager won't start and it keeps on loading forever:
  1. Go to your project directory.
  2. ```mkdir android/app/src/main/assets```
  3. ```react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res```
  4. Then run the program regularly by ```react-native run-android```
- If you get an error while installing the application, delete the old one if you have installed it before.
- "Failed to delete/create: C:...": Build the application again.
