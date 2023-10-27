import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export default function Match() {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Hello World!!! Match</Text>
            </View>
        </SafeAreaView>
    );
  
};

export const styles = StyleSheet.create({

      container: {
        //flex: 1,
        height: 170,
        width: '100%', // usar 100% da largura
        justifyContent: 'space-between', // espalhar para os lados
        flexDirection: 'row', // espalhar de forma de linhas
        alignItems: 'center', // centralizar os itens
        marginTop: getStatusBarHeight(), // margem superior iphone + 10
        textAlign: 'center', 
        padding: 45, // 
      },

    imagem: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderEndWidth: 2,
        borderColor: '#605091',
    },

    nome: {
        fontSize: 25,
        color: '#605091',
        fontWeight: "bold",
    },

});