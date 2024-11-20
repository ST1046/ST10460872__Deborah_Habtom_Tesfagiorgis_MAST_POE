import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WelcomeScreen from './WelcomeScreen';
import MenuScreen from './MenuScreen';
import StaffScreen from './StaffScreen';
import { MenuItem } from './types';
import { styles } from './styles';

const Tab = createBottomTabNavigator();

interface AppProps {
  menuItems: MenuItem[];
  addMenuItem: (item: MenuItem) => void;
}

const App: React.FC<AppProps> = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const addMenuItem = (item: MenuItem) => {
    setMenuItems((prevItems) => [...prevItems, item]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string = 'home-outline';

            if (route.name === 'Welcome') {
              iconName = 'home-outline';
            } else if (route.name === 'Menu') {
              iconName = 'restaurant-outline';
            } else if (route.name === 'Staff') {
              iconName = 'person-add-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#4F4F42', height: 60 },
          tabBarLabelStyle: { fontSize: 16 },
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Tab.Screen
          name="Menu"
          children={() => <MenuScreen menuItems={menuItems} />}
          options={{ headerShown: true }}
        />
        <Tab.Screen
          name="Staff"
          children={() => <StaffScreen addMenuItem={addMenuItem} />}
          options={{ headerShown: true }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
