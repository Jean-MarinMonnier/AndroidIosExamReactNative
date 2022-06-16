import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import BookStackNavigator from './navigation/bookStackNavigator';
import LoginStackNavigator from './navigation/loginStackNavigator';

export default function App() {
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: 'books', title: 'Books', focusedIcon: 'menu_book', unfocusedIcon: 'menu_book'},
    { key: 'user', title: 'User', focusedIcon: 'account_circle', unfocusedIcon: 'account_circle' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    books: BookStackNavigator,
    user: LoginStackNavigator
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
