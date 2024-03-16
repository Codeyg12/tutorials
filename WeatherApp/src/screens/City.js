import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'

const City = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={styles.imageLayout}
      >
        <Text style={[styles.cityName, styles.cityText]}>San Diego</Text>
        <Text style={[styles.countryName, styles.cityText]}>California</Text>
        <View style={styles.populationWrapper}>
          <Feather name="user" size={50} color="red" />
          <Text style={styles.populationText}>420</Text>
        </View>
        <View style={styles.riseSetWrapper}>
          <Feather name="sunrise" size={50} color={'white'} />
          <Text style={styles.riseSetText}>10:46:58am</Text>
          <Feather name="sunset" size={50} color={'white'} />
          <Text style={styles.riseSetText}>17:28:15pm</Text>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
    flexDirection: 'row',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
    fontWeight: 'bold'
  },
  riseSetWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  }
})

export default City
