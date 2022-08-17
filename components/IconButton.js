import {Pressable, StyleSheet } from "react-native"
import  Icon  from "react-native-vector-icons/AntDesign"

function IconButton({ name, size, color, onPress }) {
    return (
      <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
        <Icon name={name} size={size} color={color}/>
      </Pressable>
    );
  }
  
  export default IconButton;
  
  const styles = StyleSheet.create({
    button: {
      margin: 8,
      borderRadius: 20,
    },
    pressed: {
      opacity: 0.7,
    },
  });
  