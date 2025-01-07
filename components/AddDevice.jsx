import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AddDevice() {
    return (
        <TouchableOpacity style={styles.roomButton}>
            <Text style={styles.plus}>+</Text>
            <Text style={styles.text}>Add New Device</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    roomButton: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000036",
        width: 150,
        height: 150,
        borderRadius: 20,
        boxShadow: "inset 0 0 10 10 #00000026"
    },
    plus: {
        //color: "#7E7E7E",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 80,
        padding: 0,
        margin: -20,
    },
    text: {
        //color: "#7E7E7E",
        color: "#fff",
        padding: 0,
        margin: 10,
    }
})