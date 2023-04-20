import React from 'react';
import {
    StyleSheet,
    View,
    Text,

} from 'react-native';
import Botaogeral from '../componentes/botaogeral';

const Experiencia = ({navigation}) =>{
    return (
        <View style={styles.container1}> 
            <Text style={styles.text}>Cargo: Empacotador</Text>
            <Text style={styles.text}>Empresa: Supermercados Bigmart</Text>
            <Text style={styles.text}>Periodo: 3 meses</Text>

            <Text style={styles.text}>Cargo: Auxiliar de Laboratorio</Text>
            <Text style={styles.text}>Empresa: Usina Unialcool</Text>
            <Text style={styles.text}>Periodo: 9 meses</Text>

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
export default Experiencia;