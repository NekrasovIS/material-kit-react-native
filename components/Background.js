// Импорт необходимых модулей из React и React Native
import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../src/core/theme' // Импорт темы для использования в стилях
// Определение функционального компонента Background
export default function Background({ children }) {
  return (
     // ImageBackground для установки фонового изображения
    <ImageBackground
      source={require('../assets/background_dot.png')} // Установка изображения фона
      resizeMode="repeat" // Повторяющийся режим отображения изображения
      style={styles.background} // Применение стиля для фона
    >
      {/* KeyboardAvoidingView для управления отображением клавиатуры */}
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children} {/* Вставка дочерних компонентов */}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}
// Определение стилей для компонента
const styles = StyleSheet.create({
  background: {
    flex: 1, // Заполнение всего доступного пространства
    width: '100%', // Ширина 100% от родительского компонента
    backgroundColor: theme.colors.surface, // Цвет фона из темы
  },
  container: {
    flex: 1, // Заполнение всего доступного пространства
    padding: 20, // Внутренний отступ 20 единиц
    width: '100%', // Ширина 100% от родительского компонента
    maxWidth: 340, // Максимальная ширина 340 единиц
    alignSelf: 'center', // Выравнивание по центру относительно самого себя
    alignItems: 'center', // Выравнивание элементов по центру по горизонтали
    justifyContent: 'center', // Выравнивание элементов по центру по вертикали
  },
})
