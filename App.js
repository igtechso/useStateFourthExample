import React,{useState} from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';

const App = () => {
  const [count,setCount] = useState(0)
  const onClickHeadling = () =>{
    setCount(count + 1)
  }
  return(
    <View style = {styles.body}>
      <Text style = {styles.headertext}>IGT Development</Text>
      <Text style = {styles.text}>Set Count {count} * 5 = {count * 5 }</Text>
      <Button style title="Click Me" onPress={onClickHeadling}  color="#E74C3C"></Button>
      <Text style = {styles.text}>Total Click : {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    body:{
      backgroundColor: '#34495E',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      fontSize: 30,
      fontStyle: 'italic',
      color:'#ECF0F1',
      margin:10,
    },
    headertext:{
      fontSize: 40,
      color:'#000000',
    }
  }
)

export default App;