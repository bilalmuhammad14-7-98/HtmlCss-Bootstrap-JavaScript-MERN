import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/config/navigation";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Home Screen!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Navigator></Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
