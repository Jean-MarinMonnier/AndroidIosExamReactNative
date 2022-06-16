import { StatusBar } from 'expo-status-bar';
import { View, FlatList } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import BookCard from '../components/books/BookCard';
import books from '../dataset/books.json'
export default function BookList(){
    console.log(books);
    return (
        <PaperProvider>
            <View>
                <FlatList
                    data={books}
                    renderItem={({ item }) => {
                        return (
                            <BookCard item={item}></BookCard>
                        )
                    }}
                >
                </FlatList>
                <StatusBar style="auto" />
            </View>
        </PaperProvider>
    )
}