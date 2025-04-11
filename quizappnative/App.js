import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Question from './src/components/Question';
import Summary from './src/components/Summary';

const Stack = createNativeStackNavigator();
//questions 
const questions = [
  { question: 'Which of the following is a track in the UCF Digital Media BA?',
    type: 'multiple-choice',
    choices: ['Web Design', 'Game Design', 'Both Web Design and Game Design', 'None of the above'],
    correct: 2,},
  { question: 'Which of the following are UCF’s school colors? Select all that apply.',
    type: 'multiple-answer',
    choices: ['Green', 'Black', 'Gold', 'Blue'],
    correct: [1, 2], },
  { question: 'True or false: The sky is blue.',
    type: 'true-false',
    choices: ['True', 'False'],
    correct: 0, },
];

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Question" 
        component={Question} initialParams={{ questions, index: 0, answers: [] }} />
        <Stack.Screen name="Summary" 
        component={Summary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
