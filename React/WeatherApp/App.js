import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'

export default function App() {
  const [loading, error, weather] = useGetWeather()

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <StatusBar barStyle={'light-content'} />
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size="large" color={'blue'} />
      )}
    </View>
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
