import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screens/loginScreen';
import HomeScreen from './src/Screens/homeScreen';
import Cadastro from './src/Screens/cadastro';
import Redefinicao from './src/Screens/redefinicao';
import Confirmation from './src/Pages/confirmation';
import Complete from './src/Pages/complete';
import Information from './src/Pages/information';
import Geolocation from './src/Pages/geolocation';

import Welcome from './src/Pages/welcome';
import UserIdentification from './src/Pages/userIdentification';
import AuthRoutes from './src/Routes/tab.routes';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen options={ {headerShown: false} } name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={ {headerShown: false} } name="Cadastro" component={Cadastro} />
        <Stack.Screen options={ {headerShown: false} } name="Redefinicao" component={Redefinicao} /> 
        <Stack.Screen options={ {headerShown: false} } name="Welcome" component={Welcome} />  */}
        <Stack.Screen options={ {headerShown: false} } name="UserIdentification" component={UserIdentification} />
        <Stack.Screen options={ {headerShown: false} } name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options={ {headerShown: false} } name='Confirmation' component={Confirmation} /> 
        <Stack.Screen options={ {headerShown: false} } name='AuthRoutes' component={AuthRoutes} /> 
        <Stack.Screen options={ {headerShown: false} } name='Complete' component={Complete} /> 
        <Stack.Screen options={ {headerShown: false} } name='Information' component={Information} />
        <Stack.Screen options={ {headerShown: false} } name='Geolocation' component={Geolocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 

// { user ? <Home /> : <Auth }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
