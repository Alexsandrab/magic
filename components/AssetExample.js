import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        A mágica está nos olhos de quem vê, mas vive em quem sente!
      </Text>
      <Image style={styles.logo} source={require('../assets/anara.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: -19,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'verdana',
    color: 'red',
  },
  logo: {
    height: 300,
    width: 300,
  }
});
