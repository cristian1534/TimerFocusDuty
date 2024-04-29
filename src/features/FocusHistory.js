import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { spacing, fontSizes } from '../utils/sizes';
import { CustomButton } from '../components/CustomButton';

export const FocusHistory = ({ history, setHistory }) => {
  if (!history || !history.length) return <Text style={styles.emptyHistory}>...We have not focus yet...</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>{item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Focus will be on: </Text>
      <FlatList data={history} renderItem={renderItem} />
       <CustomButton setHistory={setHistory}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    paddingLeft: spacing.lg,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
    marginLeft: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
  emptyHistory: {
    color: colors.white,
    padding: spacing.md,
    paddingLeft: spacing.lg,
  },
});
