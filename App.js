import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsScreenShow from './src/screens/ResultsShowScreen';
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import SignUp from './src/screens/Signup';
import SignIn from './src/screens/SignIn';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
    Up: SignUp,
    In: SignIn
  },
  {
    initialRouteName: "In",
    defaultNavigationOptions: {
      title: "RestaurantApp",
      headerRight: null
    }
  }
);

export default createAppContainer(navigator);
