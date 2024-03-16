import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

const CurrentWeather = () => {
  const {
    bodyWrapper,
    container,
    description,
    feels,
    highLow,
    highLowWrapper,
    message,
    temp,
    wrapper
  } = styles
  return (
    <SafeAreaProvider style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          messageOne={'High: 8'}
          messageTwo={'Low: 6'}
          messageOneStyle={highLow}
          messageTwoStyle={highLow}
          containerStyle={highLowWrapper}
        />
      </View>
      <RowText
        messageOne={'Its snowing'}
        messageTwo={'Its perfect snuggle weather'}
        messageOneStyle={description}
        messageTwoStyle={message}
        containerStyle={bodyWrapper}
      />
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

export default CurrentWeather
