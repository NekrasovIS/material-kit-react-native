import React from 'react';
import { withNavigation } from '@react-navigation/compat'; // Импорт функции withNavigation для работы с навигацией
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native'; // Импорт необходимых компонентов и функций из react-native
import { Block, Text, theme } from 'galio-framework'; // Импорт компонентов и темы из galio-framework

import materialTheme from '../constants/Theme'; // Импорт собственной темы приложения

const { width } = Dimensions.get('screen'); // Получение ширины экрана устройства

class Product extends React.Component {
  render() {
    const { navigation, product, horizontal, full, style, priceColor, imageStyle } = this.props; // Деструктуризация пропсов
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle]; // Определение стилей для изображения

    return (
        <Block row={horizontal} card flex style={[styles.product, styles.shadow, style]}>
          {/* Основной блок карточки продукта */}
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { product: product })}>
            {/* Обработка нажатия на изображение */}
            <Block flex style={[styles.imageContainer, styles.shadow]}>
              <Image source={{ uri: product.image }} style={imageStyles} />
              {/* Отображение изображения продукта */}
            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { product: product })}>
            {/* Обработка нажатия на описание продукта */}
            <Block flex space="between" style={styles.productDescription}>
              <Text size={14} style={styles.productTitle}>{product.title}</Text>
              {/* Отображение заголовка продукта */}
              <Text size={12} muted={!priceColor} color={priceColor}>${product.price}</Text>
              {/* Отображение цены продукта */}
            </Block>
          </TouchableWithoutFeedback>
        </Block>
    );
  }
}

export default withNavigation(Product); // Оборачивание компонента withNavigation для доступа к навигации

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE, // Фоновый цвет карточки
    marginVertical: theme.SIZES.BASE, // Вертикальные отступы
    borderWidth: 0, // Ширина границы
    minHeight: 114, // Минимальная высота карточки
  },
  productTitle: {
    flex: 1, // Занимает доступное пространство по оси flex
    flexWrap: 'wrap', // Перенос текста если он не вмещается в одну строку
    paddingBottom: 6, // Нижний внутренний отступ
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2, // Внутренние отступы для описания продукта
  },
  imageContainer: {
    elevation: 1, // Тень для Android
  },
  image: {
    borderRadius: 3, // Скругление углов изображения
    marginHorizontal: theme.SIZES.BASE / 2, // Горизонтальные отступы
    marginTop: -16, // Отрицательный верхний отступ
  },
  horizontalImage: {
    height: 122, // Высота горизонтального изображения
    width: 'auto', // Автоматическая ширина
  },
  fullImage: {
    height: 215, // Высота полного изображения
    width: width - theme.SIZES.BASE * 3, // Ширина полного изображения
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK, // Цвет тени
    shadowOffset: { width: 0, height: 2 }, // Смещение тени
    shadowRadius: 4, // Радиус размытия тени
    shadowOpacity: 0.1, // Прозрачность тени
    elevation: 2, // Высота тени для Android
  },
});
