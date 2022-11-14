import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
  "Reanimated 2",
  "EventEmitter.removeListener",
]);
import "react-native-gesture-handler";
import React, { useCallback, useState } from "react";
import {DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Root from "./src/routes/root";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import store from "./src/Redux/store";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import "./src/i18n";
import { useFonts } from "expo-font";
import { Inter_900Black } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";


function App({ navigation }) {
  let persistor = persistStore(store);


  const [fontsLoaded] = useFonts({
    Inter_900Black,
    InterSemiBoldItalic:
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
    Ultra: require("./assets/fonts/Ultra-Regular.ttf"),
    Dyna: require("./assets/fonts/DynaPuff.ttf"),
    RubikMazeRegular: require("./assets/fonts/RubikMazeRegular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;



  return (
    <PaperProvider  >
      <SafeAreaProvider>
        <NavigationContainer>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <BottomSheetModalProvider>
                <Root navigation={navigation} />
              </BottomSheetModalProvider>
            </PersistGate>
          </Provider>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
export default App;
