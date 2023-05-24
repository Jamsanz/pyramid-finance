import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface IProps {
  title: string;
  children?: string;
  tintColor?: string;
}

const CustomHeaderText: React.FC<IProps> = (props) => {
  return (
    <Text style={styles.title}>{props.title}</Text>
  )
}

export default CustomHeaderText

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontFamily: 'poppins_semibold',
    fontSize: 22,
    fontWeight: "600"
  }
})