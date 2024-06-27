import React from 'react'; // Импортируем React
import {
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native'; // Импортируем компоненты из 'react-native'
import { LinearGradient } from 'expo-linear-gradient' // Импортируем компонент LinearGradient из 'expo-linear-gradient'
import Constants from 'expo-constants'; // Импортируем Constants из 'expo-constants'

// Импортируем компоненты из galio-framework
import {
  Block, Icon, Text, NavBar,
} from 'galio-framework';

import theme from '../theme'; // Импортируем тему

// Компонент ArticleCover
const ArticleCover = props => (
    <Block flex>
      <StatusBar hidden={false} barStyle="light-content" />
      {/* Устанавливаем стиль StatusBar */}

      <Image
          style={styles.backgroundImage} // Применяем стили к изображению
          source={{ uri: 'https://images.unsplash.com/photo-1537005081207-04f90e3ba640?fit=crop&w=764&q=80' }} // Устанавливаем источник изображения
      />

      <Block flex space="between" center style={styles.absolute}>
        {/* Блок для размещения контента поверх изображения */}
        <NavBar
            transparent
            leftIconColor={theme.COLORS.WHITE}
            onLeftPress={() => props.navigation.openDrawer()}
            // Прозрачный NavBar с белым цветом иконки, при нажатии открывает Drawer
        />

        <Block style={styles.articleSummary}>
          {/* Блок с кратким содержанием статьи */}
          <Block row style={{ marginBottom: theme.SIZES.BASE }}>
            {/* Блок для отображения количества просмотров и лайков */}
            <Block row middle style={{ marginRight: theme.SIZES.BASE }}>
              <Icon name="eye" family="font-awesome" color={theme.COLORS.WHITE} size={theme.SIZES.FONT * 0.875} />
              <Text
                  p
                  color={theme.COLORS.WHITE}
                  size={theme.SIZES.FONT * 0.875}
                  style={{ marginLeft: theme.SIZES.BASE * 0.25 }}
              >
                25.6k {/* Количество просмотров */}
              </Text>
            </Block>
            <Block row middle>
              <Icon name="heart" family="font-awesome" color={theme.COLORS.WHITE} size={theme.SIZES.FONT * 0.875} />
              <Text
                  p
                  color={theme.COLORS.WHITE}
                  size={theme.SIZES.FONT * 0.875}
                  style={{ marginLeft: theme.SIZES.BASE * 0.25 }}
              >
                936 {/* Количество лайков */}
              </Text>
            </Block>
          </Block>

          <Block>
            {/* Основной текст статьи */}
            <Text
                color={theme.COLORS.WHITE}
                size={theme.SIZES.FONT * 0.875}
                style={{ marginBottom: theme.SIZES.BASE, fontWeight: '400' }}
            >
              {"Why is 'The Thing' always looking at you?"}
            </Text>
            <Text
                size={theme.SIZES.FONT * 0.875}
                color={theme.COLORS.WHITE}
                style={{ marginBottom: theme.SIZES.BASE, fontWeight: '500', lineHeight: theme.SIZES.FONT * 1.3 }}
            >
              Just small talk from the Fantastic Four.
            </Text>
            <Text
                size={theme.SIZES.FONT * 0.875}
                color={theme.COLORS.WHITE}
                style={{ marginBottom: theme.SIZES.BASE / 2, fontWeight: '500', lineHeight: theme.SIZES.FONT * 1.3 }}
            >
              So... Did you ever think about this bus? Like... How could this bus
              have all these weird colors. This purple is really cute though.
            </Text>
          </Block>

          <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.7)']} style={styles.gradient} />
          {/* Градиент для затемнения нижней части экрана */}
        </Block>
      </Block>
    </Block>
);

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Занимает все доступное пространство
    width: '100%', // Ширина 100% от экрана
  },
  absolute: {
    position: 'absolute', // Абсолютное позиционирование
    bottom: 0, // Снизу 0
    top: Constants.statusBarHeight, // Сверху отступ равен высоте StatusBar
    left: 0, // Слева 0
    right: 0, // Справа 0
  },
  gradient: {
    position: 'absolute', // Абсолютное позиционирование
    bottom: 0, // Снизу 0
    left: 0, // Слева 0
    right: 0, // Справа 0
    height: 90, // Высота 90
  },
  articleSummary: {
    paddingLeft: 20, // Отступ слева 20
    paddingBottom: 20, // Отступ снизу 20
    paddingRight: '10%', // Отступ справа 10%
  },
});

export default ArticleCover; // Экспортируем компонент
