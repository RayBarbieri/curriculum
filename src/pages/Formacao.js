import React from 'react';
import {
    StyleSheet,
    View,
    Text,

} from 'react-native';
import Botaogeral from '../componentes/botaogeral';

const Formacao = ({navigation}) =>{
    return (
        <View style={styles.container1}> 
            <Text style={styles.text}>Escola Estadual João Arruda Brasil</Text>
            <Text style={styles.text}>Formado em 2015</Text>
            <Text style={styles.text}>Tecnico em Segurança do Trabalho</Text>
            <Text style={styles.text}>Formado em 2017</Text>

        <View style={styles.container}>
        <Botaogeral titulo ="Inicio" acao={() => navigation.navigate("Inicio")}/>
        </View>
        </View>
    );

}
const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'left',
        alignItems: 'left',
    },
    container:{
        alignItems: 'center',
        justifyContent:'center',
    },
    text: {
        fontSize: 20,
        margin: 3,
    },
});
export default Formacao;