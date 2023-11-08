import React from 'react'
import { StatusBar, View } from 'react-native'
import { COLORS } from '../../assets/styles/constants'
import { RoundButton, Segmented } from '../../components/buttons'
import AnalogClock from '../../components/analogClock'
import DigitalClock from '../../components/digitalClock'
import FeatherIcon from "react-native-vector-icons/Feather"

export default function AlarmView() {
  return (
    <View style={{ backgroundColor: COLORS.BACKGROUND, flex: 1, alignItems: "center", gap: 20 }}>
        <StatusBar backgroundColor={COLORS.BACKGROUND} />
        <AnalogClock />
        <DigitalClock />   
        <RoundButton>
            <FeatherIcon name='plus' color={COLORS.WHITE} size={48} />
        </RoundButton>     
    </View>
  )
}
