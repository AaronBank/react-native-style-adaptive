# react-native-style-adaptive
A library to help you design your react-native app for the iPhone X, XS, XS Max & XR

## Installing ##
`npm install react-native-style-adaptive --save`

## API ##

### initSize(size: Number) ###
设置设计图尺寸，默认750px

#### pixelRatio ####
获取当前设备像素密度

#### deviceWidth ####
获取当前设备真实宽度

#### deviceHeight ####
获取当前设备真实高度

### dp2px(dp: Number) ###
将dp转化为px

### px2dp(px: Number) ###
将px转化为dp

### isIPhoneX() ###
判断是否为iphonex设备

### ifIPhoneX() ###
为ios iphonex android单独定制样式

### isHorizontal() ###
判断是被是否为横屏

### ifHorizontal() ###
根据设备屏幕方向单独定制样式

### getStatusBarHeight() ###
获取当前设备statusBar高度

### getBottomSpace() ###
获取设备底部安全高度

### SafeAreaView ###
兼容组件SafeAreaView


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
