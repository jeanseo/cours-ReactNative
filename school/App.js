import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from "./screens/Details";
import {SchoolProvider} from "./store/SchoolProvider";
import StudentsScreen from "./screens/Students";
import styles from "./styles";
import LessonsScreen from "./screens/Lessons";
import AbsenceScreen from "./screens/Absence";

// Construction des menus
const HomeScreen = ({ navigation }) => {
  return (
      <View style={styles.homeMenu}>
        <Text>Home Screen</Text>
        <Button
            style={styles.button}
            title="Lessons"
            onPress={() => navigation.navigate('Lessons')}
        />
          <Button
              style={styles.button}
              title="Students"
              onPress={() => navigation.navigate('Students')}
          />
      </View>
  );
};

// On utilise la classe createStackNavigator de React navigation
const Stack = createStackNavigator();
// Définition de la navigation pour votre application
// Notez que initialRouteName définit la page par défaut
// quand l'application se charge
// Vous devez définir un wraper NavigationContainer puis
// utilisez les composants Stack.Navigator et Stack.Screen
// pour définir les éléments de navigation
const Nav = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Lessons" component={LessonsScreen} />
            <Stack.Screen name="Students" component={StudentsScreen} />
            <Stack.Screen name="Absence" component={AbsenceScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const App = () => {
    return(
        <SchoolProvider>
            <Nav />
        </SchoolProvider>
        )
     };
export default App;