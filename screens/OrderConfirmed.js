import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity
} from 'react-native';

// galio components
import {
  Text, Button, Block, NavBar, Icon
} from 'galio-framework';  // Импорт компонентов из Galio Framework
import theme from '../theme';  // Импорт пользовательской темы

const { height } = Dimensions.get('window');  // Получение высоты экрана устройства
const orderConfirmedImage = require('../../assets/order_confirmed.png');  // Импорт изображения подтверждения заказа

class OrderConfirmed extends React.Component {
  render() {
    const { navigation } = this.props;  // Доступ к навигации через props
    return (
        <Block safe flex>  // Основной блок, занимающий всё доступное пространство
          <NavBar
              title="Confirmed Order"  // Заголовок навигационной панели
              left={(
                  <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon
                        name="menu"
                        family="feather"
                        size={theme.SIZES.BASE}
                        color={theme.COLORS.ICON}
                    />
                  </TouchableOpacity>
              )}
              style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}  // Условный стиль для платформы Android
          />
          <Block flex center space="around" style={styles.container}>  // Главный блок с отступами и расположением элементов вокруг
            <Block center flex={2}>  // Блок для центрирования содержимого по вертикали, занимает 2/3 доступного пространства
              <Block center style={{ marginBottom: theme.SIZES.BASE * 2 }}>
                <Image
                    source={orderConfirmedImage}  // Источник изображения
                    style={{ marginBottom: theme.SIZES.BASE * 2 }}  // Стиль для изображения
                />
                <Text h4 color={theme.COLORS.BLACK}>
                  Well done!  // Текстовый заголовок с указанием цвета
                </Text>
              </Block>
              <Text
                  color={theme.COLORS.BLACK}
                  style={{ marginBottom: theme.SIZES.BASE }}
              >
                <Text
                    size={theme.SIZES.FONT * 1.675}
                    bold
                >
                  #45C23B&nbsp;  // Текст с указанием размера и полужирного начертания
                </Text>
                <Text >
                  is your order number  // Текстовое содержание
                </Text>
              </Text>
              <Text color={theme.COLORS.INFO}>
                Track your order  // Текст с информацией о отслеживании заказа
              </Text>
            </Block>
            <Button size="large" color="info" round onPress={() => navigation.openDrawer()}>  // Кнопка для продолжения покупок
              Continue Shopping
            </Button>
          </Block>
        </Block>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.SIZES.BASE * 0.3,  // Верхний отступ
    paddingHorizontal: theme.SIZES.BASE,  // Горизонтальные отступы
    backgroundColor: theme.COLORS.WHITE,  // Цвет фона
    marginTop: theme.SIZES.BASE * 1.875,  // Верхний отступ
    marginBottom: height * 0.1  // Нижний отступ
  }
});

export default OrderConfirmed;  // Экспорт компонента OrderConfirmed для использования в других частях приложения
