import React from 'react'
import { Dimensions, Text, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Neomorph, Shadow } from 'react-native-neomorph-shadows'
import { COLORS } from '../assets/styles/constants'
import FeatherIcon from "react-native-vector-icons/Feather"
import { styles } from './styles'

const windowWidth = Dimensions.get("window").width;

export function AddButton() {
  return (
    <TouchableHighlight onPress={() => console.log("hell")} style={{ width: 80, aspectRatio: 1/1, borderRadius: 100, position: "absolute", bottom: 32 }}>
        <Shadow
            style={{
                shadowOffset: {width: 16, height: 16},
                shadowOpacity: 1,
                shadowColor: "#0E84F360",
                shadowRadius: 20,
                borderRadius: 100,
                backgroundColor: COLORS.BACKGROUND,
                width: 80,
                height: 80
            }}
        >
            <LinearGradient
                start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                colors={[  '#0E84F3',  '#38bde6']} // Replace with your desired gradient colors
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <FeatherIcon name='plus' color={COLORS.WHITE} size={48} />
            </LinearGradient>
        </Shadow>
    </TouchableHighlight>
  )
}

export function Segmented () {

    return (
        <Neomorph style={styles.segmentedWrapper}>
            <TouchableWithoutFeedback>
                <Neomorph inner style={[ { shadowRadius: 6 }, styles.segmentedButton]}>
                    <Text style={styles.segmentedButtonText}>Alarm</Text>
                </Neomorph>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <Neomorph inner style={[ { shadowRadius: 0 }, styles.segmentedButton]}>
                    <Text style={styles.segmentedButtonText}>Timer</Text>
                </Neomorph>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <Neomorph inner style={[ { shadowRadius: 0 }, styles.segmentedButton]}>
                    <Text style={styles.segmentedButtonText}>Stopwatch</Text>
                </Neomorph>
            </TouchableWithoutFeedback>
        </Neomorph>
    )
}