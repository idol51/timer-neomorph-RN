import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { COLORS } from './assets/styles/constants'
import { Polygon, Svg } from 'react-native-svg'
import LinearGradient from 'react-native-linear-gradient'
import MaskedView from '@react-native-masked-view/masked-view'
import AnalogClock from './components/analogClock'
import DigitalClock from './components/digitalClock'
import { AddButton, Segmented } from './components/buttons'

export default function App() {
  return (
    <View style={{ backgroundColor: COLORS.BACKGROUND, flex: 1, justifyContent: "center", alignItems: "center", gap: 20 }}>
        <StatusBar backgroundColor={COLORS.BACKGROUND} />
        <Segmented />
        <AnalogClock />
        <DigitalClock />   
        <AddButton />     
    </View>
  )
}
