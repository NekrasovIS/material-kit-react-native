import React from "react";
import { TouchableWithoutFeedback, ScrollView, StyleSheet, Image } from "react-native";
import { Block, Text, theme } from "galio-framework";
import { useSafeArea } from "react-native-safe-area-context";
import { Icon, Drawer as DrawerCustomItem } from '../components/';
import { Images, materialTheme } from "../constants/";
// Компонент CustomDrawerContent: Основной компонент, который принимает несколько пропсов
function CustomDrawerContent({
  drawerPosition, // Позиция бокового меню (слева или справа)
  navigation, // Объект навигации
  profile, // Данные профиля пользователя
  focused, // Индикатор фокусировки на элементе
  state, // Состояние навигации
  ...rest // Остальные пропсы
}) {
  const insets = useSafeArea(); // Учет безопасных зон устройства

  // Перечень экранов
  const screens = [
    "Home",
    "Woman",
    "Man",
    "Kids",
    "New Collection",
    "Profile",
    "Settings",
    "Components"
  ];

  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      {/* Заголовок меню с информацией профиля */}
      <Block flex={0.25} style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Profile")}
        >
          <Block style={styles.profile}>
            <Image source={{ uri: profile.avatar }} style={styles.avatar} />
            <Text h5 color={"white"}>
              {profile.name}
            </Text>
          </Block>
        </TouchableWithoutFeedback>
        <Block row>
          <Block middle style={styles.pro}>
            <Text size={16} color="white">
              {profile.plan}
            </Text>
          </Block>
          <Text size={16} muted style={styles.seller}>
            {profile.type}
          </Text>
          <Text size={16} color={materialTheme.COLORS.WARNING}>
            {profile.rating}{" "}
            <Icon name="shape-star" family="GalioExtra" size={14} />
          </Text>
        </Block>
      </Block>

      {/* Навигационные элементы */}
      <Block flex style={{ paddingLeft: 7, paddingRight: 14 }}>
        <ScrollView
          contentContainerStyle={[
            {
              paddingTop: insets.top * 0.4,
              paddingLeft: drawerPosition === "left" ? insets.left : 0,
              paddingRight: drawerPosition === "right" ? insets.right : 0
            }
          ]}
          showsVerticalScrollIndicator={false}
        >
          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index}
              />
            );
          })}
        </ScrollView>
      </Block>

      {/* Дополнительные элементы (Sign In и Sign Up) */}
      <Block flex={0.3} style={{ paddingLeft: 7, paddingRight: 14 }}>
        <DrawerCustomItem
          title="Sign In"
          navigation={navigation}
          focused={state.index === 8}
        />
        <DrawerCustomItem
          title="Sign Up"
          navigation={navigation}
          focused={state.index === 9}
        />
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#4B1958',
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 2,
    justifyContent: 'center',
  },
  profile: {
    marginBottom: theme.SIZES.BASE / 2,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginBottom: theme.SIZES.BASE,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: 8,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: 16,
  }
});

export default CustomDrawerContent;
