import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Constants from 'expo-constants'; // Импортируем Constants для получения высоты статус-бара

const { statusBarHeight } = Constants; // Получаем высоту статус-бара

// Импортируем компоненты из galio-framework
import {
  Block, Card, Text, Icon, NavBar,
} from 'galio-framework';
import theme from '../theme'; // Импортируем тему для использования стилей

const { width, height } = Dimensions.get('screen'); // Получаем размеры экрана устройства

const bgImage = 'https://images.unsplash.com/photo-1516651029879-bcd191e7d33b?fit=crop&w=900&q=80'; // URL изображения для фона статьи

// Компонент Article рендерит статью с заголовком, изображением, автором, статистикой просмотров и лайков, а также текстом статьи.
const Article = props => (
    <Block>
      <StatusBar barStyle="light-content" /> {/* Устанавливаем стиль статус-бара */}
      <Block style={styles.navbar}>
        <NavBar
            transparent
            left={(
                <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                  <Icon
                      name="menu"
                      family="feather"
                      size={theme.SIZES.BASE}
                      color={theme.COLORS.WHITE}
                  />
                </TouchableOpacity>
            )}
        />
      </Block>

      <Image
          source={{ uri: bgImage }}
          resizeMode="cover"
          style={{
            width,
            height: height * 0.55, // Устанавливаем высоту изображения как 55% от высоты экрана
          }}
      />

      <Block center style={{ marginTop: -theme.SIZES.BASE * 2 }}>
        <Block flex style={styles.header}>
          <Block>
            <Text size={theme.SIZES.BASE * 1.875}>I would happily watch a TV show about crabs</Text> {/* Заголовок статьи */}
            <Text muted size={theme.SIZES.BASE * 0.875} style={{ marginTop: theme.SIZES.BASE, fontWeight: '500' }}>
              InterBlocking this super star
            </Text> {/* Подзаголовок статьи */}
          </Block>

          <Block center>
            <Card
                borderless
                style={styles.stats}
                title="Christopher Moon"
                caption="139 minutes ago"
                avatar="http://i.pravatar.cc/100?id=article"
                location={(
                    <Block row right>
                      <Block row middle style={{ marginHorizontal: theme.SIZES.BASE }}>
                        <Icon name="eye" family="font-awesome" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.875} />
                        <Text
                            p
                            color={theme.COLORS.MUTED}
                            size={theme.SIZES.FONT * 0.875}
                            style={{ marginLeft: theme.SIZES.BASE * 0.25 }}
                        >
                          25.6k
                        </Text> {/* Статистика просмотров */}
                      </Block>
                      <Block row middle>
                        <Icon name="heart" family="font-awesome" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.875} />
                        <Text
                            p
                            color={theme.COLORS.MUTED}
                            size={theme.SIZES.FONT * 0.875}
                            style={{ marginLeft: theme.SIZES.BASE * 0.25 }}
                        >
                          936
                        </Text> {/* Статистика лайков */}
                      </Block>
                    </Block>
                )}
            />
          </Block>
          <ScrollView>
            <Text style={styles.text}>
              You should totally like check this out, ok? Why would you use another UI
              library when you have so many components written by Creative Tim and the
              whole React Native community. Galio was created by developers for
              developers.
            </Text> {/* Основной текст статьи */}
            <Text style={styles.text}>
              {"A lot of Bacon. I'd really like to eat like a LOT of Bacon :(."}
            </Text> {/* Дополнительный текст статьи */}
          </ScrollView>
        </Block>
      </Block>
    </Block>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.COLORS.WHITE,
    borderTopLeftRadius: theme.SIZES.BASE * 2,
    borderTopRightRadius: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE * 1.5,
    width,
  },
  navbar: {
    top: statusBarHeight,
    left: 0,
    right: 0,
    zIndex: 9999,
    position: 'absolute',
  },
  stats: {
    borderWidth: 0,
    width: width - theme.SIZES.BASE * 2,
    height: theme.SIZES.BASE * 4,
    marginVertical: theme.SIZES.BASE * 0.875,
  },
  title: {
    justifyContent: 'center',
    paddingLeft: theme.SIZES.BASE / 2,
  },
  avatar: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.25,
  },
  middle: {
    justifyContent: 'center',
  },
  text: {
    fontSize: theme.SIZES.FONT * 0.875,
    lineHeight: theme.SIZES.FONT * 1.25,
  },
});

export default Article; // Экспортируем компонент Article
