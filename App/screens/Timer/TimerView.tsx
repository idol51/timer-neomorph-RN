import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { Neomorph } from 'react-native-neomorph-shadows'
import { RoundButton } from '../../components/buttons'
import FeatherIcon from "react-native-vector-icons/Feather"
import { COLORS } from '../../assets/styles/constants'

export default function TimerView() {
  return (
    <View style={styles.body}>
      <Neomorph inner style={styles.timerWrapper}>
        <Text style={styles.timerText}>12:00.00</Text>
      </Neomorph>
      <RoundButton>
        <FeatherIcon name="pause" color={COLORS.WHITE} size={32} />
      </RoundButton>
    </View>
  )
}
