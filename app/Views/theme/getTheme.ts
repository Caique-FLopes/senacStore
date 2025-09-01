import { Platform } from 'react-native';

const commonTheme = {
  fontSize: {
    sm: 8,
    md: 14,
    lg: 20,
    xl: 26,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 28,
  },
  padding: {
    sm: { vertical: 4, horizontal: 10 },
    md: { vertical: 8, horizontal: 14 },
    lg: { vertical: 12, horizontal: 18 },
  },
};

const themes = {
  ios: {
    redDefault: '#FF383C',
    orangeDefault: '#FF8D28',
    yellowDefault: '#FFCC00',
    greenDefault: '#34C759',
    mintDefault: '#00C8B3',
    teanDefault: '#00C3D0',
    cyanDefault: '#00C0E8',
    blueDefault: '#0088FF',
    indigoDefault: '#6155F5',
    purpleDefault: '#CB30E0',
    pinkDefault: '#FF2D55',
    brownDefault: '#AC7F5E',
    blackDefault: '#000000',
    whiteDefault: '#FFFFFF',
    grey: {
      greyDefault: '#8E8E93',
      grey2Default: '#AEAEB2',
      grey3Default: '#C7C7CC',
      grey4Default: '#D1D1D6',
      grey5Default: '#E5E5EA',
      grey6Default: '#F2F2F7',
    },
    backgroundGlass: {
      backgroundGlassDark: 'rgba(0, 0, 0, 0.6)',
      backgroundGlassLight: 'rgba(0, 0, 0, 0.001)',
      shadowGlass: 'rgba(0, 0, 0, 0.08)',
    },
  },
  android: {
    background: '#ffffff',
    primary: '#6200ee',
    text: '#212121',
  },
};

export default function getTheme() {
  if (Platform.OS === 'ios')
    return {
      ...commonTheme,
      ...themes.ios,
    };
  else
    return {
      ...commonTheme,
      ...themes.ios,
    };
}
