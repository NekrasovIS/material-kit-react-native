import React from 'react';
import {
  Dimensions, StyleSheet, StatusBar, Image,
} from 'react-native';
import { LinearGradient } from 'expo';
import Constants from 'expo-constants';
// galio components
import {
  Text, Button, Block, NavBar,
} from 'galio-framework';
import theme from '../theme';  // Импорт пользовательской темы

const { width } = Dimensions.get('screen');  // Получение ширины экрана устройства
const iphoneImage = require('../../assets/iphone.png');  // Импорт изображения iPhone

const Presentation = props => (
    <Block flex>  // Основной блок, занимающий всё доступное пространство
      <StatusBar hidden={false} barStyle="light-content" />  // Настройка статус-бара

      <Block style={styles.navbar}>
        <NavBar
            transparent
            leftIconColor={theme.COLORS.WHITE}  // Цвет иконки в навигационной панели
            onLeftPress={() => props.navigation.openDrawer()}  // Обработчик нажатия на кнопку слева
        />
      </Block>

      <LinearGradient
          colors={['#ad5389', '#3c1053']}  // Цвета градиента
          end={[0.5, 0.9]}  // Направление градиента
          style={styles.backgroundGradient}  // Стиль для градиента
      />

      <Block flex center style={styles.container}>  // Блок для содержимого, центрированного по вертикали
        <Block flex middle style={{ justifyContent: 'flex-end', marginBottom: theme.SIZES.BASE * 2.5 }}>
          <Text center size={theme.SIZES.FONT * 2.375} color={theme.COLORS.WHITE} style={{ marginBottom: theme.SIZES.BASE }}>
            Check this out  // Текст заголовка
          </Text>
          <Text center size={theme.SIZES.FONT * 0.875} color={theme.COLORS.WHITE} style={{ marginBottom: theme.SIZES.BASE * 1.875, paddingHorizontal: theme.SIZES.BASE * 2 }}>
            You should totally read this stuf, like
            seriously all yo homies love sneak dissing
            but at least u’re true, right?  // Текстовое содержание
          </Text>
          <Button size="large" color="transparent" round onPress={() => props.navigation.openDrawer()}>
            Get Started  // Кнопка для начала работы
          </Button>
        </Block>

        <Block flex style={{ marginBottom: -Constants.statusBarHeight * 2 }}>  // Блок для изображения iPhone
          <Image source={iphoneImage} style={{ width }} />  // Изображение с указанием ширины
        </Block>
      </Block>
    </Block>
);

const styles = StyleSheet.create({
  backgroundGradient: {
    position: 'absolute',  // Абсолютное позиционирование для градиента
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 0,  // Порядок слоя
  },
  container: {
    paddingHorizontal: theme.SIZES.BASE,  // Горизонтальные отступы
  },
  navbar: {
    top: Constants.statusBarHeight,  // Отступ сверху
    left: 0,
    right: 0,
    zIndex: 9999,  // Порядок слоя для навигационной панели
    position: 'absolute',  // Абсолютное позиционирование
  },
});

export default Presentation;  // Экспорт компонента Presentation для использования в других частях приложения
