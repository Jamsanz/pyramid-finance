import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../../components/input'
import SearchIcon from '../../assets/icons/input-search.svg';
import questionCategories from './variables/question.catergories';
import QuestionCategoryCard from './components/question.category.card';
import faqs from './variables/faqs';
import Accordion from './components/accordion';

const Help = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
    >
      <Text style={styles.titleText}>How can we help you?</Text>
      <Input
        placeholder='Enter your keyword'
        leftIcon={<SearchIcon />}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.questionCategories}
      >
        {
          questionCategories?.map((category, index) => <QuestionCategoryCard key={index} {...category} />)
        }
      </ScrollView>
      <View style={styles.subtitle}>
        <Text style={styles.subtitleText}>Top Questions</Text>
        <Text style={styles.subtitleTextRed}>View all</Text>
      </View>
      <View style={styles.faqs}>
        {
          faqs?.map((faq, index) => <Accordion key={index} {...faq} />)
        }
      </View>
    </ScrollView>
  )
}

export default Help

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: 'white'
  },
  titleText: {
    fontFamily: 'poppins_semibold',
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 25,
    textAlign: 'center'
  },
  questionCategories: {
    marginTop: 30
  },
  subtitle: {
    marginTop: 31,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subtitleText: {
    fontFamily: 'open_sans',
    fontWeight: '700'
  },
  subtitleTextRed: {
    fontFamily: 'open_sans',
    fontWeight: '700',
    color: '#DF1525'
  },
  questions: {},
  faqs: {} 
})