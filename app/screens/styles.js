import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = () => {
    return StyleSheet.create({
        container: {
            backgroundColor: theme.colors.background,
            width: '100%',
            flex: 1,
        },
        centered: {
            alignItems: 'center',
            justifyContent: 'center',
        }
    });
};

export default styles();