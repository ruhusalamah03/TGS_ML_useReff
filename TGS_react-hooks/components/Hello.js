import React, { useState, useRef } from 'react';
import { Text, View, TextInput } from 'react-native';
import { styles } from "../assets/style";

export default function HelloWorld(props) {
  const [angka, setAngka] = useState(0);
  const inputRef = useRef(null);
  const changeCountRef = useRef(0);

  const ubahState = (teks) => {
    setAngka(teks);
    changeCountRef.current++;
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="isikan usiamu..?"
        onChangeText={ubahState}
      />
      <Text style={styles.teks}>Hello {props.nama}</Text>
      <Text style={styles.teks}>Saat ini usiamu adalah {angka}</Text>
      <Text style={styles.teks}>Input telah diubah sebanyak {changeCountRef.current} kali</Text>
    </View>
  );
}
