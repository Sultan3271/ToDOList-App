import { View, Text, TouchableOpacity, ScrollView ,Alert} from 'react-native'
import React,{useEffect} from 'react'
import styles from '../../Styling/style'
import {getDatabase, onValue, push, ref, set } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseConfig';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../Redux/action';
const app = initializeApp(firebaseConfig);
const db =  getDatabase(app);
const Home = ({navigation}) => {

// getting data  from firebase
 const dispatch = useDispatch();
const  readData=async()=>{
  try{
    const tasksRef = ref(db);
    onValue(
      tasksRef,
      (snapshot) => {
        const data = snapshot.val();
        for ( let key in data ){
         
           dispatch(addNewTask(data[key]));
        }
        
  }, { 
    onlyOnce: true // This will ensure that the callback is called only once and not on subsequent changes
  });
}
catch{
 Alert.alert("wrong went!")
}


}

 useEffect(()=>{
 readData();
},[])


/// firebase end

  return ( 
    <View style={styles.container}> 
      <View style={styles.headingTextContainer}> 
        <Text style={styles.headingText}>Home</Text>
        </View>
        <View style={[styles.screenBody,{justifyContent:'center',}]}>
          <View style={styles.buttonsBox}>
         <View style={styles.buttonContainer}>
<TouchableOpacity style={[styles.button,{backgroundColor:'#3a86ff'}]} onPress={()=>navigation.navigate("Existing")}>
  <Text style={styles.buttonText}>
    Your Tasks
  </Text>
</TouchableOpacity>
         </View>

         <View style={styles.buttonContainer}>
<TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("AddNew")}>
  <Text style={styles.buttonText}>
    Add New Task
  </Text>
</TouchableOpacity>
         </View>
         </View>
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
          <View style={styles.recentTasks}>
          <View style={styles.taskBox}>
            <View style={styles.boxHead}>
              <Text style={[styles.headingText,{fontSize:18,color:'white',fontWeight:'700'}]}>
                Trip to Hunza
              </Text>
            </View>
            <View style={[styles.decorLine,{width:120,backgroundColor:'white'}]}>
               
            </View>
            <View style={styles.boxDesc}>
             <View style={styles.dateContainer}>
  <Text style={styles.dateText}>
  march 13, 2024
  </Text>
             </View>
             <View style={styles.descTextContainer}>
              <Text>
                Going on a Trip with friends 
              </Text>
             </View>
             <View style={styles.buttonContainer}>
<TouchableOpacity style={[styles.button,{backgroundColor:'transparent',color:'white',width:55}]}>
  <Text style={styles.buttonText}>
    Visit
  </Text>
</TouchableOpacity>
         </View>
            </View>
            
          </View>
          <View style={styles.taskBox}>
          <View style={styles.boxHead}>
              <Text style={[styles.headingText,{fontSize:18,color:'white',fontWeight:'700'}]}>
                Trip to Hunza
              </Text>
            </View>
            <View style={[styles.decorLine,{width:120,backgroundColor:'white'}]}>
               
            </View>
            <View style={styles.boxDesc}>
             <View style={styles.dateContainer}>
  <Text style={styles.dateText}>
  march 13, 2024
  </Text>
             </View>
             <View style={styles.descTextContainer}>
              <Text>
                Going on a Trip with friends 
              </Text>
             </View>
             <View style={styles.buttonContainer}>
<TouchableOpacity style={[styles.button,{backgroundColor:'transparent',color:'white',width:55}]}>
  <Text style={styles.buttonText}>
    Visit
  </Text>
</TouchableOpacity>
         </View>
            </View>
          </View>
          </View>
         </ScrollView>
        </View>
    </View>
  )
}

export default Home