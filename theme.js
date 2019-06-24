import { DefaultTheme } from 'react-native-paper';
import Color from 'color';

const primary = '#15e899';

export default {
    ...DefaultTheme,
    roundness: 0,
    colors: {
        ...DefaultTheme.colors,
        background: '#0e0413',
        primary,
        accent: '#ec2a72',
        text: 'white',
        disabled: 'white',
        placeholder: Color(primary).darken(.5).hex(),
    }
}