import React from 'react';
import {
    StyleSheet,
    View,
    Text,

} from 'react-native';
import Botaogeral from '../componentes/botaogeral';

const Dados = ({navigation}) =>{
    return (
        <View style={styles.container1}> 
            <Text style={styles.text}>Nome: Ray Barbieri</Text>
            <Text style={styles.text}>Telefone: (18) 99762-8698</Text>
            <Text style={styles.text}>Email: raysm_2007@hotmail.com</Text>
            <Text style={styles.text}>Endereço: Avenida Santo Antonio, 274</Text>
            <Text style={styles.text}>Sexo :Masculino</Text>
            <Text style={styles.text}>Relacionamento: Solteiro</Text>
            <Text style={styles.text}>Carteira de Habilitação: A,B</Text>

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
export default Dados;