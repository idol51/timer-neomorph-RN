import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Neomorph, Shadow } from 'react-native-neomorph-shadows'
import { COLORS } from '../assets/styles/constants'
import Needle from './needle'
import { styles } from "./styles"
import { useTimeContext } from '../contexts/TimeContext'
import LinearGradient from 'react-native-linear-gradient'

export default function AnalogClock() {
    const { time } = useTimeContext();

  return (
    <Neomorph inner style={styles.clockWrapper}>
        <Neomorph style={styles.clockOuterCircle}>
            <View style={styles.clockInnerCircle}>
                <Shadow style={styles.clockNeedlePin}>
                    <LinearGradient
                        start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                        colors={[ COLORS.PRIMARY,  COLORS.PRIMARY_VARIANT ]}
                        style={{
                            width: '50%',
                            height: '50%',
                            borderRadius: 100,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    />
                </Shadow>
                <Needle length={60} deg={time.getHours()*30  + time.getMinutes()/2} />
                <Needle length={90} deg={time.getMinutes()*6 + time.getSeconds()/10} />
            </View>
            <View style={[ { top: 15, left: 105 }, styles.clockHourIndex]} />
            <View style={[ { top: 27, left: 150 }, styles.clockHourIndex]} />
            <View style={[ { top: 60, left: 183 }, styles.clockHourIndex]} />

            <View style={[ { top: 105, left: 195 }, styles.clockHourIndex]} />
            <View style={[ { top: 150, left: 183 }, styles.clockHourIndex]} />
            <View style={[ { top: 183, left: 150 }, styles.clockHourIndex]} />


            <View style={[ { top: 195, left: 105 }, styles.clockHourIndex]} />
            <View style={[ { top: 183, left: 60 }, styles.clockHourIndex]} />
            <View style={[ { top: 150, left: 27 }, styles.clockHourIndex]} />

            <View style={[ { top: 105, left: 15 }, styles.clockHourIndex]} />
            <View style={[ { top: 60, left: 27 }, styles.clockHourIndex]} />
            <View style={[ { top: 27, left: 60 }, styles.clockHourIndex]} />
        </Neomorph>
    </Neomorph>
  )
}
