import {Image, Text, View} from "react-native";
import styles from "../styles";
import React, {useContext} from "react";
import {average} from "../store/SchoolProvider";


const StudentItem = ({student}) =>{
    let style = [];
    style.push(styles.studentItem);
    if (student.attendance > 5)
        style.push({backgroundColor: 'purple'});

    return(
        <>
            <View style={style}>
                <Image
                    source={{ uri: student.avatar }}
                    style={{ width: 100, height: 100, marginRight : 10 }}
                />
                <View>
                    <Text style={styles.title}>{student.name}</Text>
                    <Text>Nombre d'absence(s): {student.attendance}</Text>
                    <Text>Nombre de cours: {student.lessons.length}</Text>
                    <Text>Moyenne: {average(student.notes)}</Text>
                </View>
            </View>
        </>
    )
};

export default StudentItem