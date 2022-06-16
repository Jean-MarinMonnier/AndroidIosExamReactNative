import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Login from "../screens/Login";
import LoginLoading from "../screens/LoginLoading";
export default function LoginStackNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer> 
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={() => ({
                        headerShown: false
                    })}
                />
                <Stack.Screen
                    name="LoginLoading"
                    component={LoginLoading}
                    options={() => ({
                        headerShown: false
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}