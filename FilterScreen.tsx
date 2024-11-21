import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MenuItem } from './types';
import { styles } from './styles';

interface FilterScreenProps {
    menuItems: MenuItem[];
}

const FilterScreen: React.FC<FilterScreenProps> = ({ menuItems }) => {
    const [selectedCourse, setSelectedCourse] = useState('');

    // Filter items by selected course
    const filteredItems = selectedCourse
        ? menuItems.filter(item => item.course === selectedCourse)
        : menuItems;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Filter Menu by Course</Text>
            <Picker
                selectedValue={selectedCourse}
                onValueChange={setSelectedCourse}
                style={styles.picker}
            >
                <Picker.Item label="All" value="" />
                <Picker.Item label="Appetizer" value="Appetizer" />
                <Picker.Item label="Main" value="Main" />
                <Picker.Item label="Dessert" value="Dessert" />
            </Picker>

            <ScrollView>
                {filteredItems.map((item) => (
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
export default FilterScreen;
