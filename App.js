import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [isAddMode, setIsAddMode] = useState(false);
  const [goals, setGoals] = useState([]);

  // When you add a goal: Add it to the array of goals and close the modal
  const addGoalHandler = enteredGoal => {
    // Ensure that the goal is not blank
    if (enteredGoal.length === 0) {
      return;
    }

    setGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setIsAddMode(false);
  };

  // Filter the goal you want to remove out
  const removeGoalHandler = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  // Close the modal when CANCEL is pressed
  const cancelGoalAddHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        addGoalHandler={addGoalHandler}
        onCancel={cancelGoalAddHandler}
      />
      <FlatList
        data={goals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            handleDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
