import { StyleSheet } from 'react-native';
import getTheme from '../../../theme/getTheme';

const theme = getTheme();
const style = StyleSheet.create({
  label: {
    color: theme.grey.greyDefault,
  },
});

export default style;
