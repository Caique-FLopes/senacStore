import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../../../screens/Login';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Perfil" component={Perfil} /> */}
    </Stack.Navigator>
  );
}
