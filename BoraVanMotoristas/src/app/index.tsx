import { indexStyles as styles } from '@/styles';
import { Stack } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from "expo-router";


export default function HomeScreen() {
  return (
    <>
  
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.logoWrapper}>
            <Text style={styles.logo}>
              BORA
              <Text style={styles.logoAccent}>VAN</Text>
            </Text>
          </View>

          <View style={styles.buttonsWrapper}>
            <Pressable
              style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
              onPress={() => router.push("/loginct copy")}
            >
              <Text style={styles.buttonText}>Sou Motorista</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
              onPress={() => router.push("/loginct")}
            >
              <Text style={styles.buttonText}>Sou Responsável</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}
