import { StyleSheet } from 'react-native'
import { originalWidth } from './device'
import { isIos } from './utils'

let designWidth = 750

const initSize = size => designWidth = size

const dp2px = dp => {
    
    if (pixelRatio >= 3 && isIos && dp == 1) return dp
    
    return designWidth / originalWidth * dp
}

const px2dp = px => {
    if (px == 1) return StyleSheet.hairlineWidth

    return Math.round(originalWidth / designWidth * px)
}

export {
    initSize,
    dp2px,
    px2dp
}