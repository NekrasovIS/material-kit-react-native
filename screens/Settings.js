import React, { useState } from 'react';
import { StyleSheet, Switch, FlatList, Platform, TouchableOpacity, View } from 'react-native';
import { Block, Text, theme, Icon } from 'galio-framework';
import materialTheme from '../constants/Theme';

const Settings = ({ navigation }) => {
  const [switches, setSwitches] = useState({});

  const toggleSwitch = (switchId) => {
    setSwitches({ ...switches, [switchId]: !switches[switchId] });
  };

  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'switch':
        return (
            <Block row middle space="between" style={styles.rows}>
              <Text size={14}>{item.title}</Text>
              <Switch
                  onValueChange={() => toggleSwitch(item.id)}
                  ios_backgroundColor={materialTheme.COLORS.SWITCH_OFF}
                  thumbColor={Platform.OS === 'android' ? materialTheme.COLORS.SWITCH_OFF : null}
                  trackColor={{ false: materialTheme.COLORS.SWITCH_OFF, true: materialTheme.COLORS.SWITCH_ON }}
                  value={switches[item.id]}
              />
            </Block>
        );
      case 'button':
        return (
            <Block style={styles.rows}>
              <TouchableOpacity onPress={() => navigation.navigate('Pro')}>
                <Block row middle space="between" style={{ paddingTop: 7 }}>
                  <Text size={14}>{item.title}</Text>
                  <Icon name="angle-right" family="font-awesome" style={{ paddingRight: 5 }} />
                </Block>
              </TouchableOpacity>
            </Block>
        );
      default:
        return null;
    }
  };

  const renderSection = (data, title, subtitle) => (
      <View style={styles.section}>
        <Block style={styles.title}>
          <Text bold center size={theme.SIZES.BASE} style={{ paddingBottom: 5 }}>
            {title}
          </Text>
          <Text center muted size={12}>
            {subtitle}
          </Text>
        </Block>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
      </View>
  );

  const recommended = [
    { title: "Use FaceID to sign in", id: "face", type: "switch" },
    { title: "Auto-Lock security", id: "autolock", type: "switch" },
    { title: "Notifications", id: "Notifications", type: "button" },
  ];

  const payment = [
    { title: "Manage Payment Options", id: "Payment", type: "button" },
    { title: "Manage Gift Cards", id: "gift", type: "button" },
  ];

  const privacy = [
    { title: "User Agreement", id: "Agreement", type: "button" },
    { title: "Privacy", id: "Privacy", type: "button" },
    { title: "About", id: "About", type: "button" },
  ];

  return (
      <View style={styles.container}>
        {renderSection(recommended, 'Recommended Settings', 'These are the most important settings')}
        {renderSection(payment, 'Payment Settings', 'These are also important settings')}
        {renderSection(privacy, 'Privacy Settings', 'Third most important settings')}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: theme.SIZES.BASE / 3,
  },
  section: {
    marginBottom: theme.SIZES.BASE * 2,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  rows: {
    height: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE / 2,
  },
});

export default Settings;
