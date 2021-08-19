import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import { GuessNationalize } from '../services/NationalizeService';

const InputText = () => {
  const [name, setName] = React.useState("");

  const checkText = async () => {
    const data = await GuessNationalize(name);
    console.log(data.country[0].country_id);
  }
  return (
    <SafeAreaView>
      <TextInput
        label="Enter name"
        value={name}
        onChangeText={name => setName(name)}
        style={{marginBottom : 10}}
      />
      <Button title="Guess" onPress={ checkText } />
    </SafeAreaView>
  )
}
const GuessNationalScreen = () => {
  return (
    // <SafeAreaView>
    <View style={{ justifyContent: 'center', flex : 1 , margin : 30}}>
        <InputText />
    </View>
    // </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  input: {
    // height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
});

export default GuessNationalScreen;