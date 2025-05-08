import awsconfig from "@/lib/aws-exports";
import { Amplify } from 'aws-amplify';
import { Stack } from "expo-router";
import './globals.css';

Amplify.configure(awsconfig);

export default function RootLayout() {
  return <Stack>

    <Stack.Screen
    name = "(root)"
    options={{
      headerShown: false,}}
    />
    <Stack.Screen
    name="(auth)"
    options={{
      headerShown: false,    }}
    />
    <Stack.Screen
    name = "events/[id]"
    options={{
      headerShown: false,
    }}
    />

  </Stack>
}
