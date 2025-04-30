import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState([]); 
  const [inputText, setInputText] = useState("");

  const handleAddTodo = () => {
    if (inputText.trim() === "") return; 

    const newTodo = {
      id: Date.now().toString(), 
      text: inputText,
      isComplete: false,
    };

    setTodos([...todos, newTodo]); 
    setInputText(""); 
  };

  const toggleTodo = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos(updated);
  };

  const deleteTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const today = new Date();

  const fomattedDate = today.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <View style={styles.todo__container}>
      <View style={styles.text__box}>
        <View style={styles.title__container}>
          <Text style={styles.text__lg}>Todo Done</Text>
          <Text style={styles.text__small}>{fomattedDate}</Text>
        </View>

        <View style={styles.circle}>
          <Text style={styles.circle__text}>
            {todos.filter((t) => t.isComplete).length}/{todos.length}
          </Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new todos"
          placeholderTextColor="#9CA3AF"
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <AntDesign name="pluscircleo" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.list__todo}>
        <Text style={styles.list__text}>List</Text>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoItem todo={item} toggle={toggleTodo} deleteTodo={deleteTodo} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todo__container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    width: "100%",
  },
  text__lg: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },

  text__small: {
    fontSize: 14,
    color: "#ffffff",
  },

  text__box: {
    width: "92%",
    height: 187,
    backgroundColor: "#040C17",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginTop: 15,
  },
  title__container: {
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "20px",
    marginTop: "40px",
  },
  circle: {
    width: 116,
    height: 117,
    borderRadius: 116 / 2,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  circle__text: {
    color: "#222831",
    fontSize: 27,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1F2937",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
    paddingVertical: 6,
  },
  addButton: {
    backgroundColor: "#0F4C75",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 8,
  },
  list__todo: {
    marginTop: 30,
    width: "92%",
  },
  list__text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Todo;
