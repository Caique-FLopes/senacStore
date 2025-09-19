import { ActivityIndicator, TouchableOpacity, View, Text } from 'react-native';
import { RowInput } from '../../components/molecules/RowInput';
import { Button } from '../../components/molecules/Button';
import useLoginViewModel from '../../../ViewModels/Login/useLoginViewModel';
import { SafeAreaView } from 'react-native-safe-area-context';
import Img from '../../components/atoms/Img';
import style from './style';

const Login: React.FC = () => {
  const { loading, handleUsername, handlePassword, handleLogin, navigator } =
    useLoginViewModel();
  return (
    <SafeAreaView>
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
        <TouchableOpacity onPress={() => navigator.navigate('Register')}>
          <Text style={{ textAlign: 'center' }}>Criar uma nova conta</Text>
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator />}
    </SafeAreaView>
  );
};

export default Login;
