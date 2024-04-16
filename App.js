import { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [name, setName] = useState('')
  const [nameField, setNameField] = useState('')

  const handleSendName = () => {
    setName(nameField)
  }

  const handleClear = () => {
    setName('')
    setNameField('')
  }

  return (
    <SafeAreaView style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <SafeAreaView style={{flex: 1}} />
      <SafeAreaView style={[styles.centro, {flex: 2}]}>
        {name == '' &&
          <>
        <Image source={require('./assets/user.png')} style={{width: 100, height: 100}}/>
            <TextInput 
              style={styles.input}
              placeholder='Digite seu CPF'
              placeholderTextColor='#999'
              value={nameField}
              onChangeText={text => setNameField(text)}
            />
            <Button title= 'Logar' onPress={handleSendName}
             color="#000000"/>
          </>
        }

        {name != '' &&
          <>
           <Image source={require('./assets/boneco.png')} style={{width: 100, height: 100}}/>
            <Text style={styles.boneco}>Você está logado com CPF: 000.000.000-00</Text>
            <Button title={`CPF NÃO É 000.000.000-00`} onPress={handleClear} color="#000000"/>

          </>
        }
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#eee',
    padding: 10,
    margin: 10,
    width: 300,
  },
  centro:{
    display: 'flex',
    justifycontent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
  },

  boneco:{
    margin: 19,


  }
})