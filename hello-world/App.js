import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {


  const [user, setUser] = useState("machin");


  return (
    <View style={styles.container}>
      <TextInput
          style={{height: 40}}
          onChangeText={text => setUser(text)}
          defaultValue={user}
      />


      <Text>{countChars(user)}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const countChars = (text)=>{
    const words = text.split(' ');
    let result ='';
    words.forEach( word => word.length > 0 ? result = result.concat(word.length+' '):null );
    return result;
};

const User = ({name})=>{
  return(
      <View>
        <Text>Ceci est mon utilisateur, il s'appelle {name}</Text>
      </View>
  )
};
