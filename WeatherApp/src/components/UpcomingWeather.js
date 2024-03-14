import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, Text } from 'react-native'

const UpcomingWeather = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Text>Upcoming Weather</Text>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink'
  }
})
export default UpcomingWeather
