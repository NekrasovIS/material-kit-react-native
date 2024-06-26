import React from 'react';
import {
  View, ScrollView, StyleSheet,
} from 'react-native';

// Импортируем компоненты из галерея
import { Card, NavBar } from 'galio-framework';

// Основной компонент
export default class ArticleFull extends React.Component {
  render() {
    const { navigation } = this.props; // Получаем navigation из props
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          {/* Навигационная панель */}
          <NavBar transparent title="Article Feed v1" onLeftPress={() => navigation.openDrawer()} />

          {/* Скроллируемая область */}
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
              {/* Карточка статьи */}
              <Card
                  neutral
                  fullBackgroundImage
                  onPress={() => navigation.navigate('News')} // Навигация к экрану "News"
                  image="https://images.unsplash.com/photo-1536523552737-74ded3c0591c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c93e90e0868aa428ec388db1ce633272&auto=format&fit=crop&w=1351&q=80"
                  authorImageSrc="http://i.pravatar.cc/100"
                  authorTitle="Alin Gheorghe"
                  authorSubTitle="420 minutes ago"
              />
              {/* Повторение карточек для других статей */}
              <Card
                  neutral
                  fullBackgroundImage
                  image="https://images.unsplash.com/photo-1536396123481-991b5b636cbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=01130bc0b065f8e937e2791bab41bb19&auto=format&fit=crop&w=1331&q=80"
                  authorImageSrc="http://i.pravatar.cc/100"
                  authorTitle="A$AP Rocky"
                  authorSubTitle="420 minutes ago"
              />
              <Card
                  neutral
                  fullBackgroundImage
                  image="https://images.unsplash.com/photo-1536567929406-c818f28ec428?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63eb43251970c0f821631dbd2db30425&auto=format&fit=crop&w=1350&q=80"
                  authorImageSrc="http://i.pravatar.cc/100"
                  authorTitle="Vini Vici"
                  authorSubTitle="420 minutes ago"
              />
              <Card
                  neutral
                  fullBackgroundImage
                  image="https://images.unsplash.com/photo-1536567893079-f54abdc73dc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6a56a131b11a6366446c42381192329&auto=format&fit=crop&w=1350&q=80"
                  authorImageSrc="http://i.pravatar.cc/100"
                  authorTitle="Offset"
                  authorSubTitle="420 minutes ago"
              />
            </View>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 3, // Отступ сверху
    flex: 1, // Компонент занимает все доступное пространство
    backgroundColor: '#fff', // Белый фон
    alignItems: 'center', // Выравнивание по центру по горизонтали
    justifyContent: 'flex-start', // Выравнивание по началу контейнера по вертикали
  },
});
