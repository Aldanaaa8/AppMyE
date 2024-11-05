import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                colors={['#3E815D', '#33694C', '#1D3B2B', '#11241A']}
                style={styles.button}
            >
                <Text style={styles.text}>Iniciar Sesión</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: '#F6FCF9',
        marginTop: 10,
    },
    button: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: 315,
        marginTop: 80,
    },
});
