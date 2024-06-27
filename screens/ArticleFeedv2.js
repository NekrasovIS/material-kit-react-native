import React from 'react';
import {
    ScrollView, StyleSheet, Image,
} from 'react-native';

// Galio components
import {
    Block, Card, Text, NavBar,
} from 'galio-framework';
import theme from '../theme';

export default class ArticleHalf extends React.Component {
    render() {
        const { navigation } = this.props; // Достаем объект навигации из свойств компонента
        return (
            <Block flex> {/* Основной блок, который занимает всю доступную высоту */}
                <NavBar
                    transparent // Навигационная панель прозрачна
                    title="Article Feed v2" // Заголовок навигационной панели
                    onLeftPress={() => navigation.openDrawer()} // Обработчик нажатия на левую часть навигационной панели
                />

                <ScrollView style={{ flex: 1 }}> {/* Компонент для прокручиваемой области */}
                    <Block flex style={styles.container}> {/* Блок контента, занимающий всю доступную высоту */}
                        {/* Карточка с изображением, автором и информацией */}
                        <Card
                            image="https://images.unsplash.com/photo-1536523552737-74ded3c0591c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c93e90e0868aa428ec388db1ce633272&auto=format&fit=crop&w=1351&q=80"
                            authorImageSrc="http://i.pravatar.cc/100" // Изображение автора (заглушка)
                            authorTitle="Alin Gheorghe" // Имя автора
                            authorSubTitle="420 minutes ago" // Время прошедшее с публикации
                            rightSideComponent={(
                                <Block row middle> {/* Компонент справа от основного контента */}
                                    <Image
                                        source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/location-pin-127-595049.png' }}
                                        style={{ width: 15, height: 15 }} // Стилизация изображения местоположения
                                    />
                                    <Text p muted>Los Angeles, CA</Text> {/* Текст с информацией о местоположении */}
                                </Block>
                            )}
                        />
                        {/* Другие карточки с различными изображениями и данными авторов */}
                        <Card
                            image="https://images.unsplash.com/photo-1536396123481-991b5b636cbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=01130bc0b065f8e937e2791bab41bb19&auto=format&fit=crop&w=1331&q=80"
                            authorImageSrc="http://i.pravatar.cc/100"
                            authorTitle="Einstein aka Young Physics"
                            authorSubTitle="420 minutes ago"
                        />
                        <Card
                            image="https://images.unsplash.com/photo-1536567929406-c818f28ec428?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63eb43251970c0f821631dbd2db30425&auto=format&fit=crop&w=1350&q=80"
                            authorImageSrc="http://i.pravatar.cc/100"
                            authorTitle="Lil' Pump"
                            authorSubTitle="420 minutes ago"
                            rightSideComponent={(
                                <Block row middle>
                                    <Image
                                        source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/location-pin-127-595049.png' }}
                                        style={{ width: 15, height: 15, marginRight: 2 }} // Стилизация изображения местоположения
                                    />
                                    <Text p muted>Los Angeles, CA</Text> {/* Текст с информацией о местоположении */}
                                </Block>
                            )}
                        />
                        <Card
                            image="https://images.unsplash.com/photo-1536567893079-f54abdc73dc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6a56a131b11a6366446c42381192329&auto=format&fit=crop&w=1350&q=80"
                            authorImageSrc="http://i.pravatar.cc/100"
                            authorTitle="Kanye West"
                            authorSubTitle="420 minutes ago"
                        />
                    </Block>
                </ScrollView>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 3, // Отступ сверху
        backgroundColor: theme.COLORS.WHITE, // Фон контейнера
        alignItems: 'center', // Выравнивание по центру по горизонтали
        justifyContent: 'flex-start', // Выравнивание контента вверху контейнера
    },
});
