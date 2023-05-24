import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import Screens from './screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  const [fontsLoaded] = useFonts({
    poppins_semibold: Poppins_600SemiBold,
    roboto: Roboto_400Regular,
    open_sans: OpenSans_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync()
  }, []);
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
