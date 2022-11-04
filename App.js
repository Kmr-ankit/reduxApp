import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Helper2 from "./components/helper2";
import Store from "./components/store/store";
import { Provider } from "react-redux";
// Store.subscribe(() => console.log(Store.getState()));

export default function App() {
  return (
    <Provider store={Store}>
      <Helper2 />
    </Provider>
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
