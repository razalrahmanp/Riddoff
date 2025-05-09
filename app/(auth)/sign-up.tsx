import { useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { ReactNativeModal } from "react-native-modal";

import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";

export default function SignUp() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [verification, setVerification] = useState({
    state: "default" as "default" | "pending" | "success" | "failed",
    code: "",
    error: "",
  });

  const onSignUpPress = async () => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: form.email.trim().toLowerCase(),
        password: form.password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setVerification((v) => ({ ...v, state: "pending", error: "" }));
    } catch (err: any) {
      console.error(err);
      Alert.alert("Sign-up Error", err.errors?.[0]?.longMessage || err.message);
    }
  };

  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      const attempt = await signUp.attemptEmailAddressVerification({
        code: verification.code.trim(),
      });

      if (attempt.status === "complete") {
        await setActive({ session: attempt.createdSessionId! });
        setVerification((v) => ({ ...v, state: "success" }));
      } else {
        setVerification((v) => ({
          ...v,
          state: "failed",
          error: "Verification failed, please try again.",
        }));
      }
    } catch (err: any) {
      console.error(err);
      setVerification((v) => ({
        ...v,
        state: "failed",
        error: err.errors?.[0]?.longMessage || err.message,
      }));
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
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>

        {/* Form */}
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter name"
            icon={icons.person}
            value={form.name}
            onChangeText={(v) => setForm((f) => ({ ...f, name: v }))}
          />
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
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

          <CustomButton title="Sign Up" onPress={onSignUpPress} className="mt-6" />

          <OAuth />

          <Text className="text-lg text-center text-general-200 mt-10">
            Already have an account?{" "}
            <Text
              className="text-primary-500"
              onPress={() => router.replace("/(auth)/sign-in")}
            >
              Log In
            </Text>
          </Text>
        </View>

        {/* Verification Modal */}
        <ReactNativeModal isVisible={verification.state === "pending"}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Text className="font-JakartaExtraBold text-2xl mb-2">Verification</Text>
            <Text className="font-Jakarta mb-5">
              We&apos;ve sent a verification code to {form.email}.
            </Text>
            <InputField
              label="Code"
              icon={icons.lock}
              placeholder="123456"
              keyboardType="numeric"
              value={verification.code}
              onChangeText={(code) =>
                setVerification((v) => ({ ...v, code, error: "" }))
              }
            />
            {verification.error ? (
              <Text className="text-red-500 text-sm mt-1">{verification.error}</Text>
            ) : null}
            <CustomButton
              title="Verify Email"
              onPress={onVerifyPress}
              className="mt-5 bg-success-500"
            />
          </View>
        </ReactNativeModal>

        {/* Success Modal */}
        <ReactNativeModal isVisible={verification.state === "success"}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Image
              source={images.check}
              className="w-[110px] h-[110px] mx-auto my-5"
            />
            <Text className="text-3xl font-JakartaBold text-center">Verified</Text>
            <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
              Your account is now active.
            </Text>
            <CustomButton
              title="Browse Home"
              onPress={() => router.replace("/(root)/(tabs)/home")}
              className="mt-5"
            />
          </View>
        </ReactNativeModal>
      </View>
    </ScrollView>
  );
}
