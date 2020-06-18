import React, {useContext} from "react";
import {Button, Text, View, SafeAreaView, TouchableOpacity, Picker} from "react-native";
import {SchoolContext} from '../store/SchoolProvider';
import styles from "../styles";
import StudentItem from "../Components/StudentItem";

const AbsenceScreen = ({ navigation, route }) =>{

    const [state, dispatch] = useContext(SchoolContext);
    const id = route.params.student.id;

    const {students, behaviours} = state;
    const student = students.find(s => s.id === id);

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{student.name}</Text>
            <Text>Nombre d'absences: {student.attendance}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch({type: 'addAbsence', payload: student})}
            >
                <Text>Ajouter une absence</Text>
            </TouchableOpacity>
            {student.attendance > 0 &&
            <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch({type: 'removeAbsence', payload: student})}
            >
                <Text>Supprimer une absence</Text>
            </TouchableOpacity>
            }

            <Text>Comportement</Text>
            <Picker
                selectedValue={student.behaviour}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) =>
                    dispatch({
                        type: 'setBehaviour',
                        payload: {student: student, selectedValue : itemValue}
                    })}
            >
                <Picker.Item label = 'none' value = {null}/>
                {behaviours.map(b => <Picker.Item key = {b.id} label={b.mention} value={b.id} />)}
            </Picker>




        </SafeAreaView>
    );
};

export default AbsenceScreen;
