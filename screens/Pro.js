import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

const { height, width } = Dimensions.get('screen');  // Получение высоты и ширины экрана
import { Images, materialTheme } from '../constants/';  // Импорт изображений и темы
import { HeaderHeight } from "../constants/utils";  // Импорт высоты заголовка

export default class Pro extends React.Component {
  render() {
    const { navigation } = this.props;  // Получение навигации из пропсов

    return (
        <Block flex style={styles.container}>  // Основной блок, занимающий всё доступное пространство
          <StatusBar barStyle="light-content" />  // Настройка статус-бара

          <Block flex>
            <ImageBackground
                source={{ uri: Images.Pro }}  // Установка фонового изображения
                style={{ height: height / 1.8, width, zIndex: 1 }}  // Стиль для фонового изображения
            >
              <LinearGradient
                  style={styles.gradient}  // Градиент поверх изображения
                  colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />
            </ImageBackground>

            <Block space="between" style={styles.padded}>  // Блок с отступами для содержимого
              <Block>
                <Block>
                  <Block>
                    <Text color="white" size={60}>Unlock</Text>  // Заголовок
                  </Block>
                  <Block>
                    <Text color="white" size={60}>Material</Text>  // Заголовок
                  </Block>
                  <Block row>
                    <Text color="white" size={60}>Kit</Text>  // Заголовок
                    <Block middle style={styles.pro}>
                      <Text size={16} color="white">PRO</Text>  // Метка PRO
                    </Block>
                  </Block>
                </Block>

                <Text size={16} color='rgba(255,255,255,0.6)'>  // Описание
                  Take advantage of all the features and screens made upon Galio Design System, coded on React Native for both.
                </Text>

                <Block row style={{ marginTop: theme.SIZES.BASE * 1.5, marginBottom: theme.SIZES.BASE * 4 }}>
                  <Image
                      source={require('../assets/images/ios.png')}  // Изображение для iOS
                      style={{ height: 38, width: 82, marginRight: theme.SIZES.BASE * 1.5 }} />
                  <Image
                      source={require('../assets/images/android.png')}  // Изображение для Android
                      style={{ height: 38, width: 140 }} />
                </Block>

                <Button
                    shadowless
                    style={styles.button}  // Стиль для кнопки
                    color={materialTheme.COLORS.BUTTON_COLOR}
                    onPress={() => navigation.navigate('Home')}>  // Обработчик нажатия на кнопку
                  GET PRO VERSION
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
    backgroundColor: "black",  // Фон для контейнера
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,  // Отступ для Android
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,  // Горизонтальные отступы
    zIndex: 3,  // Порядок слоя
    position: 'absolute',  // Абсолютное позиционирование
    bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3,  // Отступ снизу
  },
  button: {
    width: width - theme.SIZES.BASE * 4,  // Ширина кнопки
    height: theme.SIZES.BASE * 3,  // Высота кнопки
    shadowRadius: 0,  // Радиус тени
    shadowOpacity: 0,  // Прозрачность тени
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,  // Фон для метки PRO
    paddingHorizontal: 8,  // Горизонтальные отступы
    marginLeft: 12,  // Отступ слева
    borderRadius: 2,  // Радиус скругления углов
    height: 22  // Высота метки
  },
  gradient: {
    zIndex: 1,  // Порядок слоя
    position: 'absolute',  // Абсолютное позиционирование
    bottom: 0,  // Отступ снизу
    left: 0,  // Отступ слева
    right: 0,  // Отступ справа
    height: 66,  // Высота градиента
  },
});
