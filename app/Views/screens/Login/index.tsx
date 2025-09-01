import { ActivityIndicator, View } from 'react-native';
import { RowInput } from '../../components/molecules/RowInput';
import { Button } from '../../components/molecules/Button';
import useLoginViewModel from '../../../ViewModels/Login/useLoginViewModel';
import { SafeAreaView } from 'react-native-safe-area-context';
import Img from '../../components/atoms/Img';
import style from './style';

export const Login: React.FC = () => {
  const { loading, handleUsername, handlePassword, handleLogin } =
    useLoginViewModel();
  return (
    <SafeAreaView style={style.container}>
      <Img src={require('../../../assets/images/senac-logo.png')} />
      <View style={style.form}>
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
    </SafeAreaView>
  );
};
