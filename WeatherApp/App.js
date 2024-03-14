import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {Feather} from '@expo/vector-icons'

export default function App() {
  return (
    <SafeAreaProvider style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={24} color='black' />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its snowing</Text>
        <Text style={styles.message}>Its perfect snuggle weather</Text>
      </View>
    </SafeAreaProvider>
  )
}

//* After using Expo app or QR code to run the app, the app will be displayed on the mobile device. Shaking the device brings up the developer menu. Select "Debug Remote JS" to open the app in the browser. The app will be displayed in the browser and the developer tools can be used to inspect the app.

//* Sometimes you have to add and then remove a <StatusBar> component to get the safe area to work properly.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    backgroundColor: 'pink',
    flex: 1
  },
  temp: {
    fontSize: 48
  },
  feels: {
    fontSize: 30
  },
  highLow: {
    fontSize: 24
  },
  highLowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
