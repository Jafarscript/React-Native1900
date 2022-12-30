import {StatusBar} from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import React from 'react'

const FocusStatusBar = () => {
    const isFocused = useIsFocused()
  return isFocused ? <StatusBar animated={true} barStyle={'light-content'}/> : null;
}

export default FocusStatusBar