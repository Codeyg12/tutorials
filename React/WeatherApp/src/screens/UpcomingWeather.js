import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import ListItem from '../components/ListItem'

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_text={item.dt_txt}
      max={item.main.temp_max}
      min={item.main.temp_min}
    />
  )

  const { container, image } = styles

  return (
    <SafeAreaProvider style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_text}
        />
      </ImageBackground>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  }
})
export default UpcomingWeather
