import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from './src/pages/Inicio';
import Dados from './src/pages/Dados';
import Experiencia from './src/pages/Experiencia';
import Formacao from './src/pages/Formacao';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component ={Inicio}/>
      <Stack.Screen name="Dados" component ={Dados}/>
      <Stack.Screen name="Experiencia" component ={Experiencia}/>
      <Stack.Screen name="Formacao" component ={Formacao}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};
