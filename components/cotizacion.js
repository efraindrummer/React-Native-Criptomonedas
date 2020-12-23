import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Cotizacion = ({resultado}) => {

    if (Object.keys(resultado).length === 0) return null;

    return ( 
        <View style={styles.resultado}>
            <Text styel={[styles.texto, styles.precio]}>
                <Text stye={styles.span}>{resultado.PRICE}</Text>
            </Text>

            <Text styel={styles.texto}>Precio mas alto del dia: {' '}
                <Text stye={styles.span}>{resultado.HIGHDAY}</Text>
            </Text>

            <Text styel={styles.texto}>Precio mas bajo del dia: {' '}
                <Text stye={styles.span}>{resultado.LOWDAY}</Text>
            </Text>

            <Text styel={styles.texto}>Variacion del as ultimas 24hrs: {' '}
                <Text stye={styles.span}>{resultado.CHANGEPCT24HOUR}</Text>
            </Text>

            <Text styel={styles.texto}>Ultima Actualizacion: {' '}
                <Text stye={styles.span}>{resultado.LASTUPDATE}</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    resultado: {
        backgroundColor: '#5E49E2',
        padding: 20,
        marginTop: 20
    },
    texto: {
        color: '#FFF',
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        marginBottom: 10
    },
    precio: {
        fontSize: 38
    },
    span: {
        fontFamily: 'Lato-Black',
    }
})
 
export default Cotizacion;