import React, {useReducer, } from 'react';
import { StyleSheet, Text, View, FlatList, } from 'react-native';
import {TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native";
import styles from "./styles";
import {reducer, initialState} from "./reducer";


export default function App() {



  const [state, dispatch] = useReducer(reducer, initialState);

  const VoteButton = ({candidate}) =>{
    return(
        <SafeAreaView>
            <View style={styles.countContainer}>
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => dispatch({type: 'vote', payload: candidate})}
              >
                <Text>{candidate}</Text>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
  };

    const Favorite = ()=>{
        console.log(state.selectedCandidate);
        return(
            <SafeAreaView>
                <View style={styles.container}>
                    <Text>Vos choix</Text>
                    <FlatList
                        data = {state.selectedCandidate}
                        renderItem={({item, index }) => <Text>{index+1} - {item}</Text>}
                        keyExtractor={index => index}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => dispatch({type: 'reset'})}
                    >
                        <Text>Reset</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    };



if (state.voteIndex < state.candidates.length){
  return (
      <SafeAreaView>
          <View style={styles.container}>
            <Text>Choose your favorite</Text>
            <VoteButton candidate={state.candidates[state.voteIndex].choice_1}/>
            <VoteButton candidate={state.candidates[state.voteIndex].choice_2}/>
          </View>
      </SafeAreaView>
  );
}
else {
  return <Favorite/>;

}



}








