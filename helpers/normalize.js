// Импортируются необходимые модули из react-native

const React = require('react-native');
// PixelRatio используется для получения плотности пикселей устройства
// Dimensions используется для получения размеров окна устройства
const { PixelRatio, Dimensions } = React;
// Получение плотности пикселей и размеров устройства
const pixelRatio = PixelRatio.get();
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

// Функция normalize принимает параметр size, который представляет собой исходный размер шрифта
const normalize = (size) => {
  if (pixelRatio >= 2 && pixelRatio < 3) {
    // устройства с плотностью пикселей от 2 до 3
    if (deviceWidth < 360) {
      // старые Android устройства и iPhone 5s
      return size * 0.95;
    }
    if (deviceHeight < 667) {
      // iPhone 5
      return size;
    } 
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      // iPhone 6 и 6s
      return size * 1.15;
    }
    // более старые фаблеты
    return size * 1.25;
  } 
  if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // устройства с плотностью пикселей от 3 до 3.5
    if (deviceWidth <= 360) {
      // маленькие Android устройства
      return size;
    }
    if (deviceHeight < 667) {
      // маленькие Android устройства
      return size * 1.15;
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      // устройства среднего размера
      return size * 1.2;
    }
    // более крупные устройства
    return size * 1.27;
  } 
  if (pixelRatio >= 3.5) {
    // устройства с плотностью пикселей 3.5 и выше
    if (deviceWidth <= 360) {
      // маленькие Android устройства
      return size;
    }
    if (deviceHeight < 667) {
      // маленькие Android устройства
      return size * 1.2;
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      // устройства среднего размера
      return size * 1.25;
    }
    // более крупные фаблеты
    return size * 1.4;
  } 
  // устройства с плотностью пикселей менее 2
  return size;
};

module.exports = normalize; // экспорт функции
