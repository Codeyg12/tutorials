import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Tabs />
    </NavigationContainer>
  )
}

//* After using Expo app or QR code to run the app, the app will be displayed on the mobile device. Shaking the device brings up the developer menu. Select "Debug Remote JS" to open the app in the browser. The app will be displayed in the browser and the developer tools can be used to inspect the app.

//* Sometimes you have to add and then remove a <StatusBar> component to get the safe area to work properly.
