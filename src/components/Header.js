// Импорт необходимых модулей из React и React Native
import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper' // Импорт текста из библиотеки react-native-paper
import { theme } from '../core/theme' // Импорт темы для использования в стилях
// Определение функционального компонента Header
export default function Header(props) {
  return <Text style={styles.header} {...props} /> // Возвращение компонента Text с примененными стилями и переданными пропсами
}
// Определение стилей для компонента
const styles = StyleSheet.create({
  header: {
    fontSize: 21, // Размер шрифта заголовка
    color: theme.colors.primary, // Цвет текста заголовка из темы
    fontWeight: 'bold', // Полужирный текст
    paddingVertical: 12, // Вертикальные отступы
  },
})
