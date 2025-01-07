import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import LightIcon from "@/assets/images/LightIcon";

import { useState, useEffect } from "react";

export default function DeviceButton({room}) {
    const [run, setRun] = useState(1);

    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        // Connect to the ESP8266 WebSocket server
        const ws = new WebSocket('ws://192.168.1.100:81');

        ws.onopen = () => {
            console.log('Connected to WebSocket server');
            setSocket(ws);
        };

        ws.onmessage = (event) => {
            console.log('Message from server:', event.data);
            setMessages((prev) => [...prev, event.data]);
        };

        ws.onclose = () => {
            console.log('Disconnected from WebSocket server');
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        // Clean up the connection on unmount
        return () => ws.close();
    }, []);

    const sendMessage = () => {
        if (socket && input) {
            socket.send(input);
            setInput("");
        }
    };

    return(
        <TouchableOpacity style={styles.roomButton} onPress={() => { 
            setRun(!run);
            setInput(run);
            sendMessage();
            console.log(run);
        }}>
            <LightIcon />
            <Text style={styles.text}>{room}</Text>
            <View style={run == 0 ? styles.indicatorOn : styles.indicatorOff}></View>
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
        boxShadow: "inset 0 0 10 10 #00000026",
        margin: 10,
        zIndex: 1,
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
    },
    indicatorOn: {
        width: 10,
        height: 10,
        backgroundColor: "#2EE400",
        borderRadius: 10,
        boxShadow: "0 0 10 2 #2EE400BF",
        margin: 10,
    },
    indicatorOff: {
        width: 10,
        height: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        boxShadow: "inset 0 0 5 1 #070707B3",
        margin: 10,
    },
});