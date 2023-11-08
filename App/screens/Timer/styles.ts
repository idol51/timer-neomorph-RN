import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/styles/constants";

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center"
    },
    timerWrapper: {
        width: 240,
        height: 80,
        shadowRadius: 10,
        borderRadius: 80,
        backgroundColor: COLORS.BACKGROUND,
        justifyContent: "center",
        alignItems: "center"
    },
    timerText: {
        fontSize: 40,
        fontWeight: "bold",
        color: COLORS.TEXT
    }
})