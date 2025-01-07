import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";

import DeviceButton from "../components/DeviceButton";
import AddDevice from "@/components/AddDevice";

export default function Index() {
  return (
    <ImageBackground style={styles.container} source={require("../assets/images/background.png")} resizeMode="cover">
      <View style={styles.titleBar}>
        <Text style={styles.title}>Nikola Bojinovic's House</Text>
        <View style={styles.locationName}>
          <Image source={require("../assets/images/location-icon.png")} style={styles.locationIcon} resizeMode="contain"></Image>
          <Text style={styles.text}>Maglić, south Bačka District</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <DeviceButton room="Livingroom"/>
        <DeviceButton room="Bedroom"/>
        <DeviceButton room="Bathroom"/>
        <AddDevice />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  titleBar: {
    backgroundColor: "#00000036",
    marginBlock: 70,
    marginInline: 20,
    borderRadius: 20,
    boxShadow: "inset 0px 0px 10px 10px #00000026",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    //fontFamily: "Poppins-Regular",
  },
  title: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 30,
  },
  locationName: {
    display: "flex",
    flexDirection: "row",
  },
  locationIcon: {
    width: 25,
    height: 25,
  },
  buttons: {
    width: "100%",
    display: "flex",
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-around",
    alignItems: 'center',
  }
});