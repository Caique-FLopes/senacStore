import { SafeAreaView } from 'react-native';
import { Login } from './app/Views/screens/Login';

import AuthProvider from './app/ViewModels/Providers/UserContexts';

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaView
        style={{
          justifyContent: 'space-around',
          height: '100%',
          backgroundColor: '#89c2dd',
          paddingVertical: 30,
          paddingHorizontal: 40,
        }}
      >
        <Login />
      </SafeAreaView>
    </AuthProvider>
  );
}
