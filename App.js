// Импорт необходимых модулей из React и React Native
import React, { useState, useEffect, useCallback } from "react";
import { Platform, StatusBar, Image } from "react-native";
import { Asset } from "expo-asset";
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { Images, products, materialTheme } from "./constants/";
import Screens from "./navigation/Screens";
// Перед рендерингом любого навигационного стека
import { enableScreens } from "react-native-screens";
enableScreens(); // Оптимизация производительности для экранов React Navigation

// Определение массива изображений для кэширования (изображения приложения)
const assetImages = [
  Images.Pro,
  Images.Profile,
  Images.Avatar,
  Images.Onboarding,
];

// Добавление изображений продуктов в массив для кэширования
products.map((product) => assetImages.push(product.image));
// Функция для кэширования изображений
function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      // Если изображение представлено в виде URL-строки, используем Image.prefetch
      return Image.prefetch(image);
      return Image.prefetch(image);
    } else {
      // Если изображение является модулем, используем Asset.fromModule
      return Asset.fromModule(image).downloadAsync();
    }
  });
}
// Главный компонент приложения
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false); // Состояние для отслеживания готовности приложения

  useEffect(() => {
    async function prepare() {
      try {
        // Загружать ресурсы (изображения)
        await _loadResourcesAsync();
      } catch (e) {
        console.warn(e); // Обработка ошибок загрузки
      } finally {
        // Сообщите приложению о необходимости рендеринга
        setAppIsReady(true);
      }
    }
    prepare(); // Вызов функции подготовки при монтировании компонента
  }, []);
// Функция для асинхронной загрузки ресурсов
  const _loadResourcesAsync = async () => {
    return Promise.all([...cacheImages(assetImages)]);
  };
// Функция для скрытия экрана загрузки, если приложение готово
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
// Если приложение не готово, возвращаем null (ничего не рендерим)
  if (!appIsReady) {
    return null;
  }
  // Рендерим главный интерфейс приложения
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <GalioProvider theme={materialTheme}>
        <Block flex>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <Screens />
        </Block>
      </GalioProvider>
    </NavigationContainer>
  );
}
