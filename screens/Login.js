import React from 'react';
import {
  Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Platform,
} from 'react-native';

// galio component
import {
  Block, Button, Input, NavBar, Text,
} from 'galio-framework';
import theme from '../theme';

const { height, width } = Dimensions.get('window');

class Login extends React.Component {
  state = {
    email: '-',
    password: '-',
  }

  // Обработчик изменения текста в полях ввода
  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;

    return (
        <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
          {/* Верхняя навигационная панель с возможностью открытия бокового меню */}
          <NavBar
              title="Sign In"
              onLeftPress={() => navigation.openDrawer()} // Открытие бокового меню
              style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null} // Установка стиля для Android
          />
          {/* Обертка для автоматического избегания клавиатуры */}
          <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
            <Block flex center style={{ marginTop: theme.SIZES.BASE * 1.875, marginBottom: height * 0.1 }}>
              {/* Текстовое описание текущего шага */}
              <Text muted center size={theme.SIZES.FONT * 0.875} style={{ paddingHorizontal: theme.SIZES.BASE * 2.3 }}>
                This is the perfect place to write a short description
                of this step and even the next steps ahead
              </Text>
              {/* Кнопки для входа через социальные сети */}
              <Block row center space="between" style={{ marginVertical: theme.SIZES.BASE * 1.875 }}>
                <Block flex middle right>
                  <Button
                      round
                      onlyIcon
                      iconSize={theme.SIZES.BASE * 1.625}
                      icon="facebook"
                      iconFamily="FontAwesome"
                      color={theme.COLORS.FACEBOOK}
                      shadowColor={theme.COLORS.FACEBOOK}
                      iconColor={theme.COLORS.WHITE}
                      style={styles.social}
                      onPress={() => Alert.alert('Not implemented')} // Вывод предупреждения о нереализованной функциональности
                  />
                </Block>
                <Block flex middle center>
                  <Button
                      round
                      onlyIcon
                      iconSize={theme.SIZES.BASE * 1.625}
                      icon="twitter"
                      iconFamily="FontAwesome"
                      color={theme.COLORS.TWITTER}
                      shadowColor={theme.COLORS.TWITTER}
                      iconColor={theme.COLORS.WHITE}
                      style={styles.social}
                      onPress={() => Alert.alert('Not implemented')} // Вывод предупреждения о нереализованной функциональности
                  />
                </Block>
                <Block flex middle left>
                  <Button
                      round
                      onlyIcon
                      iconSize={theme.SIZES.BASE * 1.625}
                      icon="dribbble"
                      iconFamily="FontAwesome"
                      color={theme.COLORS.DRIBBBLE}
                      shadowColor={theme.COLORS.DRIBBBLE}
                      iconColor={theme.COLORS.WHITE}
                      style={styles.social}
                      onPress={() => Alert.alert('Not implemented')} // Вывод предупреждения о нереализованной функциональности
                  />
                </Block>
              </Block>
              {/* Дополнительное текстовое описание */}
              <Text muted center size={theme.SIZES.FONT * 0.875}>
                or be classical
              </Text>
            </Block>

            {/* Основная часть формы входа */}
            <Block flex={2} center space="evenly">
              <Block flex={2}>
                {/* Поле ввода email */}
                <Input
                    rounded
                    type="email-address"
                    placeholder="Email"
                    autoCapitalize="none"
                    style={{ width: width * 0.9 }}
                    onChangeText={text => this.handleChange('email', text)} // Обновление состояния email
                />
                {/* Поле ввода пароля */}
                <Input
                    rounded
                    password
                    viewPass
                    placeholder="Password"
                    style={{ width: width * 0.9 }}
                    onChangeText={text => this.handleChange('password', text)} // Обновление состояния password
                />
                <Text
                    // Отображает текст "Forgot your password?" для ссылки на восстановление пароля.
                    color={theme.COLORS.ERROR} // Устанавливает цвет текста как цвет ошибки из темы приложения.
                    size={theme.SIZES.FONT * 0.75} // Устанавливает размер шрифта как 0.75 от базового размера шрифта из темы.
                    onPress={() => Alert.alert('Not implemented')} // Обработчик нажатия, вызывающий предупреждение о том, что функция ещё не реализована.
                    style={{ alignSelf: 'flex-end', lineHeight: theme.SIZES.FONT * 2 }} // Устанавливает выравнивание текста по правому краю и высоту строки.
                >
                  Forgot your password? {/* Текст, отображаемый в компоненте Text. */}
                </Text>
              </Block>
            <Block flex middle>
              <Button
                  round // Округляет углы кнопки.
                  color="error" // Устанавливает цвет кнопки как цвет ошибки из темы приложения.
                  onPress={() => Alert.alert(
                      'Sign in action', // Заголовок предупреждения при нажатии кнопки.
                      `Email: ${email}\nPassword: ${password}`, // Текст предупреждения с данными email и password.
                  )}
              >
                Sign in {/* Текст, отображаемый на кнопке. */}
              </Button>
              <Button
                  color="transparent" // Устанавливает прозрачный фон кнопки.
                  shadowless // Удаляет тень у кнопки.
                  onPress={() => navigation.navigate('Register')} // Обработчик нажатия, переходящий на экран регистрации.
              >
                <Text
                    center // Центрирует текст внутри компонента Text.
                    color={theme.COLORS.ERROR} // Устанавливает цвет текста как цвет ошибки из темы приложения.
                    size={theme.SIZES.FONT * 0.75} // Устанавливает размер шрифта как 0.75 от базового размера шрифта из темы.
                >
                  {"Don't have an account? Sign Up"} {/* Текст, отображаемый в компоненте Text. */}
                </Text>
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
  },
});

export default Login;
