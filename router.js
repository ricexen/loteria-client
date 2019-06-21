import { createStackNavigator, createAppContainer } from 'react-navigation';
import { JoinScreen, SetupScreen } from './app/screens';

const MainNavigator = createStackNavigator(
    {
        Join: JoinScreen,
        Setup: SetupScreen,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Join',
    }
);

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;