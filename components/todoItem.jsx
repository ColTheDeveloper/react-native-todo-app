import { Text, StyleSheet, TouchableOpacity } from "react-native"


const TodoItem=({item, pressHandler})=>{
    return(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    )
}
export default TodoItem

const styles=StyleSheet.create({
    text:{
        padding:16,
        borderColor:"#bbb",
        marginTop:16,
        borderWidth:1,
        borderStyle:"dashed",
        borderRadius:10

    }
})