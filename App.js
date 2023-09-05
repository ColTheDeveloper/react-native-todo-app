import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, StyleSheet, Text, TextInput, View,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [localData,setLocalData]=useState()
  const [todos,setTodos]=useState(localData==null?[]:JSON.parse(localData))

  useEffect(()=>{
    const myTodos=async()=>{
      try {
        const data=await AsyncStorage.getItem("my-todos")
        console.log(data)
        setLocalData(data)
      } catch (error) {
        console.log(error)      
      }
    }
    myTodos()
  },[todos])

  const submitHandler=(text)=>{
    if(text.length<4){
      Alert.alert("OOPS","Todo must be more that 3 characters",[{text:"Understood", onPress:()=>console.log("closed")}])
      return;
    }
    setTodos(async(prevTodos)=>{
      const newValue=prevTodos.unshift({text:text, key:Math.random().toString()})
      console.log(newValue)
      await AsyncStorage.setItem("my-todos",JSON.stringify(newValue))
      return newValue
    })
  }

  const pressHandler=(key)=>{
    setTodos(async(prevTodos)=>{
      const newValue=prevTodos.filter(todo=>todo.key!=key)
      await AsyncStorage.setItem("my-todos",JSON.stringify(newValue))
      return newValue
    })

  }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.lists}>
            <FlatList 
              data={todos}
              renderItem={({item})=>(
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff"
  },
  content:{
    marginTop:10,
    padding:16,
    flex:1,

  },
  lists:{
    flex:1,
    
  }
  
});
