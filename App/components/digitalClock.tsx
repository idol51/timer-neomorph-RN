import React from 'react'
import { Neomorph } from 'react-native-neomorph-shadows'
import { COLORS } from '../assets/styles/constants'
import { Text, View } from 'react-native'

export default function DigitalClock() {
  return (
    <View style={{ alignItems: "center" }}>
        <Neomorph
            inner
            style={{
                width: 180,
                height: 80,
                backgroundColor: COLORS.BACKGROUND,
                shadowRadius: 10,
                borderRadius: 300,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 8
            }}
        >
        <Text style={{
            fontSize: 40,
            fontWeight: "bold",
            color: "grey"
        }}>19:00</Text>
        </Neomorph>
        <Text style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "grey",
        }}>2nd of Nov, 2023</Text>
    </View>
  )
}
