import React from 'react';
import {
  Dimensions, StyleSheet, Platform,
} from 'react-native';
// Импортируем компоненты из galio-framework
import {
  Button, Icon, Block, Text, NavBar,
} from 'galio-framework';
import theme from '../theme'; // Импортируем тему

// Получаем ширину экрана
const { width } = Dimensions.get('screen');
const BASE_SIZE = theme.SIZES.BASE; // Базовый размер из темы
const COLOR_WHITE = theme.COLORS.WHITE; // Белый цвет из темы

// Функция для разбивки массива на подмассивы заданного размера
const chunk = (arr, size) => {
  const list = new Array(Math.ceil(arr.length / size)).fill()
      .map(() => arr.splice(0, size));
  return list;
};

// Данные для сетки
const grids = [
  {
    title: 'Facebook',
    icon: 'social-facebook',
    family: 'Foundation',
  },
  {
    title: 'Github',
    icon: 'social-github',
    family: 'Foundation',
  },
  {
    title: 'Instagram',
    icon: 'social-instagram',
    family: 'Foundation',
  },
  {
    title: 'Facebook',
    icon: 'social-facebook',
    family: 'SimpleLineIcons',
  },
  {
    title: 'Github',
    icon: 'social-github',
    family: 'SimpleLineIcons',
  },
  {
    title: 'Instagram',
    icon: 'social-instagram',
    family: 'SimpleLineIcons',
  },
  {
    title: 'Android',
    icon: 'social-android',
    family: 'Foundation',
  },
  {
    title: 'Apple',
    icon: 'social-apple',
    family: 'Foundation',
  },
  {
    title: 'Digg',
    icon: 'social-digg',
    family: 'Foundation',
  },
  {
    title: '500px',
    icon: '500px',
    family: 'Entypo',
  },
  {
    title: 'App Store',
    icon: 'app-store',
    family: 'Entypo',
  },
  {
    title: 'Baidu',
    icon: 'baidu',
    family: 'Entypo',
  },
];

class Grid extends React.Component {
  render() {
    const { navigation } = this.props; // Получаем навигацию из props
    return (
        <Block safe flex>
          {/* Навигационная панель */}
          <NavBar
              fix
              title="Grid"
              onLeftPress={() => navigation.openDrawer()}
              style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
          />
          <Block style={styles.grid}>
            {
              // Разбиваем данные на строки по 3 элемента в каждой
              chunk(grids, 3).map((row, rowId) => (
                  <Block row space="evenly" key={`row-${rowId}`}>
                    {
                      row.map(grid => (
                          <Block shadow middle style={styles.block} key={`grid-${grid.title}}`}>
                            <Button color="transparent" style={styles.button} onPress={() => navigation.openDrawer()}>
                              <Block flex middle>
                                <Icon name={grid.icon} family={grid.family} size={BASE_SIZE * 1.875} />
                                <Text size={BASE_SIZE * 0.875}>
                                  {grid.title}
                                  {' '}
                                </Text>
                              </Block>
                            </Button>
                          </Block>
                      ))
                    }
                  </Block>
              ))
            }
          </Block>
        </Block>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  block: {
    backgroundColor: COLOR_WHITE,
    borderRadius: BASE_SIZE / 2,
    height: width * 0.28,
    width: width * 0.28,
    shadowOpacity: 0.4,
    elevation: BASE_SIZE / 2,
  },
  button: {
    width: 'auto',
    height: 'auto',
  },
});

export default Grid;
