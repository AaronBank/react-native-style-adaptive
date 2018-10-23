import {
    Dimensions,
    PixelRatio,
    StatusBar
} from 'react-native'
import {
    _min,
    _max,
    _processor,
    _select,
    isIos,
    isPad,
    isTVOS
} from './utils'

const pixelRatio = PixelRatio.get()

const _getDimensions = () => Dimensions.get('window')

const _originalWindow = () => {
    const { width, height } = _getDimensions()

    return {
        originalWidth: _min(width, height),
        originalHeight: _max(width, height)
    }
}

const { originalWidth, originalHeight } = _originalWindow()

const _isIPhoneX = () => {
    const height = originalHeight

    const isIPhoneXHeight = (height === 812 || height === 896)

    const isIPhoneX = isIos && !isPad && !isTVOS && isIPhoneXHeight
    
    return isIPhoneX
}

const isIPhoneX = _isIPhoneX()

const ifIPhoneX = (iphoneX, ios={}, android={}) => {
    const [iphoneXStyle, iosStyle, androidStyle] = _processor(iphoneX, ios, android)

    return _select({
        ios: isIPhoneX ? iphoneXStyle : iosStyle,
        android: androidStyle
    })
}

const isHorizontal = () => {
    const { width, height } = _getDimensions()

    return width > height
}

const ifHorizontal = (horizontal, vertical) => {

    const [ horizontalStyle, verticalStyle ] = _processor(horizontal, vertical)

    if (isHorizontal()) return horizontalStyle

    return verticalStyle
}

const deviceWidth = () => _getDimensions().width

const deviceHeight = () => _getDimensions().height

const getStatusBarHeight = safe => _select({
    ios: ifIPhoneX(ifHorizontal(0, safe ? 44 : 30), 20),
    android: StatusBar.currentHeight
})

const getBottomSpace = () => isIPhoneX ? ifHorizontal(21, 34) : 0

export {
    pixelRatio,
    originalWidth,
    originalHeight,
    deviceWidth,
    deviceHeight,
    isIPhoneX,
    ifIPhoneX,
    isHorizontal,
    ifHorizontal,
    getStatusBarHeight,
    getBottomSpace
}