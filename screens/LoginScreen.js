import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

// Импорт пользовательских компонентов и утилит
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../src/components/Header';
import Button from '../src/components/Button';
import TextInput from '../src/components/TextInput';
import BackButton from '../components/BackButton';

// Импорт темы и валидаторов
import { theme } from '../src/core/theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';

export default function LoginScreen({ navigation }) {
    // Состояния для управления полем электронной почты и пароля
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    // Обработчик нажатия на кнопку входа
    const onLoginPressed = () => {
        // Валидация электронной почты и пароля
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        // Если есть ошибки валидации, устанавливаем их в состояние и прерываем выполнение
        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        }

        // Сброс навигации и переход на экран Dashboard
        navigation.reset({
            index: 0,
            routes: [{ name: 'Dashboard' }],
        });
    };

    return (
        <Background>
            {/* Кнопка "Назад" для возврата на предыдущий экран */}
            <BackButton goBack={navigation.goBack} />

            {/* Логотип приложения */}
            <Logo />

            {/* Заголовок экрана */}
            <Header>Welcome back.</Header>

            {/* Поле ввода электронной почты */}
            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />

            {/* Поле ввода пароля */}
            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />

            {/* Ссылка для сброса пароля */}
            <View style={styles.forgotPassword}>
                <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordScreen')}>
                    <Text style={styles.forgot}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>

            {/* Кнопка для входа */}
            <Button mode="contained" onPress={onLoginPressed}>
                Login
            </Button>

            {/* Строка с ссылкой на регистрацию */}
            <View style={styles.row}>
                <Text>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
}

// Стили компонентов
const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.secondary, // Цвет текста для ссылки на восстановление пароля из темы приложения
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary, // Цвет текста для ссылки на регистрацию из темы приложения
    },
});
