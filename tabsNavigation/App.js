import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Detalle from './screens/Detalle'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

 function Tabs() {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007BFF',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingBottom: 5,
            height: 60,
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
  );
}
  export default function App(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
        <Stack.Screen name="Detalle" component={Detalle} options={{title: 'Detalles del usuario'}}/>
      </Stack.Navigator>

      </NavigationContainer>    );
  }