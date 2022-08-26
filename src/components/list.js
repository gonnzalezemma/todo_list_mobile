

import React,{useState} from 'react';
import { SafeAreaView,FlatList, Text, View,Button,TextInput ,CheckBox} from 'react-native';
import styles from '../assets/styles/styles';

const Tasks = ()=>{

}
export default function ListCheck() {
    const [text, onChangeText] = React.useState("Add a task");
    
    const [count, setCount] = useState(0);
    const [task, setTask] = React.useState([]);  
    const [isSelected, setSelection] = useState(false); 
    
    
    
    const Item = ({title})=>(
  
      <View style={styles.item}> 
      
      <Button title={title} style={styles.title} /> 
  
      
      </View>
    
    )
    const funcionEliminar = (item) =>{
      item=>item.id !=id
      console.log(item)
    }
          const renderItem=({item})=>(
  
              <>
              <Item title={item.title}/>
  
              </>
              
           
          )
          const agregar=()=>{
  
            let numero = count+1;
            setCount(numero)
            setTask([...task,{title: text, id:count, valuate: isSelected
            }])
     console.log(task)
          }
      
          
          return (
            
             <SafeAreaView style={styles.container}>
             
             <TextInput
             style={styles.input}
             onChangeText={onChangeText}
             value={text}
             />
             <Button
             title="add task"
             onPress={()=>agregar()
             //
            }
           
            />
           
            <FlatList
            data={task}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            onPress={ ()=>console.log(item=>item.id) }
            />
            
            </SafeAreaView>
            
            
           
           
           );
          }
