import { SafeAreaProvider } from 'react-native-safe-area-context'
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const DATA = [
  {
    dt_text: '2023-02-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  },
  {
    dt_text: '2023-02-18 15:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Clouds'
      }
    ]
  },
  {
    dt_text: '2023-02-18 18:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  }
]

const Item = (props) => {
  const { dt_text, min, max, condition } = props
  return (
    <View style={styles.item}>
      <Feather name="sun" size={50} color="white" />
      <Text style={styles.date}>{dt_text}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_text={item.dt_text}
      max={item.main.temp_max}
      min={item.main.temp_min}
    />
  )

  return (
    <SafeAreaProvider style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_text}
      />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  }
})
export default UpcomingWeather
