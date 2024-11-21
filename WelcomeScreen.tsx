import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';

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

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Menu'>;

interface Props {
    navigation: WelcomeScreenNavigationProp;
}

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('./_images/chefy.jpeg')}
                    style={styles.image}
                />
                <Text style={styles.heading}>Welcome to Menu Maestro</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.description}>
                    Where every dish is crafted with passion and precision. Explore today's menu, curated just for you by Chef Christoffel. Bon appétit!
                </Text>
                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => navigation.navigate('Menu')}
                >
                    <Text style={styles.menuButtonText}>Menu</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        height: height * 0.60,
        backgroundColor: '#4F4F42',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingBottom: 30,
    },
    image: {
        width: width * 0.85,
        height: height * 0.50,
        resizeMode: 'contain',
    },
    heading: {
        position: 'absolute',
        top: height * 0.55,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        width: width * 0.80,
        marginBottom: 20,
    },
    textContainer: {
        padding: 20,
        alignItems: 'center',
    },
    description: {
        fontSize: 25,
        color: '#333',
        textAlign: 'center',
        marginBottom: 30,
    },
    menuButton: {
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 70,
        borderRadius: 8,
        borderColor: '#636354',
        borderWidth: 4,
    },
    menuButtonText: {
        fontSize: 20,
        color: '#000',
    },
});

export default WelcomeScreen;
