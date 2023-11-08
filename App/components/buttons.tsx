import React, { ReactNode, useState } from 'react'
import { Dimensions, StyleProp, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Neomorph, NeomorphFlex, Shadow } from 'react-native-neomorph-shadows'
import { COLORS } from '../assets/styles/constants'
import FeatherIcon from "react-native-vector-icons/Feather"
import { styles } from './styles'

const windowWidth = Dimensions.get("window").width;

export function RoundButton({ children }: { children: ReactNode }) {
  return (
    <TouchableHighlight onPress={() => console.log("hell")} style={{ width: 80, aspectRatio: 1/1, borderRadius: 100, position: "absolute", bottom: 32 }}>
        <Shadow
            style={{
                shadowOffset: {width: 16, height: 16},
                shadowOpacity: 1,
                shadowColor: COLORS.PRIMARY + "60",
                shadowRadius: 20,
                borderRadius: 100,
                backgroundColor: COLORS.BACKGROUND,
                width: 80,
                height: 80
            }}
        >
            <LinearGradient
                start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                colors={[ COLORS.PRIMARY,  COLORS.PRIMARY_VARIANT ]}
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {children}
            </LinearGradient>
        </Shadow>
    </TouchableHighlight>
  )
}

export function Segmented ({ data, selected, onPress }: { data: string[], selected: string, onPress: (name: string) => any }) {

    return (
        <Neomorph style={styles.segmentedWrapper}>
            {   data.map((name: string) => (
                <TouchableOpacity key={name} onPress={() => onPress(name)}>
                    <Neomorph inner style={{ shadowRadius: selected === name ? 6 : 0 , ...styles.segmentedButton }}>
                        <Text style={styles.segmentedButtonText}>{name}</Text>
                    </Neomorph>
                </TouchableOpacity>
            ))

            }
        </Neomorph>
    )
}

export function SquareButton ({ children, style, onPress }: { children: ReactNode, style?: StyleProp<ViewStyle>, onPress?: any }) {
    const [ isButtonPressed, setIsButtonPressed ] = useState<boolean>(false);
    return (
        <TouchableWithoutFeedback style={style && style} onPress={onPress} onPressIn={() => setIsButtonPressed(true)} onPressOut={() => setIsButtonPressed(false)}>
            <Neomorph
                inner={isButtonPressed}
                style={{
                    width: 32,
                    height: 32,
                    backgroundColor: COLORS.BACKGROUND,
                    shadowRadius: 6,
                    borderRadius: 8,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {children}
            </Neomorph>
        </TouchableWithoutFeedback>
    )
}