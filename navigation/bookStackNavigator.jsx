import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Header from "../components/Header";
import BookList from "../screens/BookList";
import BookDetails from "../screens/BookDetails";
export default function BookStackNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ header: (props) => <Header {...props} />}}
            >
                <Stack.Screen
                    name="BookList"
                    component={BookList}
                    options={() => ({
                    })}
                />
                <Stack.Screen
            name="BookDetails"
            component={BookDetails}
            options={({ route }) => ({ title: route.params.name, goBack : true})}
        />
            </Stack.Navigator>
        </NavigationContainer>
    )
}