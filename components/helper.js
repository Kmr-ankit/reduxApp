import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useReducer } from "react";

export default function Helper() {
  // const [count, setcount] = useState(0);
  function reducer(state, action) {
    if (action.type === "increase") {
      return state + 1;
    }
    if (action.ype === "decrease") {
      return state - 1;
    }
    return state;
  }
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);

  function increser() {
    dispatch({ type: "increase" });
  }
  function decreser() {
    dispatch({ ype: "decrease" });
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={increser}>
        <View
          style={{ height: 100, width: 100, backgroundColor: "red" }}
        ></View>
      </Pressable>
      <View>
        <Text>{state}</Text>
      </View>
      <Pressable onPress={decreser}>
        <View
          style={{ height: 100, width: 100, backgroundColor: "green" }}
        ></View>
      </Pressable>
    </View>
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
