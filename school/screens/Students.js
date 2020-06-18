import React, {useContext, useState} from "react";
import {Button, Text, View, FlatList, Image, SafeAreaView, TouchableOpacity} from "react-native";
import {SchoolContext, average} from '../store/SchoolProvider';
import styles from "../styles";
import StudentItem from "../Components/StudentItem";

const StudentsScreen = ({ navigation }) =>{

    const [state, dispatch] = useContext(SchoolContext);

    const {students, order} = state;

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Button
                    title="Home"
                    onPress={() => navigation.navigate('Home')}
                />
                <TouchableOpacity
                    onPress={() => dispatch({type: 'SwitchSortByGrades'})}
                >
                    <Text>{order?'DESC':'ASC'}</Text>
                </TouchableOpacity>
                <FlatList
                    data = {[...students]}
                    renderItem={({item }) =>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Absence', {student: item})}
                        >
                        <StudentItem student={item}/>
                        </TouchableOpacity>}
                    keyExtractor={item => item.id.toString()}
                />
            <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch({type: 'resetAbsences'})}
            >
                <Text>Reset absences</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

export default StudentsScreen;
