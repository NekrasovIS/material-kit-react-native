// Импорт необходимых модулей из React и React Native
import React from 'react'
import { Image, StyleSheet } from 'react-native'
// Определение функционального компонента Logo
export default function Logo() {
  
    return ( 
    // Компонент Image для отображения изображения логотипа
    <Image 
      source={require('../assets/logo.png')} // Путь к файлу логотипа
      style={styles.image} // Применение стиля к изображению
    />
  );
}
// Определение стилей для компонента
const styles = StyleSheet.create({
  image: {
    width: 110, // Ширина изображения
    height: 110, // Высота изображения
    marginBottom: 8, // Нижний отступ
  },
})
