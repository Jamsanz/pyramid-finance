import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IQuestionCategory from '../../../interfaces/question.category'

const QuestionCategoryCard: React.FC<IQuestionCategory> = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: props.bgColor }]}>
      <View style={styles.iconContainer}>
        {props.icon}
      </View>
      <Text style={styles.title}>Questions About</Text>
      <Text style={styles.category}>{props.category}</Text>
    </View>
  )
}

export default QuestionCategoryCard

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginRight: 16,
    borderRadius: 8
  },
  iconContainer: {
    marginBottom: 16
  },
  title: {
    fontFamily: 'roboto',
    color: '#616161',
    lineHeight: 20
  },
  category: {
    fontFamily: 'poppins_semibold',
    fontWeight: '600'
  }
})