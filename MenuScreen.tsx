import React from 'react';
import { View, Text, ScrollView } from 'react-native';
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