import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import { TEST_KEY } from '@env'

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={'blue'} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Tabs />
    </NavigationContainer>
  )
}

//* After using Expo app or QR code to run the app, the app will be displayed on the mobile device. Shaking the device brings up the developer menu. Select "Debug Remote JS" to open the app in the browser. The app will be displayed in the browser and the developer tools can be used to inspect the app.

//* Sometimes you have to add and then remove a <StatusBar> component to get the safe area to work properly.

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})
