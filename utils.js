import { Platform } from 'react-native'

const _min = (num1, num2) => Math.min(num1, num2)

const _max = (num1, num2) => Math.max(num1, num2)

const _isFunction = data => typeof data === 'function'

const _processor = (...args) => args.map((item) => _isFunction(item) ? item() : item)

const { OS, isPad, isTVOS, Version, select: _select } = Platform

const isIos = OS === 'ios'

const isAndroid = OS === 'android'

export {
    _min,
    _max,
    _isFunction,
    _processor,
    _select,
    isIos,
    isAndroid,
    isPad,
    isTVOS,
    Version
}
