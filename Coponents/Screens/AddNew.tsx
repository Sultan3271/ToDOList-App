import { View, Text, TextInput, TouchableOpacity,Image, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from '../../Styling/style'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useDispatch, useSelector } from 'react-redux';
import { addNewTask } from '../Redux/action';
import { firebaseConfig } from '../../firebaseConfig';
import {getDatabase, onValue, push, ref, set } from "firebase/database";
import { initializeApp } from 'firebase/app';
const app = initializeApp(firebaseConfig);
const db =  getDatabase(app);
const AddNewTask = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [DATE, setDATE]= useState("");
  const [Time, setTime]= useState("");
  const [title,setTitle] = useState("");
  const [desc, setDesc] =  useState("");
  const [task,setTask] = useState([]);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    setTimePickerVisibility(false)
  };

  const handleConfirmDate = (date) => {
    const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    setDATE(formattedDate);
    hideDatePicker();
  };
  
  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${period}`;
  };
  const handleConfirmTime = (time) => {
    const formattedTime = formatTime(time);
    setTime(formattedTime);
    hideDatePicker();
  };
 
 

// redux work is here

const dispatch = useDispatch();
const tasks = useSelector((state) =>state.reducer);

const handleData =()=>{
  if( title === ""){
    Alert.alert("Please give a title");
  }
  else if(DATE === ""){
    Alert.alert("No date selected")
  }
  else if(Time === ""){
  Alert.alert("No time selected")
  }
  else{
    const dbref= ref(db);
    const newTaskRef= push(dbref,'Tasks');
    const newObj={
      Title : title,
      Description: desc,
      Date: DATE,
      Time: Time,
      key: newTaskRef.key,
    }
    
    set(newTaskRef,newObj)
    .then(() =>{ 
      Alert.alert("Task Added Successfully!"); 
    })
    .catch(() =>{
      Alert.alert("Error adding task!");
    })

    dispatch(addNewTask(newObj));
  setDATE('');
  setTime('');
  setDesc('');
  setTitle('');
      
  
    
    
  }
 }




//redux end


  return (
    <View style={[styles.container,{backgroundColor:'#2a9d8f'}]}>
      <View style={styles.headingTextContainer}>
        <Text style={styles.headingText}>Add new Task</Text>
        </View>
        <View style={styles.taskForm}>
          <View style={styles.taskInputContainer}>
            <TextInput style={styles.taskInput} value={title} placeholder='Task title...' onChangeText={(t)=>setTitle(t)}>

            </TextInput>
          </View>
          <View style={styles.taskInputContainer}>
            <TextInput style={[styles.taskInput,{height:50}]} value={desc} onChangeText={(d)=>setDesc(d)} placeholder='Description...(optional)'>

            </TextInput>
          </View>
          <View style={[styles.taskInputContainer,{flexDirection:'row',}]}>
          <TextInput value={DATE}   style={{borderBottomWidth:1,borderBottomColor:'#d8e2dc',width:150,margin:4,alignItems:'center'}}>

</TextInput>
<TouchableOpacity style={{marginTop:10,marginLeft:10,}} onPress={showDatePicker}>
  <Image style={styles.dateIcon} source={{uri:"https://cdn-icons-png.flaticon.com/128/10691/10691802.png"}}/>
</TouchableOpacity>
<DateTimePickerModal
style={{marginTop:20,}}
isVisible={isDatePickerVisible}
mode="date"
onConfirm={handleConfirmDate}
onCancel={hideDatePicker}
/>
          </View>
          <View style={[styles.taskInputContainer,{flexDirection:'row',}]}>
          <TextInput value={Time}   style={{borderBottomWidth:1,borderBottomColor:'#d8e2dc',width:150,margin:4,alignItems:'center'}}>

</TextInput>
<TouchableOpacity style={{marginTop:10,marginLeft:10,}} onPress={showTimePicker}>
  <Image style={styles.dateIcon} source={{uri:"https://cdn-icons-png.flaticon.com/128/2972/2972531.png"}}/>
</TouchableOpacity>
<DateTimePickerModal
style={{marginTop:20,}}
  isVisible={isTimePickerVisible}
  mode="time"
  onConfirm={handleConfirmTime}
  onCancel={hideDatePicker}
/>
          </View>
          
          <View style={[styles.buttonContainer,{margin:40}]}>
<TouchableOpacity style={[styles.button,{backgroundColor:'#03045e'}]} onPress={handleData}>
  <Text style={styles.buttonText}>
    Add
  </Text>
</TouchableOpacity>
          </View>
        </View>
        </View>
  )
}

export default AddNewTask