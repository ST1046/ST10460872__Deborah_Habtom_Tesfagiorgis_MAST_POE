import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WelcomeScreen from './WelcomeScreen';
import MenuScreen from './MenuScreen';
import FilterScreen from './FilterScreen';
import StaffScreen from './StaffScreen';
import { MenuItem } from './types';
import { styles } from './styles';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: '1', name: 'Salad', price: 50, course: 'Appetizer', description: 'Fresh greens with dressing' },
    { id: '2', name: 'Steak', price: 150, course: 'Main', description: 'Grilled steak with sides' },
    { id: '3', name: 'Cake', price: 70, course: 'Dessert', description: 'Chocolate layered cake' },
  ]);

  // Function to add a menu item
  const addMenuItem = (item: MenuItem) => {
    setMenuItems((prevItems) => [...prevItems, item]);
  };

  // Function to remove a menu item by ID
  const removeMenuItem = (id: string) => {
    setMenuItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName = 'home-outline';

            if (route.name === 'Welcome') {
              iconName = 'home-outline';
            } else if (route.name === 'Menu') {
              iconName = 'restaurant-outline';
            } else if (route.name === 'Staff') {
              iconName = 'person-add-outline';
            } else if (route.name === 'Filter') {
              iconName = 'filter-outline';
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
          name="Filter"
          children={() => <FilterScreen menuItems={menuItems} />}
          options={{ headerShown: true }}
        />
        <Tab.Screen
          name="Staff"
          children={() => (
            <StaffScreen
              menuItems={menuItems}
              addMenuItem={addMenuItem}
              removeMenuItem={removeMenuItem}
            />
          )}
          options={{ headerShown: true }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
