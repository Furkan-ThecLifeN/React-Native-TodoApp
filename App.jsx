// App.jsx
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Todo from "./components/Todo";
import TodoItem from "./components/TodoItem";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Todo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEA ",
    justifyContent: "center",
    alignItems: "center",
  },
});
