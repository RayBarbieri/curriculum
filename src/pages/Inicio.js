import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import Botaogeral from '../componentes/botaogeral';

const App = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../imagens/pingu.jpg')} style={styles.imagem} />

            <Text style={styles.intro1}>Olá, esse é o meu Curriculum Vitae</Text>
            <Text style={styles.intro}>Ray Barbieri</Text>

            <Botaogeral titulo ="Inicio" acao={() => navigation.navigate("Inicio")}/>
            <Botaogeral titulo ="Dados" acao={() => navigation.navigate("Dados")}/>
            <Botaogeral titulo ="Experiencia" acao={() => navigation.navigate("Experiencia")}/>
            <Botaogeral titulo ="Formacao" acao={() => navigation.navigate("Formacao")}/>
        </View>
);
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    intro: {
        alignItems: 'center',
        marginBottom: 200,
        fontSize: 50,
    },
    imagem: {
        width: 200,
        height: 200,
    },
    textb:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    
    },
    intro1: {
        alignItems: 'center',
        fontSize: 50,
    },
});

export default App;