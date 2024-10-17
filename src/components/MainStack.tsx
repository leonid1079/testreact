import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { ScreenOne } from "./ScreenOne";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Hello World"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#4CAF50",
                },
                headerTintColor: "#ffffff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Hello World"
                component={ScreenOne}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);