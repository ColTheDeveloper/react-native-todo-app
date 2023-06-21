import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, StyleSheet, Text, TextInput, View,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';


export default function App() {
  const [todos,setTodos]=useState([
    {text:"Buy Grocries", key:"1"},
    {text:"Cook Rice", key:"2"},
    {text:"Play Game", key:"3"},
  ])

  const submitHandler=(text)=>{
    if(text.length<4){
      Alert.alert("OOPS","Todo must be more that 3 characters",[{text:"Understood", onPress:()=>console.log("closed")}])
      return;
    }
    setTodos((prevTodos)=>{
      return [{text:text, key:Math.random().toString()},...prevTodos]
    })
  }

  const pressHandler=(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key!=key)
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
