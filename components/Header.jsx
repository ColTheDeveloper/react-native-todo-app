// import react from "react"
import { StyleSheet, View ,Text} from "react-native"


const Header=()=>{
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>My Todos</Text>
        </View>
    )
}
export default Header

const styles=StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        backgroundColor:"coral"
    },
    headerText:{
        color:"white",
        textAlign:"center",
        fontSize:20
    }
})