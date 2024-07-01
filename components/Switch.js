import React from 'react';
import { Switch, Platform } from 'react-native';

import materialTheme from '../constants/Theme'; // Импорт темы из констант

export default class MkSwitch extends React.Component {
  render() {
    const { value, ...props } = this.props;

    // Определение цвета для бегунка в зависимости от платформы и значения переключателя
    const thumbColor =
        Platform.OS === 'ios' ? null :
            Platform.OS === 'android' && value ? materialTheme.COLORS.SWITCH_ON : materialTheme.COLORS.SWITCH_OFF;

    return (
        <Switch
            value={value} // Значение переключателя (включено или выключено)
            thumbColor={thumbColor} // Цвет бегунка
            ios_backgroundColor={materialTheme.COLORS.SWITCH_OFF} // Цвет фона для iOS
            trackColor={{ false: materialTheme.COLORS.SWITCH_OFF, true: materialTheme.COLORS.SWITCH_ON }} // Цвет дорожки
            {...props} // Остальные пропсы передаются напрямую в компонент Switch
        />
    );
  }
}
