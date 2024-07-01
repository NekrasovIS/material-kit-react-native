// Импорт изображений из файла Images.js
import Images from './Images';

// Импорт данных о продуктах из файла products.js
import products from './products';

// Импорт темы оформления из файла Theme.js
import materialTheme from './Theme';

// Импорт утилитных функций из файла utils.js
import utils from './utils';

// Экспорт всех импортированных модулей в одном объекте
// Это упрощает их импорт в других частях приложения
export {
  Images,       // Экспорт изображений
  products,     // Экспорт продуктов
  materialTheme, // Экспорт темы оформления
  utils,        // Экспорт утилитных функций
};
