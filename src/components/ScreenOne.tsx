import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { MainStackParamList } from "../NavigationParamList";

type ScreenOneProps = {
    route: RouteProp<MainStackParamList, "One">,
    navigation: FrameNavigationProp<MainStackParamList, "One">,
};

export function ScreenOne({ navigation }: ScreenOneProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-3xl font-bold text-center text-red-500">
                Hello World!
            </label>
            <button
                style={styles.button}
                onTap={() => Dialogs.alert("Welcome to NativeScript with React!")}
            >
                Tap me
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    button: {
        fontSize: 20,
        color: "#ffffff",
        backgroundColor: "#4CAF50",
        padding: 10,
        marginTop: 20,
        borderRadius: 4,
    },
});