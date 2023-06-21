import { useState } from "react"
import {View,Text,StyleSheet,Button, TextInput} from "react-native"


const AddTodo=({submitHandler})=>{
    const [text,setText]=useState("")

    const handleChange=(val)=>{
        setText(val)
    }
    return(
        <View>
            <TextInput 
                placeholder="new todo..."
                onChangeText={handleChange}
                style={styles.input}
            />
            <Button onPress={()=>submitHandler(text)} title="add todo" color="coral" />
        </View>

    )
}
export default AddTodo;

const styles=StyleSheet.create({
    input:{
        marginBottom:10,
        paddingVertical:6,
        paddingHorizontal:8,
        borderBottomColor:"#ddd",
        borderBottomWidth:1

    }
})