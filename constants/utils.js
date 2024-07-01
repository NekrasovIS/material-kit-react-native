import { Platform, StatusBar } from 'react-native'; // Импорт модулей Platform и StatusBar из react-native
import { theme } from 'galio-framework'; // Импорт объекта theme из библиотеки galio-framework

// Получение высоты статус-бара (StatusBar) устройства
export const StatusHeight = StatusBar.currentHeight;

// Определение высоты заголовка (HeaderHeight) с учетом базового размера темы и высоты статус-бара
export const HeaderHeight = (theme.SIZES.BASE * 3.5 + (StatusHeight || 0));

// Функция для определения, является ли устройство iPhone X
export const iPhoneX = () => {
    // Проверка, является ли платформа iOS и высота или ширина экрана равны 812
    return Platform.OS === 'ios' && (height === 812 || width === 812);
};
