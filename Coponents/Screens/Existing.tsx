import { View, Text,TouchableOpacity,ScrollView, Image,  } from 'react-native'
import React, { useEffect } from 'react'
import styles from '../../Styling/style'
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../Redux/action';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseConfig';
import { getDatabase, ref, remove } from 'firebase/database';
const app = initializeApp(firebaseConfig);
const db =  getDatabase(app);

const Existing = () => {

  ///redux work is here
  const dispatch = useDispatch();
  const tasks = useSelector((state) =>state.reducer);
const handleDelete = (taskKey) => {
  try { 
     remove(ref(db,`Tasks/${taskKey}`));// Use the correct reference path
    dispatch(removeTask(taskKey)); // Dispatch the Redux action to remove the task locally
  } catch (error) {
    console.error('Error deleting task:', error);
  }
} 


///redux end

  return (
    <View style={styles.container}>
      <View style={styles.headingTextContainer}>
        <Text style={styles.headingText}>Tasks</Text>
        </View>
        <View style={[styles.screenBody,{justifyContent:'center',}]}>
         
         <View style={styles.headingTextContainer}>
          <View style={[styles.decorLine,{width:70}]}>

          </View>
  <Text style={[styles.headingText,{fontSize:22}]}>
    Recent Tasks
  </Text>
  <View style={[styles.decorLine,{width:70}]}>

          </View>
         </View> 
         <ScrollView >
          <View style={[styles.recentTasks,{flexDirection:'column',marginBottom:50,}]}>
{ tasks.length > 0 ? tasks.map((task)=>(
            
          <View style={[styles.taskBox,{alignItems:'flex-start'}]} key={task.key}>
            <View style={styles.boxHead}> 
              <Text style={[styles.headingText,{fontSize:18,color:'white',fontWeight:'700'}]}>
                {task.Title} 
              </Text>
            </View> 
            <View style={[styles.decorLine,{width:120,backgroundColor:'white'}]}>
               
            </View>
            <View style={[styles.boxDesc,{margin:1,padding:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}]}>
             <View style={[styles.dateContainer,{margin:0}]}>
  <Text style={styles.dateText}>
  {task.Date}
  </Text>
             </View>
             
             <View style={styles.buttonContainer}>
<TouchableOpacity style={[styles.button,{backgroundColor:'transparent',color:'white',width:55,margin:0}]}>
  <Text style={styles.buttonText}>
    Visit
  </Text>
</TouchableOpacity>
         </View>
         <View style={styles.buttonContainer}>
<TouchableOpacity style={[styles.button,{backgroundColor:'transparent',color:'white',width:55,margin:0}]} onPress={()=>handleDelete(task.key)}>
  <Image style={styles.dateIcon} source={{uri:"https://cdn-icons-png.flaticon.com/128/10781/10781266.png"}} />
</TouchableOpacity>
         </View>
            </View>
            
          </View>
          

)) : <Text>No Tasks Added</Text>
          }
          </View>
         </ScrollView>
        </View>
    </View>
  )
}

export default Existing