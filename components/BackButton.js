// Импорт необходимых модулей из React и React Native
import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
// Определение функционального компонента BackButton
//goBack — это функция, которая будет вызвана при нажатии на кнопку.
export default function BackButton({ goBack }) {
  return (
    // TouchableOpacity для создания кликабельной области
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/arrow_back.png')}
      />
    </TouchableOpacity>
  )
}
// Стили для компонента
const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Абсолютное позиционирование
    top: 10 + getStatusBarHeight(), // Отступ сверху с учетом высоты строки состояния
    left: 4, // Отступ слева
  },
  image: {
    width: 24, // Ширина изображения
    height: 24, // Высота изображения
  },
})
