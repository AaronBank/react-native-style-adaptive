import React, { Component } from 'react'
import RN, {
    View,
    Dimensions,
    PixelRatio,
    Platform,
    StatusBar,
    StyleSheet
} from 'react-native'

const designWidth = 750
const { 
    width: deviceWidth,
    height: deviceHeight
} = Dimensions.get('window')
const pixelRatio = PixelRatio.get()
const isIos = Platform.OS === 'ios'


const initSize = size => designWidth = size

const dp2px = dp => {
    if (pixelRatio >= 3 && isIos && dp == 1) return dp
    
    return designWidth / deviceWidth * dp
}

const px2dp = px => {
    if (px == 1) return StyleSheet.hairlineWidth

    return Math.round(deviceWidth / designWidth * px)
}

const isIPhoneX = () => (
    isIos && 
    !Platform.isPad && 
    !Platform.isTVOS &&
    ((deviceHeight === 812 || deviceWidth === 812) || (deviceHeight === 896 || deviceWidth=== 896))
)

const isObject = data => ({}).toString.call(data) === '[object Object]'
const isFunction = data => typeof data === 'function'

const ifIPhoneX = (iphoneXStyle, iosStyle, androidStyle) => {
    iphoneXStyle = isObject(iphoneXStyle) ? iphoneXStyle : isFunction(iphoneXStyle) ? iphoneXStyle() : {}
    iosStyle = isObject(iosStyle) ? iosStyle : isFunction(iosStyle) ? iosStyle() : {}
    androidStyle = isObject(androidStyle) ? androidStyle : isFunction(androidStyle) ? androidStyle() : {}

    if (isIPhoneX()) return  iphoneXStyle

    if (isIos) return iosStyle
    
    return androidStyle
}

const isHorizontal = () => (deviceWidth > deviceHeight)

const ifHorizontal = (horizontalStyle, verticalStyle) => {
    horizontalStyle = isObject(horizontalStyle) ? horizontalStyle : isFunction(horizontalStyle) ? horizontalStyle() : {}
    verticalStyle = isObject(verticalStyle) ? verticalStyle : isFunction(verticalStyle) ? verticalStyle() : {}

    if (isHorizontal()) return horizontalStyle

    return verticalStyle
}

const getStatusBarHeight = safe => Platform.select({
    ios: ifIPhoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight
})

const getBottomSpace = () => ifIPhoneX() ? 34 : 0

class MySafeAreaView extends Component {
    render() {
        return (
            <View
                { ...this.props }
                style={ [styles.container, this.props.style] }
            >
                { this.props.children }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...ifIPhoneX(() => ifHorizontal({
            paddingBottom: 34,
            paddingHorizontal: 44
        }, {
            paddingTop: 44,
            paddingBottom: 34
        }))
    }
})

const SafeAreaView = RN.SafeAreaView || MySafeAreaView

export {
    initSize,
    pixelRatio,
    dp2px,
    px2dp,
    isIPhoneX,
    ifIPhoneX,
    isHorizontal,
    ifHorizontal,
    getStatusBarHeight,
    getBottomSpace,
    SafeAreaView
}
