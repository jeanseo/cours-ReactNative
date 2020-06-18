import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        margin: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    studentItem: {
        flexDirection: "row",
        flex: 1,
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16

    },
    lessonItem: {
        flex: 1,
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        fontSize: 24
    },
    title: {
        fontSize: 32,
    },
    homeMenu: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default styles