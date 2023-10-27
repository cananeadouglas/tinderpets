import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import Perfil from "../Pages/perfil";
import Chat from "../Pages/chat";
import Match from "../Pages/match";
import Feed from "../Pages/feed";
import HomeScreen from "../Screens/homeScreen";
import Information from "../Pages/information";

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    return (
        <AppTab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#605091',
                tabBarInactiveTintColor: '#A6ABB0',
                tabBarLabelPosition: 'beside-icon',
                headerShown: false,
                
                tabBarStyle: {
                    height: 50
                },
            }}>

                <AppTab.Screen
                    name="Feed"
                    component={Feed}
                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <Entypo 
                                name="vinyl"
                                size={size}
                                color={color}
                            />
                        ))
                    }}
                >
                </AppTab.Screen>


                <AppTab.Screen
                    name="Match"
                    component={Match}
                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <Entypo 
                                name="thumbs-up"
                                size={size}
                                color={color}
                            />
                        ))
                    }}
                >
                </AppTab.Screen>


                <AppTab.Screen
                    name="Chat"
                    component={Chat}
                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <Entypo 
                                name="chat"
                                size={size}
                                color={color}
                            />
                        ))
                    }}
                >
                </AppTab.Screen>


                <AppTab.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <Entypo 
                                name="clipboard"
                                size={size}
                                color={color}
                            />
                        ))
                    }}
                >
                </AppTab.Screen>

                <AppTab.Screen
                    name="Info"
                    component={Information}
                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <Entypo 
                                name="text-document-inverted"
                                size={size}
                                color={color}
                            />
                        ))
                    }}
                >
                </AppTab.Screen>

        </AppTab.Navigator>
         
    )
}

export default AuthRoutes;