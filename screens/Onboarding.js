import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';  // Импорт компонентов и темы из Galio Framework

const { height, width } = Dimensions.get('screen');  // Получение высоты и ширины экрана устройства

import materialTheme from '../constants/Theme';  // Импорт пользовательской темы
import Images from '../constants/Images';  // Импорт изображений

export default class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;  // Доступ к навигации через props

    return (
        <Block flex style={styles.container}>  // Основной контейнер с использованием стиля 'container'
          <StatusBar barStyle="light-content" />  // Настройка статус-бара на светлый стиль

          <Block flex center>  // Блок для центрирования элементов по вертикали
            <ImageBackground
                source={{ uri: Images.Onboarding }}  // Задний фон изображения, получаемого из констант
                style={{ height: height, width: width, marginTop: '-55%', zIndex: 1 }}  // Стили для изображения
            />
          </Block>

          <Block flex space="between" style={styles.padded}>  // Главный блок с отступами и расположением элементов между ними
            <Block flex space="around" style={{ zIndex: 2 }}>  // Вложенный блок с пространством вокруг элементов и z-индексом
              <Block>  // Блок для текста и элементов
                <Block>  // Вложенный блок для заголовка
                  <Text color="white" size={60}>Material</Text>  // Текст с указанием цвета и размера
                </Block>
                <Block row>  // Блок для строки текста
                  <Text color="white" size={60}>Kit</Text>  // Текст с указанием цвета и размера
                </Block>
                <Text size={16} color='rgba(255,255,255,0.6)'>  // Текст с указанием размера и цвета в RGBA
                  Fully coded React Native components.  // Текстовое содержание
                </Text>
              </Block>

              <Block center>  // Блок для центрирования элементов
                <Button
                    shadowless  // Отключение тени у кнопки
                    style={styles.button}  // Применение стилей кнопки
                    color={materialTheme.COLORS.BUTTON_COLOR}  // Использование цвета кнопки из пользовательской темы
                    onPress={() => navigation.navigate('App')}>  // Обработчик нажатия кнопки, переход на экран 'App'
                  GET STARTED  // Текст кнопки
                </Button>
              </Block>
            </Block>
          </Block>
        </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",  // Цвет фона контейнера
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,  // Горизонтальные отступы в размере базового значения из темы
    position: 'relative',  // Относительное позиционирование
    bottom: theme.SIZES.BASE,  // Отступ снизу в размере базового значения из темы
  },
  button: {
    width: width - theme.SIZES.BASE * 4,  // Ширина кнопки с учетом отступов
    height: theme.SIZES.BASE * 3,  // Высота кнопки в размере базового значения из темы
    shadowRadius: 0,  // Радиус тени (отключение)
    shadowOpacity: 0,  // Непрозрачность тени (отключение)
  },
});
