import AuthProvider from './app/ViewModels/Providers/UserContexts';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './app/Views/components/templates/Navigation';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AuthProvider>
  );
}
