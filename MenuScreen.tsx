import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { MenuItem } from './types';
import { styles } from './styles';

interface MenuScreenProps {
    menuItems: MenuItem[];
}

const MenuScreen: React.FC<MenuScreenProps> = ({ menuItems }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                {menuItems.map((item) => (
                    <View key={item.id} style={styles.menuItem}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemPrice}>R{item.price.toFixed(2)}</Text>
                        <Text style={styles.itemCourse}>{item.course}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default MenuScreen;