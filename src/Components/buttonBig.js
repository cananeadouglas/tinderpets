import React from "react";
import { TouchableOpacity,
     Text, StyleSheet,
     TouchableOpacityProps 
    } from "react-native";

//tipar o botão
interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function ButtonBig( {
    title,
     ... rest
    
    }: ButtonProps ) {

    return (
        <TouchableOpacity
            style={styles.button}
            { ... rest}
        >
            <Text 
                style={styles.buttonText}>
                { title }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#605091',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#605091',
        marginBottom: 5,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
});