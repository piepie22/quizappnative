import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Summary = ({ route }) => {
  const { questions, answers } = route.params;
  const isCorrect = (correct, answer) => {
    if (Array.isArray(correct)) {
      return Array.isArray(answer) && correct.sort().toString() === answer.sort().toString();}
    return correct === answer;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <Text style={styles.score} testID="total">
        Score: {answers.filter((a, i) => isCorrect(questions[i].correct, a)).length} / {questions.length}
      </Text>

      {questions.map((q, i) => {
        const correct = q.correct;
        const answer = answers[i];
        const isMultiple = Array.isArray(correct);
        return (
          <View key={i} style={styles.question}>
            <Text style={styles.prompt}>{q.question}</Text>
            {q.choices.map((choice, choiceIndex) => {
  const chosen = isMultiple ? answer.includes(choiceIndex) : answer === choiceIndex;
  const isCorrectChoice = isMultiple ? correct.includes(choiceIndex) : correct === choiceIndex;

  let style = {};
  if (isCorrectChoice && chosen) style = styles.correct;
  else if (chosen && !isCorrectChoice) style = styles.incorrect;
  else if (isCorrectChoice) style = styles.correct;
  return (
    <Text key={choiceIndex} style={[styles.choice, style]}>{choice}</Text>);})} 
    </View> );})}</View>);};


//stylesteet area
const styles = StyleSheet.create({
  container: { 
    padding: 20,
  },
  title: { 
    fontFamily: 'Arial',
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 10,
  },
  score: { 
    fontSize: 15, 
    textAlign: 'center', 
    marginBottom: 15,
  },
  question: { 
    fontFamily: 'Arial',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  prompt: { 
    
    fontWeight: 'bold', 
    marginBottom: 5,
  },
  choice: { 
    fontSize: 16, 
  },
  correct: { 

    color: 'green',
  },
  incorrect: {  
    color: 'red',
  },
});

export default Summary;
