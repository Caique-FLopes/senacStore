import AuthProvider from './app/ViewModels/Providers/UserContexts';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './app/Views/components/templates/Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
      <AuthProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaView>
  );
}
