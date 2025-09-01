import { StyleSheet } from 'react-native';
import getTheme from '../../../theme/getTheme';

const theme = getTheme();
const style = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: theme.grey.grey4Default,
    backgroundColor: theme.whiteDefault,
  },
  placeholder: {
    color: theme.grey.grey3Default,
  },
});

export default style;
