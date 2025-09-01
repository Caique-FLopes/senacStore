import { StyleSheet } from 'react-native';
import getTheme from '../../../theme/getTheme';

const theme = getTheme();
const style = StyleSheet.create({
  button: {
    paddingVertical: theme.padding.sm.vertical,
    paddingHorizontal: theme.padding.sm.horizontal,
    backgroundColor: theme.blueDefault,
    alignItems: 'center',
    borderRadius: theme.borderRadius.xl,
    elevation: 5,
  },
  label: {
    fontSize: theme.fontSize.xl,
    color: theme.whiteDefault,
  },
});

export default style;
