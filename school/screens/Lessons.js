import React, {useContext} from "react";
import {Button, Text, View, FlatList, Image, SafeAreaView} from "react-native";
import {SchoolContext} from '../store/SchoolProvider';
import styles from "../styles";




const LessonsScreen = ({ navigation }) =>{

    const [state, dispatch] = useContext(SchoolContext);

    const {lessons} = state;

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Button
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />
            <FlatList
                data = {lessons}
                renderItem={({item, index }) => <Text style={styles.lessonItem}>{item.title}</Text>}
                keyExtractor={item => item.id.toString()}
            />

        </SafeAreaView>
    );
};

export default LessonsScreen;
