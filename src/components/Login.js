import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button,ScrollView ,TouchableOpacity} from 'react-native';
import { Icons } from '../common';

const Login = () => {
  const [todos, setTodos] = useState([]);
  const [task, settask] = useState('');

  const Add = () => {
    

    setTodos([...todos, task]);
    settask(null);
  };

  const Delete=(index)=>{
  
    setTodos(todos.filter((todo, i) => i !== index));
  }
  return (
    <>
      <ScrollView>
        {todos.map((text, index) => {
          return (
            <View key={index} style={styles.list}>
              <Text style={styles.text}>{text}</Text>
              {/* <Button
                color="#232428"
                title="delete"
                onPress={}
              /> */}
              <TouchableOpacity
                style={styles.customButton}
                onPress={() => Delete(index)}>
                <Text style={styles.text}>
                  <Icons.AntDesign name="delete" size={30}/>
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter the task "
          onChangeText={text => settask(text)}
          placeholderTextColor="#232428"
          value={task}
        />
        <TouchableOpacity style={styles.customButton} onPress={() => Add()}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        {/* <Button title="+" style={{fontSize:'30'}} color="#232428"  */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 5,
    width: 300,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  text: {
    fontSize: 25,
    color: '#232428',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '40%',
    justifyContent: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 20,
    backgroundColor: '#FFFFFF',
    padding:20,
    borderRadius:20,
  },
  customButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 40,
  },
});

export default Login;
