import MaskedView from '@react-native-masked-view/masked-view';
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Polygon } from 'react-native-svg';
import { COLORS } from '../assets/styles/constants';

export default function Needle({ length, deg }: { length: number, deg: number }) {
    
  return (
    <MaskedView
        style={{ width: 16, height: length*2, position: "absolute", transform: [{ rotateZ: `${deg}deg` }]  }}
        maskElement={
            <Svg height="100%" width="100%" viewBox={`0 0 16 ${length*2}`}>
                <Polygon points={`8, 0, 0, ${length}, 16, ${length}`} />
            </Svg>
        }>
        
        <LinearGradient
            colors={[ COLORS.SECONDARY, COLORS.PRIMARY, COLORS.PRIMARY]} // Replace with your desired gradient colors
            style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            }}
        />
    </MaskedView>
  )
}
