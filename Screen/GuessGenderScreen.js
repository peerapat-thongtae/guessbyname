import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';


function GuessGenderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput placeholder="Age" />
    </View>
  );
}

export default GuessGenderScreen;