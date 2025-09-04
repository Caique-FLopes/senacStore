import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../../screens/Login';
import getTheme from '../../../theme/getTheme';
import { useAuth } from '../../../../ViewModels/Providers/UserContexts';
import { StyleSheet } from 'react-native';
import ProductScreen from '../../../screens/Product/ProductScreen';
import HomeScreen from '../../../screens/Home/HomeScreen';

const theme = getTheme();

export type RootStackList = {
  Login: undefined;
  Perfil: undefined;
  Home: undefined;
  Product: { productId: number };
};

const Stack = createNativeStackNavigator<RootStackList>();

export default function RootStack() {
  //conditional splashScreen
  //if(isLoading) return <Splash/>
  const { user } = useAuth();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.blueDefault },
        contentStyle: style.pages,
      }}
    >
      {user?.token ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Inicio' }}
          />
          <Stack.Screen
            name="Product"
            component={ProductScreen}
            options={{ title: 'Produto' }}
          />
        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
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
