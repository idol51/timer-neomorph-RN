import React from 'react'
import { Neomorph } from 'react-native-neomorph-shadows'
import { COLORS } from '../assets/styles/constants'
import { Text, View } from 'react-native'
import { useTimeContext } from '../contexts/TimeContext'

export default function DigitalClock() {
    const { time } = useTimeContext();
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
        }}>{`${time.getHours()}${time.getSeconds()%2 === 0 ? ":" : " "}${time.getMinutes() > 9 ? time.getMinutes() : "0" + time.getMinutes() }`}</Text>
        </Neomorph>
        <Text style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "grey",
        }}>{`${time.toDateString().split(" ")[0]} ${time.toDateString().split(" ")[1]} ${time.toDateString().split(" ")[2]}, ${time.toDateString().split(" ")[3]}`}</Text>
    </View>
  )
}
