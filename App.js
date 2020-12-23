import React, {useEffect, useState} from 'react';
import { StyleSheet, Image, View, ScrollView, ActivityIndicator } from 'react-native';
import Header from './components/header';
import Formulario from './components/formulario';
import Cotizacion from './components/cotizacion';
import axios from 'axios';

const App = () => {

  const [ moneda, guardarMoneda] = useState('');
  const [ criptomoneda, guardarCriptomoneda] = useState('');
  const [ consultarAPI, guardarConsultarAPI] = useState(false);
  const [ resultado, guardarResultado ] = useState([]);
  const [ cargando, guardarCargando ] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if(consultarAPI){
        //consultar la API para la cotizacion
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda},ETH&tsyms=${moneda}`;
        const resultado = await axios.get(url);
        guardarCargando(true);
        //ocultar el spinner y mostrar el resultaod
        setTimeout(() => {
          guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
          guardarConsultarAPI(false);
          guardarCargando(false);
        }, 3000);
      }
    }
    cotizarCriptomoneda();
  }, [consultarAPI]);

  //mostrar elñ spinner y resultado
  const componente = cargando ? <ActivityIndicator size="large" color="#5E49E2" /> : <Cotizacion resultado={resultado} />

  return (
    <ActivityIndicator>
    <ScrollView>
        <Header />

        <Image
          style={styles.imagen}
          source={ require('./assets/img/cryptomonedas.png')}
        />

        <View style={styles.contenido}>
          <Formulario 
            moneda={moneda}
            criptomoneda={criptomoneda}
            guardarMoneda={guardarMoneda}
            guardarCriptomoneda={guardarCriptomoneda}
            guardarConsultarAPI={guardarConsultarAPI}
          />

        </View>

        <View style={{marginTop: 40}}>
        {componente}
        </View>
        
      </ScrollView>
    </ActivityIndicator>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%'
  },
  contenido: {
    marginHorizontal: '2.5%'
  }
});

export default App;
