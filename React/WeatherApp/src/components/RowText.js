import React from 'react'
import { Text, View } from 'react-native'

const RowText = ({
  messageOne,
  messageTwo,
  messageOneStyle,
  messageTwoStyle,
  containerStyle
}) => {
  return (
    <View style={containerStyle}>
      <Text style={messageOneStyle}>{messageOne}</Text>
      <Text style={messageTwoStyle}>{messageTwo}</Text>
    </View>
  )
}

export default RowText
