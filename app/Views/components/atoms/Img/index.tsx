import { Image, View, ImageSourcePropType } from 'react-native';
import style from './style';

interface Props {
  src: string | ImageSourcePropType;
}

const Img: React.FC<Props> = ({ src }) => {
  return (
    <View style={style.container}>
      {typeof src === 'string' ? (
        <Image source={{ uri: src }} style={style.image} />
      ) : (
        <Image source={src} style={style.image} />
      )}
    </View>
  );
};

export default Img;
