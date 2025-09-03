import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../../screens/Login';
import Perfil from '../../../screens/Perfil';
import getTheme from '../../../theme/getTheme';
import { useAuth } from '../../../../ViewModels/Providers/UserContexts';
import { StyleSheet } from 'react-native';
import ProductScreen from '../../../screens/Product';

const theme = getTheme();

export type RootStackList = {
  Login: undefined;
  Perfil: undefined;
  Products: undefined;
};

const Stack = createNativeStackNavigator<RootStackList>();
export default function RootStack() {
  //conditional splashScreen
  //if(isLoading) return <Splash/>
  const teste = useAuth();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.blueDefault },
        contentStyle: style.pages,
      }}
    >
      {teste.user?.token ? (
        // <Stack.Screen
        //   name="Perfil"
        //   component={Perfil}
        //   options={{ title: '' }}
        // />
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={{ title: 'Produtos' }}
        />
      ) : (
        <Stack.Screen name="Login" component={Login} options={{ title: '' }} />
      )}
    </Stack.Navigator>
  );
}

const style = StyleSheet.create({
  pages: {
    justifyContent: 'space-around',
    height: '100%',
    backgroundColor: theme.whiteDefault,
    paddingVertical: 30,
    paddingHorizontal: 40,
    gap: 500,
  },
});
