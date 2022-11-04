import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
export default function Helper2() {
  function increser() {
    return {
      type: "increase",
    };
  }
  function decreser() {
    return {
      type: "decrease",
    };
  }
  const myState = useSelector((state) => state.reducerIncOrDec);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => dispatch(increser())}>
        <View
          style={{ height: 100, width: 100, backgroundColor: "red" }}
        ></View>
      </Pressable>
      <View>
        <Text>{myState}</Text>
      </View>
      <Pressable onPress={() => dispatch(decreser())}>
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
