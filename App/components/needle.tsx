import MaskedView from '@react-native-masked-view/masked-view';
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Polygon } from 'react-native-svg';

export default function Needle({ length, deg }: { length: number, deg: number }) {
    
  return (
    // <View 
    //     style={{
    //         position: "absolute",
    //         height: 160,
    //         width: 16,
    //         transform: [{ rotateZ: `${deg}deg` }]
    //     }}
    // >
    //     <View
    //         style={{
    //             width: 0,
    //             height: 0,
    //             backgroundColor: "transparent",
    //             borderStyle: "solid",
    //             borderLeftWidth: 8,
    //             borderRightWidth: 8,
    //             borderBottomWidth: 80,
    //             borderLeftColor: "transparent",
    //             borderRightColor: "transparent",
    //             borderBottomColor: "blue"
    //         }}
    //     />
    // </View>

    <MaskedView
        style={{ width: 16, height: length*2, position: "absolute", transform: [{ rotateZ: `${deg}deg` }]  }}
        maskElement={
            <Svg height="100%" width="100%" viewBox={`0 0 16 ${length*2}`}>
                <Polygon points={`8, 0, 0, ${length}, 16, ${length}`} />
            </Svg>
        }>
        
        <LinearGradient
            colors={[ '#afffd2', '#0E84F3', '#0E84F3']} // Replace with your desired gradient colors
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
