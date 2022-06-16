import { TextInput, Button } from 'react-native-paper';
import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Login() {
    const navigation = useNavigation();
    const [usernameValue, setUsernameValue] = React.useState("");
    const [passwordValue, setPasswordValue] = React.useState("");
    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>Login</Text>
            <TextInput
                label="Username"
                mode="outlined"
                style={styles.input}
                value={usernameValue}
                placeholder=""
                onChangeText={text => setUsernameValue(text)}
            />
            <TextInput
                label="Password"
                mode="outlined"
                style={styles.input}
                value={passwordValue}
                placeholder=""
                onChangeText={text => setPasswordValue(text)}
            />
            <View style={styles.btnContainer}>
                <Button mode="text" onPress={() => {
                    setPasswordValue("");
                    setUsernameValue("");
                }}>
                    RESET
                </Button>
                <Button icon="key" mode="contained" onPress={() => navigation.navigate('LoginLoading')}> LOGIN </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginText: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20
    },
    container: {
        marginHorizontal: 15,
        marginTop: 10
    },
    btnContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        marginVertical: 5
    }
})