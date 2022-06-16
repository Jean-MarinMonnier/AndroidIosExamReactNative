import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function LoginLoading() {
    const navigation = useNavigation();
    setTimeout(() => navigation.navigate('BookList', {}), 3000)
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    }
})