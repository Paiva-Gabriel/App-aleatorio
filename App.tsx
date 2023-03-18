import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, Alert, Button, Image, TouchableOpacity} from 'react-native'

function App(){

  const [img,setImg] = useState(require('./src/biscoito.png'))
  const [text, setText] = useState('Teste')
  const [btn, setBtn] = useState(false)

  let phrase =[
    '"Melhor uma camisinha no seu buraco, do que um buraco na sua camisinha"',
    '"Dias de luta, dias de luta, dias de luta, dias de luta, dias de luta..."',
    '"Não tem galantia, complou porque quis"',
    '"Roube doces de criança, assim voce evita obesidade infantil"',
    '"Sua mulher não vai ver voce chegando bebado em casa se você desmaiar ela com um soco"',
    '"Coma o dobro de carne por dia, assim você anula a causa de algum vegano por ai"',
    '"Alcool não é a solução para os problemas, as drogas sim"',
    '"Arma é que nem bala, quando você mostra, todo mundo quer virar seu amigo"'
  ]

  function Sim(){

    let randomNumber = Math.floor(Math.random() * phrase.length)
    setImg(require('./src/biscoitoAberto.png'))
    setText(phrase[randomNumber])
  }

  function Nao(){
    setImg(require('./src/biscoito.png'))
    setText('')
  }

  return(
    <View style={styles.container}>

      <View style={{position: 'absolute'}}>
        <TouchableOpacity style={[styles.button, {marginTop: 15, borderColor: '#c21d1d' }]} onPress={Nao}>
          <View style={styles.btnArea}>
            <Text style={[styles.btnText, {color: '#c21d1d'}]}>Não</Text>            
          </View>
        </TouchableOpacity>
      </View>

      <View style={{position: 'absolute', marginTop: 1}}>
        <TouchableOpacity style={[styles.button, {marginTop: 15, borderColor: '#c21d1d' }]} onPress={Nao}>
          <View style={styles.btnArea}>
            <Text style={[styles.btnText, {color: '#c21d1d'}]}>Não</Text>            
          </View>
        </TouchableOpacity>
      </View>

      

      <Image source={require('./src/Emoji.png')} style={styles.img}/>

      <Text style={styles.phrase}>Oi gatinha, vi você miando no quintal hoje</Text>
      <Text style={styles.phrase}>Deseja sair com minha humilde pessoa?</Text>

      <TouchableOpacity style={styles.button} onPress={Sim}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnText,{color: '#55df2b'}]}>Sim</Text>
        </View>
      </TouchableOpacity>

      <View>
        {btn && (
          <TouchableOpacity style={[styles.button, {marginTop: 15, borderColor: '#c21d1d' }]} onPress={Nao}>
            <View style={styles.btnArea}>
              <Text style={[styles.btnText, {color: '#c21d1d'}]}>Não</Text>
            </View>
          </TouchableOpacity>
        )}
        
      </View>

      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddddd'
  },
  img:{
    height:230,
    width: 230,
  },
  phrase:{
    fontSize: 20,
    color: '#000',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button:{
    width: 230,
    height: 50,
    borderColor: '#55df2b',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7d22'
  }
})

export default App;