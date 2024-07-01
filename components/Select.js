import React from 'react';
import { StyleSheet } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { Block, Text, Icon } from 'galio-framework'; // Импорт компонентов и темы из galio-framework

export default class DropDown extends React.Component {
  state = {
    value: 1, // Изначальное значение выпадающего списка
  }

  handleOnSelect = (index, value) => {
    const { onSelect } = this.props;

    this.setState({ value: value }); // Установка выбранного значения
    onSelect && onSelect(index, value); // Вызов колбэка из пропсов
  }

  render() {
    const { onSelect, style, ...props } = this.props; // Деструктуризация пропсов
    return (
        <ModalDropdown
            style={[styles.qty, style]} // Стили для основного контейнера выпадающего списка
            onSelect={this.handleOnSelect} // Обработчик выбора элемента из списка
            dropdownStyle={styles.dropdown} // Стили для выпадающего списка
            dropdownTextStyle={{ paddingLeft: 16, fontSize: 12 }} // Стили для текста в выпадающем списке
            {...props} // Остальные пропсы передаются напрямую в ModalDropdown
        >
          <Block flex row middle space="between">
            <Text size={12}>{this.state.value}</Text> {/* Отображение текущего выбранного значения */}
            <Icon name="angle-down" family="font-awesome" size={11} /> {/* Иконка стрелки вниз */}
          </Block>
        </ModalDropdown>
    )
  }
}

const styles = StyleSheet.create({
  qty: {
    width: 100, // Ширина выпадающего списка
    backgroundColor: '#DCDCDC', // Фоновый цвет
    paddingHorizontal: 16, // Внутренние отступы по горизонтали
    paddingTop: 10, // Внутренний отступ сверху
    paddingBottom: 9.5, // Внутренний отступ снизу
    borderRadius: 3, // Скругление углов
    shadowColor: "rgba(0, 0, 0, 0.1)", // Цвет тени
    shadowOffset: { width: 0, height: 2 }, // Смещение тени
    shadowRadius: 4, // Радиус размытия тени
    shadowOpacity: 1, // Прозрачность тени
  },
  dropdown: {
    marginTop: 8, // Верхний отступ выпадающего списка
    marginLeft: -16, // Левый отступ выпадающего списка
    width: 100, // Ширина выпадающего списка
  },
});
