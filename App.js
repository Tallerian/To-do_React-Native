import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard} from 'react-native';
import Task from './component/Task';
import DoneTasks from './component/DoneTasks';
import React, {useState} from 'react';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])
  const [doneItems, setdontItems] = useState([])

  const handleAddTask = () =>{
    Keyboard.dismiss();
    console.log(task);
    setTaskItems([...taskItems, task])
    setTask('');
    
  }

  const completeTask = (index) =>{
    let itemcpy = [...taskItems];
    let newDone = itemcpy[index]
    itemcpy.splice(index, 1);
    setdontItems([...doneItems, newDone])
    setTaskItems(itemcpy);
  }


  return (
    <View style = {styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}>Today's Tasks✔</Text>


        {/* TODAY'S Tasks */}
        <View style = {styles.items}>
        {
          taskItems.map((item, index) => {
            return(
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
            <Task text = {item} />
            </TouchableOpacity>
            )
          })
        }

        {
          doneItems.map((done) => {
            return(
            <TouchableOpacity>
            <DoneTasks text = {done} />
            </TouchableOpacity>
            )
          })
          
        }

        </View>
      </View>
      {/* Writing a task section */}
      <KeyboardAvoidingView behavior={Platform.OS === 'android' ? "height" : "padding"}
        style = {styles.writeTaskWrapper}>
        <TextInput style = {styles.input} placeholder = {'Write your task'} 
          value={task} onChangeText={text => setTask(text)}/>   

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style = {styles.addWrapper}>
            <Text style = {styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  tasksWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },

  items: {
    marginTop: 30,
  },


  writeTaskWrapper: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,

  },

  input:{
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 30,
    borderColor: '#C0C0C0',
    borderWidth: 0.5,
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 40,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 0.5,
  },

  addText: {

  }
  

});
