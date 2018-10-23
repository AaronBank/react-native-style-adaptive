import React, { Component } from 'react'
import {
    View,
    SafeAreaView
} from 'react-native'
import {
    deviceWidth,
    deviceHeight,
    ifIPhoneX,
    ifHorizontal,
    getStatusBarHeight,
    getBottomSpace
} from './device'

class CompatibleSafeAreaView extends Component {
    constructor (props) {
        super(props)
        this.state = { 
            deviceWidth: deviceWidth(),
            children: props.children
        }
        this._monitoring = this._monitoring.bind(this)
        this.children = props.children
    }

    render() {
        const { style, children } = this.props

        return (
            <View
                { ...this.props }
                style={ [style, this._container()] }
                onLayout={ this._monitoring }
                ref={ ref => this.container = ref }
            >
                {children}
            </View>
        )
    }

    _container () {
        return ifIPhoneX(() => ifHorizontal({
            paddingHorizontal: 44
        }, {
            paddingTop: 44
        }))
    }

    _calculation (e) {
        const currentWindow = e.nativeEvent.layout
        const currentDeviceHeight = deviceHeight()

        const correctHeight = currentDeviceHeight - getStatusBarHeight() - getBottomSpace()
        const currentHeight = ifHorizontal(() => currentWindow.width, () => currentWindow.height)

        if (currentHeight >= correctHeight) {
            
            ifIPhoneX(() => {
                this.container.setNativeProps({
                    style: {
                        paddingBottom: getBottomSpace()
                    }
                })
            })
        }
    }

    _monitoring (e) {
        this.props.onLayout && this.props.onLayout(e)

        const currentDeviceWidth = deviceWidth()

        this._calculation(e)

        if (currentDeviceWidth !== this.state.deviceWidth) {
            this.setState({
                deviceWidth: currentDeviceWidth
            })
        }
    }
}

export default SafeAreaView || CompatibleSafeAreaView