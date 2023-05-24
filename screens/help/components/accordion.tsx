import { StyleSheet, Text, View, Pressable, PressableProps } from 'react-native'
import React, { useState } from 'react'
import IAccordion from '../../../interfaces/accordion.interface'
import { AntDesign } from '@expo/vector-icons';

const Accordion: React.FC<IAccordion> = (props) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Pressable style={styles.container} onPress={() => setOpen(!open)}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{props.question}</Text>
        {
          open ?
            <AntDesign name="minus" size={24} color="red" />
            :
            <AntDesign name="plus" size={24} color="red" />
        }
      </View>
      {
        open && 
        <Text style={styles.description}>{props.answer}</Text>
      }
    </Pressable>
  )
}

export default Accordion

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 14,
    fontWeight: "600",
    maxWidth: 240
  },
  description: {
    marginTop: 8,
    lineHeight: 20,
    color: '#767676',
  }
})