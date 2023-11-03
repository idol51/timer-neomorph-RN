import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../assets/styles/constants";

const windowWidth = Dimensions.get("window").width;


export const styles = StyleSheet.create({
    needleWrapper: {
        
    },
    clockWrapper: {
        shadowRadius: 10,
        borderRadius: 300,
        backgroundColor: COLORS.BACKGROUND,
        width: 300,
        height: 300,
        justifyContent: "center",
        alignItems: "center"
    },
    clockOuterCircle: {
        shadowRadius: 10,
        borderRadius: 220,
        backgroundColor: COLORS.BACKGROUND,
        width: 220,
        height: 220,
        justifyContent: "center",
        alignItems: "center"
    },
    clockInnerCircle: { 
        backgroundColor: COLORS.WHITE, 
        borderRadius: 140, 
        width: 140, 
        height: 140,
        justifyContent: "center",
        alignItems: "center"
    },
    clockNeedlePin: {
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 1,
        shadowColor: "grey",
        shadowRadius: 10,
        borderRadius: 32,
        backgroundColor: 'white',
        width: 32,
        height: 32,
        zIndex: 10
    },
    clockHourIndex: { 
        backgroundColor: "#BBB", 
        width: 10, 
        aspectRatio: 1/1, 
        borderRadius: 20,
        position: "absolute",
    },

    segmentedWrapper: {
        shadowRadius: 10,
        borderRadius: 300,
        backgroundColor: COLORS.BACKGROUND,
        width: windowWidth - 48,
        height: 60,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    segmentedButton: {
        borderRadius: 300,
        backgroundColor: COLORS.BACKGROUND,
        width: (windowWidth - 48)/3 - 20,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    segmentedButtonText: {
        color: COLORS.TEXT,
        fontSize: 16,
        fontWeight: "bold"
    }
})