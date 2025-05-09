import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import './globals.css';

    
SplashScreen.preventAutoHideAsync();
function AuthGate({ children }: { children: React.ReactNode }) {
  const { isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded) SplashScreen.hideAsync();
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <>{children}</>;
}


export default function RootLayout() {
  
  return (

    <ClerkProvider tokenCache={tokenCache}> 
    <AuthGate>
    <Stack>
    <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(root)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="events/[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
    </AuthGate>
    </ClerkProvider>

  );
}
