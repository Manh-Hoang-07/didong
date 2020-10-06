import {StackNavigation} from '@react-navigation/stack';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import ReadingComponent from './components/ReadingComponent';

const MainNavigator = createStackNavigator({
    Reading: {
        screen:ReadingComponent
    },
  });
  
  const screenName = createAppContainer(MainNavigator);
  
  export default screenName;