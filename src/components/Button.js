// Импорт необходимых модулей из React и React Native
import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper' // Импорт кнопки из библиотеки react-native-paper
import { theme } from '../core/theme' // Импорт темы для использования в стилях
// Определение функционального компонента Button
export default function Button({ mode, style, ...props }) {
  return (
    // PaperButton для создания кнопки с использованием библиотеки react-native-paper
    <PaperButton
      style={[
        styles.button, // Базовый стиль кнопки
        mode === 'outlined' && { backgroundColor: theme.colors.surface },
        style, // Пользовательский стиль, переданный через пропсы
      ]}
      labelStyle={styles.text} // Стиль текста кнопки
      mode={mode} // Режим кнопки ('text', 'outlined', 'contained')
      {...props} // Все остальные пропсы, переданные компоненту
    />
  )
}
// Определение стилей для компонента
const styles = StyleSheet.create({
  button: {
    width: '100%', // Ширина кнопки 100% от родительского компонента
    marginVertical: 10, // Вертикальные отступы
    paddingVertical: 2, // Вертикальные отступы внутри кнопки
  },
  text: {
    fontWeight: 'bold', // Полужирный текст
    fontSize: 15, // Размер шрифта 15
    lineHeight: 26, // Высота строки 26
  },
})
