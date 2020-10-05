/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import HomeComponent from '.components/HomeComponent';
// import ReadingComponent from '.components/ReadingComponent';
// import {Home,Reading} from './screenName';

// const App = StackNavigation({
//   Home:{
//     screen:HomeComponent,
//     navigationOptions:{
//       headerTile:'Home',
//     },
//   },
//   Reading:{
//     screen:ReadingComponent,
//     navigationOptions:{
//       headerTile:'Reading',
//     },
//   },
// });

AppRegistry.registerComponent(appName, () => App);
