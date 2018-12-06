

# react-native-style-adaptive

[Chinese](https://github.com/AaronBank/react-native-style-adapter/blob/master/README.ZH.md) | [English](https://github.com/AaronBank/react-native-style-adapter/blob/master/README.md)

![](https://img.shields.io/badge/licence-MIT-%2332CD32.svg) ![](https://img.shields.io/badge/npm-6.4.1-%2332CD32.svg) ![](https://img.shields.io/badge/react--native-%3E%3D0.42.0-%234169E1.svg)

A tool library that helps you quickly adapt to different device styles for IOS and Android.

Some convenient adaptation tool methods have been implemented. And compatibility processing of the RN low version SafeAreaView component

## Installing ##
`npm install react-native-style-adaptive --save`

## API ##

### initSize(size: Number) ###
> Set the design size

**Parameters**

size - Design draft size to be set (without units), default 750px size

**Example**

```javascript
import { initSize } from 'react-native-style-adaptive'

// Set the design draft for iphone5
initSize(640)

```

**returns** - Return? The size of the design draft after setting is generally useless.

---

### px2dp(px: Number) ###
> Convert px to dp

**Parameters**

px - The px value to be calculated (without units)

**Example**

```javascript
import { px2dp } from 'react-native-style-adaptive'

// Pass in the current ?px value and return the calculated dp value
console.log(px2dp(750)) //=> 375

```
**returns** - Returns the value of the calculated dp

---

### dp2px(dp: Number) ###
> Convert dp to px

**Parameters**

dp - The dp value to be calculated (without units)

**Example**

```javascript
import { dp2px } from 'react-native-style-adaptive'

// Pass in the current ?dp value and return the calculated px value
console.log(dp2px(375)) //=> 750

```
**returns** - Returns the value of px after calculation

---

### pixelRatio ###
> Read only: Get the current device pixel density

**Example**

```javascript

import { pixelRatio } from 'react-native-style-adaptive'

// Take iphone6 as an example
console.log(pixelRatio) //=> 2

```
**returns** - Returns the current device pixel density value

---

### originalWidth ###
> Read only: Get the width of the current device? in portrait mode, regardless of whether the screen is rotated or not

**Example**

```javascript
import { originalWidth } from 'react-native-style-adaptive'

// Take iphone6 as an example
console.log(originalWidth) //=> 375

```
**returns** - Returns the width of the current device in portrait mode, regardless of whether the screen is rotated or not

---

### originalHeight ###
> Read only: Get the height of the current device? in portrait mode, regardless of whether the screen is rotated or not

**Example**

```javascript
import { originalHeight } from 'react-native-style-adaptive'

// Take iphone6 as an example
console.log(originalHeight) //=> 667

```
**returns** - Returns the height of the current device in portrait mode, regardless of whether the screen is rotated or not

---

### deviceWidth() ###
> Get the current device width, related to whether the screen is rotated

**Example**

```javascript
import { deviceWidth } from 'react-native-style-adaptive'

// Take iphone6 as an example
console.log(deviceWidth()) //=> 375

```
**returns** - Returns the current width value of the device, whether relating to rotation of the screen, the return value of the landscape? Height of the apparatus

---

### deviceHeight() ###
> Get the current device height, related to whether the screen is rotated

**Example**

```javascript
import { deviceHeight } from 'react-native-style-adaptive'

// Take iphone6 as an example
console.log(deviceHeight()) //=> 667

```
**returns** - Returns the current equipment, whether relating to rotation of the screen, the return value of the landscape? Device width

---

### isIos ###
> Read only: Determine if it is an Ios device

**Example**

```javascript
import { isIos } from 'react-native-style-adaptive'

// Assume that the current device is an iphone device.
console.log(isIos) //=> true

```
**returns** - Return the judgment result, the Ios device returns true, the other returns false

---

### isAndroid ###
> Read only: Determine if it is an Android device

**Example**

```javascript
import { isAndroid } from 'react-native-style-adaptive'

// Assume that the current device is an iphone device.
console.log(isAndroid) //=> false

```
**returns** - Return the judgment result, the Android device returns true, the other returns false

---

### isPad ###
> Read only: Determine if it is an iPad device

**Example**

```javascript
import { isPad } from 'react-native-style-adaptive'

// Assume that the current device is an iphone6 device.
console.log(isPad) //=> false

```
**returns** - Return the judgment result, the iPad device returns true, the other returns false

---

### isTVOS ###
> Read only: Determine if it is an TVOS device

**Example**

```javascript
import { isTVOS } from 'react-native-style-adaptive'

// Assume that the current device is an iphone6 device.
console.log(isTVOS) //=> false

```
**returns** - Return the judgment result, the TVOS device returns true, the other returns false

---

### Version ###
> Read only: Detect the version of the currently running Android platform

**Example**

```javascript
import { Version } from 'react-native-style-adaptive'

console.log(Version) //=> 21

```
**returns** - Returns the version of the currently running Android platform

---

### isIPhoneX ###
> Read only: Determine if it is an iphonex device

**Example**

```javascript
import { isIPhoneX } from 'react-native-style-adaptive'

// Assume that the current device is an iphone6 device.
console.log(isIPhoneX) //=> false

```
**returns** - Return the judgment result, the iphonex device returns true, the other returns false

---

### ifIPhoneX(iphoneXOptions, [iosOptions], [androidOptions]) ###
> Customize styles for ios iphonex android, accept any type of parameters, including functions

**Parameters**

iphoneXOptions - When the device is `iphonex`, the parameter can be a function type.
iosOptions - When the device is not the style of `iphonex`'s ʻios` device, the parameter can be a function type
androidOptions - When the device is in the style of `android`, the parameter can be a function type.

**Example**

- Object formal parameter

```javascript
import { StyleSheet } from 'react-native'
import { ifIPhoneX } from 'react-native-style-adaptive'

...

const styles = StyleSheet.create({
    container: {
        fontSize: 14
    },
    ...ifIPhoneX({
        backgroundColor: 'violet'
    }, {
        backgroundColor: 'brown'
    }, {
        backgroundColor: 'pink'
    })
})

```

- Function formal parameter

```javascript
import { StyleSheet } from 'react-native'
import { ifIPhoneX } from 'react-native-style-adaptive'

...

const styles = StyleSheet.create({
    container: {
        fontSize: 14
    },
    ...ifIPhoneX(() => {
        return { backgroundColor: 'violet' }
    }, () => {
        if (Math.random() >= 0.5) {
            return { backgroundColor: 'brown' }
        } else {
            return { backgroundColor: 'red' }
        }
    })
})

```
**returns** - Returns the result of the hit, the object form returns `Object`, and the function form returns the value after `return`

---

### isHorizontal() ###
> Determine whether it is horizontal or not

**Example**

```javascript
import { isHorizontal } from 'react-native-style-adaptive'

// Assume that the current device orientation is vertical
console.log(isIPhoneX()) //=> false

```
**returns** - Returns the result of the judgment, the device returns true when the screen is horizontal, and the other returns false

---

### ifHorizontal(horizontalOptions, [verticalOptions]) ###
> Customize styles based on device screen orientation, accepting any type of parameters, including functions

**Parameters**

horizontalOptions - When the device is in landscape mode, the parameter can be a function type.
verticalOptions - When the device is in portrait mode, the parameter can be a function type.

**Example**

- Object formal parameter

```javascript
import { StyleSheet } from 'react-native'
import { ifHorizontal } from 'react-native-style-adaptive'

...

const styles = StyleSheet.create({
    container: {
        fontSize: 14
    },
    ...ifHorizontal({
        backgroundColor: 'blue'
    }, {
        backgroundColor: 'violet'
    })
})

```

- Function formal parameter

```javascript
import { StyleSheet } from 'react-native'
import { ifHorizontal } from 'react-native-style-adaptive'

...

const styles = StyleSheet.create({
    container: {
        fontSize: 14
    },
    ...ifHorizontal(() => {
        return { backgroundColor: 'violet' }
    }, () => {
        if (Math.random() >= 0.5) {
            return { backgroundColor: 'brown' }
        } else {
            return { backgroundColor: 'red' }
        }
    })
})

```
**returns** - Returns the result of the hit, the object form returns `Object`, and the function form returns the value after `return`

---

### getStatusBarHeight([safe: boolean]) ###
> Get the current device statusBar height

**Parameters**

safe - Whether to get the safe height, the default is not the safe height (false)

**Example**

```javascript
import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-style-adaptive'

const styles = StyleSheet.create({
    header:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding:10,
        height: 60,
        backgroundColor: 'transparent',
        paddingTop: getStatusBarHeight()
    }
})

```

**returns** - Return to statusBar height: iphonex security height is `44` in horizontal screen state, unsafe height is `30`, vertical screen status iphonex returns statusBar height is `0`, other ios devices are `20`, android device? Returns the current device `statusBar` height

---

### getBottomSpace() ###
> Get the safe height at the bottom of the device

**Example**

```javascript
import { StyleSheet } from 'react-native'
import { getBottomSpace } from 'react-native-style-adaptive'

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding:10,
        height: 40,
        backgroundColor: 'transparent',
        marginBottom: getBottomSpace()
    },
})

```

**returns** - The bottom is highly safe, the horizontal screen iphonex device returns `34`, the vertical iphonex device returns `21`, and the other devices are `0`

---

### SafeAreaView ###
> Compatible component SafeAreaView, high version uses `react-native` default component, low version uses compatible version

**Example**

```javascript
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-style-adaptive'

export default class MyApp extends Component {
  render() {
    return (
      <SafeAreaView
        style={ { flex: 1, backgroundColor: 'blue'} }
      >
        ... //=> Page code
      </SafeAreaView>
    )
  }
}

```

**reaact-native 0.44.3 validity check**
![](http://qiniu.h1z166.com//file/2018/10/b1eae095aee94181b42f93dc37f8aa5c_WX201810091133532x.png) 

## Licence ##
**MIT**
