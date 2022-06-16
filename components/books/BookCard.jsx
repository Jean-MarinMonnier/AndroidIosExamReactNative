import { View, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function BookCard(props) {
    const navigation = useNavigation();
    const book = props.item;
    return (
        <Card style={styles.card}>
            <View style={styles.container}>
                <Card.Content style={styles.content}>
                    <Title>{book.details.title}</Title>
                    <Paragraph>{book.details.description}</Paragraph>
                    <Paragraph>written by {book.details.authors.map(item => item.name).join(', ')}</Paragraph>
                    <Paragraph>published by {book.details.publishers.map(item => item).join(', ')}</Paragraph>
                    <Card.Actions>
                        <Button onPress={(item) => navigation.navigate('BookDetails', {book : book, name : book.details.title})}>DETAILS</Button>
                    </Card.Actions>
                </Card.Content>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 15, marginVertical: 15
    },
    container: {
        padding: 10
    },
    content: {
        flex: 1
    },
})