import { ActivityIndicator, View } from 'react-native';
import { RowInput } from '../../components/molecules/RowInput';
import { Button } from '../../components/molecules/Button';
import useLoginViewModel from '../../../ViewModels/Login/useLoginViewModel';

export const Login: React.FC = () => {
  const { loading, handleUsername, handlePassword, handleLogin } =
    useLoginViewModel();
  return (
    <View>
      <View>
        <RowInput
          label="Email:"
          placeholder="Email ou nome do usuario"
          handleChange={handleUsername}
        />
        <RowInput
          label="Senha:"
          placeholder="*******"
          handleChange={handlePassword}
          security={true}
        />
        <Button label="Entrar" onClick={handleLogin} />
      </View>
      {loading && <ActivityIndicator />}
    </View>
  );
};
