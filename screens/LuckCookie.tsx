import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, Alert, Button, Image, TouchableOpacity} from 'react-native'

function App(){

  const [img,setImg] = useState(require('./src/biscoito.png'))
  const [text, setText] = useState('Teste')

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

  function brokenCookie(){

    let randomNumber = Math.floor(Math.random() * phrase.length)
    setImg(require('./src/biscoitoAberto.png'))
    setText(phrase[randomNumber])
  }

  function restartCookie(){
    setImg(require('./src/biscoito.png'))
    setText('')
  }

  return(
    <View style={styles.container}>
      <Image source={img} style={styles.img}/>

      <Text style={styles.phrase}>{text}</Text>

      <TouchableOpacity style={styles.button} onPress={brokenCookie}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {marginTop: 15, borderColor: '#121212' }]} onPress={restartCookie}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, {color: '#121212'}]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>
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
    color: '#dd7d22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button:{
    width: 230,
    height: 50,
    borderColor: '#dd7d22',
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