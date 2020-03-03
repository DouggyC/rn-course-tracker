import React, {useState} from 'react';
import {StyleSheet, View, Button, FlatList} from 'react-native';
import {uuid} from 'uuidv4';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  
  console.log("TCL: App -> courseGoals", courseGoals)

  const addGoalHandler = goalTitle => {
    if (goalTitle.length === 0) return;

    setCourseGoals([...courseGoals, {id: uuid(), value: goalTitle}]);
    setIsAddMode(false);
  };
  const removeGoalHandler = goalId => {
    console.log('TCL: App -> goalId', goalId);
    setCourseGoals(courseGoals.filter(goal => goal.id !== goalId));
  };

  const cancelGoalAdditionHandler = () => setIsAddMode(false);

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            // id={itemData.item.id}
            title={itemData.item.value}
            onDelete={() => removeGoalHandler(itemData.item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

export default App;
