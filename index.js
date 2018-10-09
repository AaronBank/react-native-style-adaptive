import React, { Component } from 'react'
import RN, {
    View,
    Dimensions,
    PixelRatio,
    Platform,
    StatusBar
} from 'react-native'

const designWidth = 750

const isIos = Platform.OS === 'ios'

const _min = (num1, num2) => Math.min(num1, num2)

const _max = (num1, num2) => Math.max(num1, num2)

const _isFunction = data => typeof data === 'function'

const _processor = (...args) => args.map((item) => _isFunction(item) ? item() : item)

const getDimensions = () => Dimensions.get('window')



export const pixelRatio = PixelRatio.get()

export const originalWidth = () => {
    const { width, height } = getDimensions()

    return _min(width, height)
}

export const originalHeight = () => {
    const { width, height } = getDimensions()

    return _max(width, height)
}

export const deviceWidth = () => getDimensions().width

export const deviceHeight = () => getDimensions().height

export const initSize = size => designWidth = size

export const dp2px = dp => {
    
    if (pixelRatio >= 3 && isIos && dp == 1) return dp
    
    return designWidth / originalWidth() * dp
}

export const px2dp = px => {
    if (px == 1) return StyleSheet.hairlineWidth

    return Math.round(originalWidth() / designWidth * px)
}

export const isIPhoneX = () => {
    const height = originalHeight()

    const isIPhoneX = isIos && !Platform.isPad && !Platform.isTVOS && (height === 812 || height === 896)
    
    return isIPhoneX
}

export const ifIPhoneX = (iphoneX, ios={}, android={}) => {
    const [iphoneXStyle, iosStyle, androidStyle] = _processor(iphoneX, ios, android)

    if (isIPhoneX()) return  iphoneXStyle

    if (isIos) return iosStyle
    
    return androidStyle
}

export const isHorizontal = () => {
    const { width, height } = getDimensions()

    return width > height
}

export const ifHorizontal = (horizontal, vertical) => {

    const [ horizontalStyle, verticalStyle ] = _processor(horizontal, vertical)

    if (isHorizontal()) return horizontalStyle

    return verticalStyle
}

export const getStatusBarHeight = safe => Platform.select({
    ios: ifIPhoneX(ifHorizontal(0, safe ? 44 : 30), 20),
    android: StatusBar.currentHeight
})

export const getBottomSpace = () => isIPhoneX() ? ifHorizontal(21, 34) : 0

class MySafeAreaView extends Component {
    constructor () {
        super()
        this.state = { deviceWidth: deviceWidth() }
        this._monitoring = this._monitoring.bind(this)
    }

    render() {
        const container = ifIPhoneX(() => ifHorizontal({
            paddingBottom: 21,
            paddingHorizontal: 44
        }, {
            paddingTop: 44,
            paddingBottom: 34
        }))
        const { style, children } = this.props

        return (
            <View
                { ...this.props }
                style={ [container, style] }
                onLayout={ this._monitoring }
            >
                { children }
            </View>
        )
    }

    _monitoring (e) {
        this.props.onLayout && this.props.onLayout(e)

        const currentDeviceWidth = deviceWidth()

        if (currentDeviceWidth !== this.state.deviceWidth) {
            this.setState({
                deviceWidth: currentDeviceWidth
            })
        }
    }
}

export const SafeAreaView = RN.SafeAreaView || MySafeAreaView

export default {
    pixelRatio,
    originalHeight,
    originalWidth,
    deviceWidth,
    deviceHeight,
    initSize,
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