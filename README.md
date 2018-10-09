# react-native-style-adaptive
A compatible plugin that helps you quickly develop styles

## Installing ##
`npm install react-native-style-adaptive --save`

## API ##

### initSize(size: Number) ###
Set the design size, default 750px

#### pixelRatio() ####
Get the current device pixel density

#### deviceWidth() ####
Get the current width of the device

#### deviceHeight() ####
Get the current height of the device

### dp2px(dp: Number) ###
Convert dp to px

### px2dp(px: Number) ###
Convert px to dp

### isIPhoneX() ###
Determine if it is an iphonex device

### ifIPhoneX(iphoneXStyle, iosStyle, androidStyle) ###
Custom style for different models of ios iphonex android

### isHorizontal() ###
Determine if the current device is in the horizontal screen state

### ifHorizontal(horizontalStyle, verticalStyle) ###
Customize the style according to the orientation of the device screen

### getStatusBarHeight(safe) ###
Get the current device statusBar height

### getBottomSpace() ###
Get the safe height at the bottom of the device

### SafeAreaView ###
Compatible component SafeAreaView


```js
// in style.js

import { StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
    header:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding:10,
        height: 60,
        backgroundColor: 'transparent',
        ...ifIphoneX({
            paddingTop: 50
        }, {
            paddingTop: 20
        })
    },
});
```

### isIphoneX() ###

**returns** - `true` if you running on an iPhone X.

#### Example ####
```js
import { isIphoneX } from 'react-native-iphone-x-helper'

// ...

if (isIphoneX()) {
    // do this...
} else {
    // do that...
}
```

### getStatusBarHeight([safe]) ###

#### Parameters ####
**safe** - whether you want for get safe area height or not

**returns** - the height of the status bar: `44` for safe iPhoneX, `30` for unsafe iPhoneX, `20` for other iOS devices and `StatusBar.currentHeight` for Android.

#### Example ####

```js
// in style.js

import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
    header:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding:10,
        height: 60,
        backgroundColor: 'transparent',
        paddingTop: getStatusBarHeight()
    },
});
```

***NOTE:*** If your using the the unsafe statusbar height, make sure to add 14dp of padding to your content, otherwise it's going to be flush against the notch

### getBottomSpace ###

**returns** - the height of the bottom to fit the safe area: `34` for iPhone X and `0` for other devices.

#### Example ####

```js
// in style.js

import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
    totalview: {
        flex: 1,
        backgroundColor: 'transparent',
        marginBottom: getBottomSpace()
    },
});
```

## Licence ##
**MIT**
