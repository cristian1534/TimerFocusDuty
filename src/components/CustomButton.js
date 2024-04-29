import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

export const CustomButton = ({ setHistory}) => (
  <View style={styles.container}>
    <TouchableRipple
      onPress={() => setHistory([])}
      style={styles.button}>
      <Text style={styles.title}>Clear History</Text>
    </TouchableRipple>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    borderRadius: 125 / 2,
    padding: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
    borderWidth: 2,
    marginTop: spacing.xxxl,
  },
  title: {
    color: colors.white,
  },
});
