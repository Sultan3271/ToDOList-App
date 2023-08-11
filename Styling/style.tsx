import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    borderRadius:5,
    alignItems:'center',
    
  },
  headingTextContainer:{
    padding:5,
    margin:4,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }
,
headingText:{
    fontSize:24,
    padding:5,
    color:'black',
    fontWeight:'800'
},
screenBody:{
    margin:5,
    padding:5,
},
buttonsBox:{
    marginTop:50,
},
buttonContainer:{
    margin:5,
    padding:5,
   alignItems:'center'
},
button:{
    padding:10,
    margin:5,
    borderRadius:15,
    backgroundColor:'#2a9d8f',
    alignItems:'center',
    width:130,
},
buttonText:{
    fontWeight:'600',
    color:'white',
    fontFamily:'arial',

},
recentTasks:{
    flexDirection:'row',
    margin:5,
    padding:5,

}
,
taskBox:{
    alignItems:'center',
    padding:10,
    backgroundColor:'#00afb9',
    borderRadius:15,
    margin:5,
    
},
boxHead:{
    padding:5,
    margin:2,
}
,
decorLine:{
    backgroundColor:'gray',
    height:.7,
    margin:2,
},
boxDesc:{
    margin:4,
},
dateContainer:{
    margin:2,
},
dateText:{
    fontSize:14,
    color:'#ced4da',
},
descTextContainer:{
 width:100,
},
taskForm:{
    marginTop:50,
    padding:10,  
},
taskInputContainer:{
    margin:7,
    padding:5,
},
taskInput:{
    padding:5,
    fontSize:18,
    width:250,
    borderBottomWidth:1,
    borderBottomColor:'#d8e2dc',
    margin:5,

},
dateIcon:{
    width:30,
    height:30,
    padding:5,

}
});

export default styles