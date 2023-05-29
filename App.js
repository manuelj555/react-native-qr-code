import { StyleSheet, Text, View } from 'react-native';
import { QRCodeScanner } from './src/components/QRCodeScanner';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola JEJEJE</Text>
      {/* <QRCodeScanner /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
