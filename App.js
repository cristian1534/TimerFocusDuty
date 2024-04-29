import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';
import { spacing, fontSizes } from './src/utils/sizes';



export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
     <View>
        <Text style={styles.title}> 
          Dairy duties focus!
        </Text>
     </View>
     <View>
        <Text style={styles.intro}> 
          Write your duty on which you will make focus and choose the how much time 
          you will dedicate.
        </Text>
     </View>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory  history={history} setHistory={setHistory}/>
        </>
      ) : (
        <Timer 
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject])

          }}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
    marginTop: 50,
  },
  title: {
    marginTop: spacing.xxxl,
    marginLeft: spacing.lg,
    fontSize: fontSizes.lg, 
    color: colors.white,
    fontWeight: 'bold'
  },
  intro: {
    color: colors.white,
    marginTop: spacing.xxxl,
    marginLeft: spacing.lg,
  }
});
