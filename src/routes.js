import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import Users from './pages/Users';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Users,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
