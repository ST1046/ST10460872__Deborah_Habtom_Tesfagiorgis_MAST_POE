import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4F4F42',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        textAlign: 'left'
    },
    input: {
        backgroundColor: '#fff',
        color: '#2e2e26',
        padding: 10,
        marginBottom: 15,
        borderRadius: 8,
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    menuItem: {
        backgroundColor: '#fff',
        marginBottom: 20,
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },

    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4F4F42',
    },
    itemPrice: {
        fontSize: 16,
        color: '#D46A6A',
    },
    itemCourse: {
        fontSize: 14,
        color: '#777',
    },
    itemDescription: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
    },
    menuButton: {
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 70,
        borderRadius: 8,
        borderColor: '#636354',
        borderWidth: 4,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuButtonText: {
        fontSize: 20,
        color: '#000',
    },

    // Summary Container styles
    summaryContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    summaryText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4F4F42',
        marginBottom: 5,
    },
    summaryHeading: {
        color: "#4F4F42",
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
    },
});
