// import { StatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import {
  Provider as PaperProvider,
  TextInput,
  Searchbar,
  ActivityIndicator,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./src/screens/home";
import { useFonts } from "expo-font";
import Chat from "./src/screens/chat";
export default function App() {
  const [fontsloaded] = useFonts({
    DroidSans: require("./assets/fonts/NotoSans-Bold.ttf"),
  });
  if (!fontsloaded) {
    return (
      <PaperProvider>
        <ActivityIndicator />
      </PaperProvider>
    );
  }
  return (
    <PaperProvider>
      <SafeAreaView>
        <StatusBar animated barStyle={"light-content"} />
        <Chat />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
