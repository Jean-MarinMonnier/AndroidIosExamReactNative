import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
export default function Header(props) {
    const navigation = useNavigation();
    return (
        <Appbar.Header>
            {props.options.goBack ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={props.options.title} />
        </Appbar.Header>
    );
} 
