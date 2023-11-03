import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Neomorph, Shadow } from 'react-native-neomorph-shadows'
import { COLORS } from '../assets/styles/constants'
import Needle from './needle'
import { styles } from "./styles"

export default function AnalogClock() {
    const [ deg, setDeg ] = useState<number>(0)
    const tick = () => {
        setTimeout(() => {
            setDeg((prev: number) => prev+6);
            tick();
        }, 1000)
    }

    useEffect(() => {
        tick();
    }, [])

  return (
    <Neomorph inner style={styles.clockWrapper}>
        <Neomorph style={styles.clockOuterCircle}>
            <View style={styles.clockInnerCircle}>
                <Shadow style={styles.clockNeedlePin}/>
                <Needle length={60} deg={deg/60} />
                <Needle length={90} deg={deg} />
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
