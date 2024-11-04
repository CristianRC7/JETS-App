import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './components/DrawerNavigator';
import Login from './screens/Login';
import Event from './screens/Event';
import Support from './screens/Support';
import Inscription from './screens/Inscription';
import Exhibitors from './screens/Exhibitors';
import Survey from './components/Survey';
import Form from './screens/Form';
import SelectEventScreen from './screens/SelectEventScreen';
import SplashScreen from './SplashScreen';


import { BackHandler, Alert } from 'react-native';

const Stack = createStackNavigator();

const useBackHandler = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Salir", "¿Estás seguro que deseas salir de la aplicación?", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel"
        },
        {
          text: "Sí", onPress: () => BackHandler.exitApp()
        }
      ]);
      return true; 
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); 
  }, []);
};

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useBackHandler(); 

  useEffect(() => {
    const timer = setTimeout(() => setSplashVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false , gestureEnabled: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        <Stack.Screen name="Event" component={Event} />
        <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen name="Exhibitors" component={Exhibitors} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Survey" component={Survey} options={{ title: 'Encuesta' }} />
        <Stack.Screen name="SelectEventScreen" component={SelectEventScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
