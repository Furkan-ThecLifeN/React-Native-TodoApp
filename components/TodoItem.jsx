import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const TodoItem = ({ todo, toggle, deleteTodo }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => toggle(todo.id)}
        style={styles.textWrapper}
      >
        <Text style={[styles.itemText, todo.isComplete && styles.itemTextDone]}>
          {todo.text}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
        <AntDesign name="delete" size={20} color="#FF6B6B" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#1F2937",
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  textWrapper: {
    flex: 1,
  },
  itemText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  itemTextDone: {
    textDecorationLine: "line-through",
    color: "#9CA3AF",
  },
});

export default TodoItem;
