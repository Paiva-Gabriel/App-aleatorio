import React, { useState } from "react";
import {View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity} from 'react-native'

let timer: number | null = null;
let ss = 0;
let mm = 0;
let hh = 0;

function Cronometer(){  

  const [number, setNumber] = useState('00:00:00')
  const [button, setButton] = useState('INICIAR')
  const [last, setLast] = useState(null)


  function Start(){
    if(timer !== null){
      clearInterval(timer)
      timer = null
      setButton('Iniciar')
    }else{
      timer = setInterval(()=>{
        ss++

        if(ss == 60){
          ss=0
          mm++
        }

        if(mm == 60){
          mm=0
          hh++
        }

        let format = (hh <10 ? '0' + hh : hh) + ':' 
        + (mm < 10 ? '0' + mm : mm) + ':'
        + (ss < 10 ? '0' + ss : ss)

        setNumber(format);

      }, 1000)

      setButton('PAUSAR')
    }
  }

  function Clean(){
    if(timer !== null){
      clearInterval(timer)
      timer = null
    }

    setLast(number)

    setNumber('00:00:00')
    ss = 0
    mm = 0
    hh = 0

    setButton('INICIAR')
  }

  return(
    <View style={styles.container}>
      <Image source={require('./src/crono.png')}/>

      <Text style={styles.timer}>{number}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={Start}>
          <Text style={styles.btnText}>{button}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={Clean}>
          <Text style={styles.btnText}>ZERAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.lastTimeArea}>
        <Text style={styles.lastTime}>
          {last? 'Ultimo Tempo: ' + last : ''}
        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop: -160,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 130,
    height: 40
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  lastTimeArea:{
    marginTop:40,
  },
  lastTime:{
    fontSize: 23,
    color: '#fff',
    fontStyle: 'italic'
  }
})

export default Cronometer;