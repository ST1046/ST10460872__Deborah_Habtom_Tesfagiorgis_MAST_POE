import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MenuItem } from './types';
import { styles } from './styles';

interface StaffScreenProps {
    addMenuItem: (item: MenuItem) => void;
}

const StaffScreen: React.FC<StaffScreenProps> = ({ addMenuItem }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [course, setCourse] = useState('');
    const [description, setDescription] = useState('');

    const handleAddItem = () => {
        if (name && price && course && description) {
            const newItem: MenuItem = {
                id: Date.now().toString(),
                name,
                price: parseFloat(price),
                course,
                description,
            };
            addMenuItem(newItem);
            setName('');
            setPrice('');
            setCourse('');
            setDescription('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add Menu Item</Text>
            <Text style={styles.title}>Item Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Item Name"
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.title}>Item Price</Text>
            <TextInput
                style={styles.input}
                placeholder="Price"
                value={price}
                keyboardType="numeric"
                onChangeText={setPrice}
            />
            <Text style={styles.title}>Select Course</Text>
            <Picker
                selectedValue={course}
                onValueChange={setCourse}
                style={styles.picker}
            >
                <Picker.Item label="Appetizer" value="Appetizer" />
                <Picker.Item label="Main" value="Main" />
                <Picker.Item label="Dessert" value="Dessert" />
            </Picker>
            <Text style={styles.title}>Item Description</Text>
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
            />
            <TouchableOpacity style={styles.menuButton} onPress={handleAddItem}>
                <Text style={styles.menuButtonText}>Add Item</Text>
            </TouchableOpacity>
        </View>
    );
};

export default StaffScreen;

