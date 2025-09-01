import { StyleSheet } from 'react-native';
import getTheme from '../../theme/getTheme';

const theme = getTheme();
const style = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    height: '100%',
    backgroundColor: theme.whiteDefault,
    paddingVertical: 30,
    paddingHorizontal: 40,
  },
  form: {
    gap: 20,
  },
});

export default style;
