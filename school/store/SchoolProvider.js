import React, { createContext, useReducer , useEffect} from 'react';
import _ from 'lodash';

const SchoolContext = createContext();
//Fonctions utiles

const average = notes => {
    return (notes.reduce((p, c) => p+c, 0)/notes.length).toFixed(2)
};

const sortByGrades = students => {
    students.sort((a,b)=>average(a.notes)-average(b.notes));
    return students
};


// Source de vérité
const initialState = {
    students: [
        { id: 1, name: "Alice", lessons: [1, 2], attendance: 0, notes: [11, 12, 18], avatar: "https://robohash.org/asperioresreiciendisexpedita.jpg?size=100x100&set=set1" },
        { id: 2, name: "Alan", lessons: [3], attendance: 0, notes: [10, 14.5, 11], avatar: "https://robohash.org/doloribusdebitisut.png?size=100x100&set=set1" },
        { id: 3, name: "Phil", lessons: [1, 2, 3], attendance: 0, notes: [11, 9, 9], avatar: "https://robohash.org/nonideveniet.png?size=100x100&set=set1" },
        { id: 4, name: "Naoudi", lessons: [1], attendance: 0, notes: [14.5, 19, 18], avatar: "https://robohash.org/remquiaitaque.png?size=100x100&set=set1" },
        { id: 5, name: "Fenley", lessons: [3], attendance: 0, notes: [9, 7, 11], avatar: "https://robohash.org/rerumreiciendisdeserunt.jpg?size=100x100&set=set1" },],
    lessons: [
        { id: 1, title: "React" },
        { id: 2, title: "React Native" },
        { id: 3, title: "MongoDB" }
    ],
    behaviours : [{ id : 1, mention : 'A'}, { id : 2, mention : 'B'}],
    order: false
};

let copyInitialState = _.cloneDeep(initialState);

const reducer = (state, action) => {
    let student;
    let students;
    switch (action.type) {

        case 'addAbsence':
            student = { ...state.students.find(s => s.id === action.payload.id) };
            student.attendance++;
            students = state.students.map(s => s.id !== action.payload.id ? s : student );
            return {...state, students:students};
        case 'removeAbsence':
            student = { ...state.students.find(s => s.id === action.payload.id) };
            if (student.attendance > 0)
                student.attendance--;
            students = state.students.map(s => s.id !== action.payload.id? s:student );
            return {...state, students:students};
        case 'resetAbsences':
            students = state.students.map(s => {s.attendance = 0; return s;});
            return {...state, students:students};
        case 'SwitchSortByGrades':
            students = _.cloneDeep(state.students);
            students = sortByGrades(students);
            if (state.order)
                students.reverse();
            return {...state, students:students, order: !state.order};
        case 'setBehaviour':
            console.log('Ajouter appréciation');
            student = { ...state.students.find(s => s.id === action.payload.student.id) };
            student.behaviour = action.payload.selectedValue;
            students = state.students.map(s => s.id !== action.payload.student.id ? s : student );
            return {...state, students:students};
        default:
            return state;
    }
};

const SchoolProvider = ({children}) => {

    const [state, dispatch ] = useReducer(reducer, copyInitialState);
    //Code exécuté au montage
    useEffect(() => {
        dispatch({type: 'SwitchSortByGrades'})
    },[]);

    return (
        <SchoolContext.Provider value={[state, dispatch]}>
            {children}
        </SchoolContext.Provider>
    )
};

export { SchoolContext, SchoolProvider, average } ;