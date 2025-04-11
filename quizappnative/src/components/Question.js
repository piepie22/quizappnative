import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Question = ({ navigation, route }) => {
  const { questions, index, answers } = route.params;
  const question = questions[index];
  const isMultipleAnswer = question.type === 'multiple-answer';
  const [selected, setSelected] = useState(isMultipleAnswer ? [] : null);

  const toggleSelection = (choiceIndex) => {
    if (isMultipleAnswer) {
      setSelected((prev) =>  prev.includes(choiceIndex) ? prev.filter((i) => i !== choiceIndex) : [...prev, choiceIndex]);
    } else { setSelected(choiceIndex); }};

  const handleNext = () => {
    const updatedAnswers = [...answers, selected];
    if (index + 1 < questions.length) { navigation.push('Question', { questions, index: index + 1, answers: updatedAnswers,});
    } else { navigation.navigate('Summary', { questions, answers: updatedAnswers,});}};
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>{question.question}</Text>
      {question.choices.map((choice, i) => (
        <View key={i} style={styles.button}>
          <Button title={choice} testID="choices" onPress={() => toggleSelection(i)} 
          color={ isMultipleAnswer ? selected.includes(i) ? 'blue' : 'grey' : 
          selected === i ? 'blue' : 'grey' } /> </View>))}
      <View style={styles.nextButton}>
      <Button title="Next Question" onPress={handleNext} testID="next-question" color="blue" />
      </View> </View> );};


//stylesheet area
const styles = StyleSheet.create({
  container: {
    fontFamily: 'Arial',
    padding: 125,
    justifyContent: 'center',
  },
  prompt: {
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginVertical: 5,
  },
  nextButton: {
    marginTop: 20,
  },
});

export default Question;
