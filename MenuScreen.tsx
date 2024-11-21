import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MenuItem } from './types';
import { styles } from './styles';

// Code Attribution-->
// TITLE: MAST5112/d/p/w MODULE MANUAL/GUIDE 2024-->
// Author: The Independent Institute of Education (Pty) Ltd 2024-->
// Date: 2024 -->
// Version: (First Edition: 2012)-->
// Avialabe:(https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7B8B4938D0-6B6B-44E4-A2D8-5551E6D3AE27%7D&file=MAST5112MM.docx&action=default&mobileredirect=true)

// <!--Code Attribution-->
// <!--Yusra, A. 2024.
// This code has been adapted from classwrok taught by Yusra.
// Please see the above refrence for the MAST Module Manual to find adapted source code-->

interface MenuScreenProps {
    menuItems: MenuItem[];
}

const MenuScreen: React.FC<MenuScreenProps> = ({ menuItems }) => {
    const [selectedCourse, setSelectedCourse] = useState(''); // State to manage selected course

    // Filter items by selected course
    const filteredItems = selectedCourse
        ? menuItems.filter(item => item.course === selectedCourse)
        : menuItems;

    // Calculate total number of dishes, total price, and average price
    const totalDishes = filteredItems.length;
    const totalPrice = filteredItems.reduce((acc, item) => acc + item.price, 0);
    const averagePrice = totalDishes > 0 ? totalPrice / totalDishes : 0;

    return (
        <View style={styles.container}>
            {/* Summary Container */}
            <View style={styles.summaryContainer}>
                <Text style={styles.summaryHeading}>Today's Menu Summary</Text>
                <Text style={styles.summaryText}>Total Dishes: {totalDishes}</Text>
                <Text style={styles.summaryText}>Total Price: R{totalPrice.toFixed(2)}</Text>
                <Text style={styles.summaryText}>Average Price: R{averagePrice.toFixed(2)}</Text>
            </View>

            {/* Filter by Course */}
            <Text style={styles.title}>Filter by Course</Text>
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

            {/* Menu Items */}
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

export default MenuScreen;
