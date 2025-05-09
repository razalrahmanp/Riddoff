// app/(auth)/sign-in.tsx
import { useSignIn } from "@clerk/clerk-expo";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { ReactNativeModal } from "react-native-modal";

import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";

export default function SignIn() {
  const { signIn, isLoaded, setActive } = useSignIn();
  const router = useRouter();
  const { email: prefillEmail } = useLocalSearchParams<{ email: string }>();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errorState, setErrorState] = useState<{
    message: string;
    visible: boolean;
  }>({ message: "", visible: false });

  // Prefill email if coming from sign-up flow
  useEffect(() => {
    if (prefillEmail) {
      setForm((f) => ({ ...f, email: prefillEmail }));
    }
  }, [prefillEmail]);

  const onSignInPress = async () => {
    if (!isLoaded) return;
    const email = form.email.trim().toLowerCase();
    const password = form.password.trim();
    if (!email || !password) {
      return Alert.alert(
        "Missing Fields",
        "Please enter both your email and password."
      );
    }

    try {
      // 1) Attempt sign-in
      const attempt = await signIn.create({
        identifier: email,
        password,
      });

      // 2) If complete, set the session and redirect
      if (attempt.status === "complete") {
        await setActive({session:attempt.createdSessionId!});
        router.replace("/(root)/(tabs)/home");
      } else {
        // e.g. MFA or other flows not enabled in your setup
        setErrorState({
          message: "Unexpected sign-in status. Please try again.",
          visible: true,
        });
      }
    } catch (err: any) {
      console.error("Sign-in error:", err);
      // Show Clerk’s first error message, or fallback
      const msg =
        err.errors?.[0]?.longMessage ||
        err.message ||
        "Sign-in failed. Please try again.";
      setErrorState({ message: msg, visible: true });
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        {/* Header */}
        <View className="relative w-full h-[250px]">
          <Image
            source={images.coverimage}
            className="z-0 w-full h-[250px]"
            resizeMode="cover"
          />
          <Text className="text-2xl text-white font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome Back
          </Text>
        </View>

        {/* Form */}
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            autoCapitalize="none"
            value={form.email}
            onChangeText={(v) => setForm((f) => ({ ...f, email: v }))}
          />
          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry
            textContentType="password"
            value={form.password}
            onChangeText={(v) => setForm((f) => ({ ...f, password: v }))}
          />

          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            className="mt-6"
          />

          <OAuth />

          <Text
            onPress={() => router.push("/(auth)/forgot-password")}
            className="text-center text-sm text-gray-500 mt-4"
          >
            Forgot your password?
          </Text>

          <Text className="text-lg text-center text-general-200 mt-10">
            Don’t have an account?{" "}
            <Text
              className="text-primary-500"
              onPress={() => router.replace("/(auth)/sign-up")}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </View>

      {/* Error Modal */}
      <ReactNativeModal
        isVisible={errorState.visible}
        onBackdropPress={() => setErrorState({ ...errorState, visible: false })}
      >
        <View className="bg-white px-7 py-9 rounded-2xl min-h-[200px]">
          <Text className="text-xl font-JakartaBold mb-2">Sign-In Failed</Text>
          <Text className="text-base text-gray-600 mb-4">
            {errorState.message}
          </Text>
          <CustomButton
            title="OK"
            onPress={() => setErrorState({ ...errorState, visible: false })}
            className="bg-primary-500"
          />
        </View>
      </ReactNativeModal>
    </ScrollView>
  );
}
