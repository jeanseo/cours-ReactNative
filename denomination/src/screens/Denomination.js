import React from 'react';


import {useDispatch, useStore, useSelector} from "react-redux";

import {TextInput, Text, View, SafeAreaView, TouchableOpacity, Picker} from "react-native";
import styles from "../../styles";
import {setAmount, resetAmount, calculate} from "../actions/actions-types";

const DenominationScreen = () =>{
        const dispatch = useDispatch();
        const {amount, denominations} = useSelector(state => state.denomination);

        return(
            <View style={styles.homeMenu}>
                <Text>Saisir le montant</Text>
                <TextInput
                    keyboardType = 'number-pad'
                    value={amount.toString()}
                    onChangeText={value => dispatch(setAmount(value))}
                    style = {{borderWidth : 1}}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => dispatch(calculate())}
                >
                    <Text>Calculate</Text>
                </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => dispatch(resetAmount())}
                    >
                            <Text>Reset</Text>
                    </TouchableOpacity>
                {denominations.map((d, index) =>{
                    if(d.count > 0) return(
                    <Text key = {index}>
                        Dénomination {d.value} unité(s) : {d.count}
                    </Text>
                )
                })}
            </View>
        )
};

export default DenominationScreen;