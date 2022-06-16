import { Text, View, Image, StyleSheet } from "react-native";
export default function BookDetails({ route }){
    const book = route.params.book;
    console.log(book);
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri : book.cover_url}} resizeMode='contain'></Image>
            <View style={styles.subjectsContainer}>
                {book.details.subjects.map((subject) => <Text style={styles.subject}>{subject}</Text>)}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        marginVertical : 20,
        alignSelf: 'center',
        width : 200,
        height : 300
    },
    subjectsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal : 30,
    },
    subject: {
        borderRadius: 50,
        backgroundColor: 'lightgrey',
        fontSize : 13,
        padding: 10,
        marginHorizontal: 2
    }
})