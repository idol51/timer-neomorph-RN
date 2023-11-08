import React from 'react'
import { View } from 'react-native'
import { Segmented, SquareButton } from './buttons'
import { COLORS } from '../assets/styles/constants'
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { styles } from './styles';
import FeatherIcon from "react-native-vector-icons/Feather"

export default function Header({ route, navigation, back }: NativeStackHeaderProps) {
  return (
    <View style={styles.headerWrapper}>
        <View style={{ flexDirection: "row-reverse", width: "100%", paddingHorizontal: 32, justifyContent: "space-between" }}>
            <SquareButton>
                <FeatherIcon name="settings" size={20} color={COLORS.PRIMARY} />
            </SquareButton>
            {back && <SquareButton onPress={() => navigation.goBack()}>
                <FeatherIcon name="chevron-left" size={24} color={COLORS.BLACK} />
            </SquareButton>}
        </View>
        <Segmented data={["Alarm", "Timer", "Stop Watch"]} selected={route.name} onPress={(name) => navigation.navigate(name)} />
    </View>
  )
}
