import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = ({ goalInputHandler, enteredGoal, addGoalHandler }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Enter Goal'
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title='ADD' onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
