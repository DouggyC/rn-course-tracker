import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet, Modal} from 'react-native';

const GoalInput = ({onAddGoal, onCancel, visible}) => {
  const [enteredGoal, setEnterGoal] = useState('');
  const goalInputHandler = enteredText => setEnterGoal(enteredText);

  const addGoalHandle = () => {
    onAddGoal(enteredGoal);
    setEnterGoal('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandle} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;
