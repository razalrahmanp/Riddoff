import awsconfig from '@/lib/aws-exports';
import { Amplify } from 'aws-amplify';
import { confirmSignUp, resendSignUpCode } from 'aws-amplify/auth';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, Text, View } from 'react-native';

import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import { icons, images } from '@/constants';


Amplify.configure(awsconfig);

const ConfirmSignUp = () => {
  const { email } = useLocalSearchParams<{ email: string }>();
  const [code, setCode] = useState('');

  const handleConfirm = async () => {
    if (!code) {
      Alert.alert('Missing Code', 'Please enter the confirmation code.');
      return;
    }
    if (!email) {
      Alert.alert('Missing Email', 'Email is required. Please go back and sign up again.');
      return;
    }
    

    try {
      const result = await confirmSignUp({ username: email, confirmationCode: code });
      console.log('Confirmation success:', result);
      Alert.alert('Success', 'Account confirmed. You can now log in.');
      router.replace('/sign-in');
    } catch (error: any) {
      console.error('Error confirming sign-up:', error);
      Alert.alert('Error', error.message || 'Failed to confirm sign-up');
    }
  };

  const handleResend = async () => {
    if (!email) return;
    try {
      await resendSignUpCode({ username: email });
      Alert.alert('Code Sent', 'A new confirmation code has been sent to your email.');
    } catch (error: any) {
      console.error('Error resending code:', error);
      Alert.alert('Error', error.message || 'Failed to resend code');
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.coverimage} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-white font-JakartaSemiBold absolute bottom-5 left-5">
            Confirm Your Email
          </Text>
        </View>

        <View className="p-5">
          <Text className="text-base text-gray-600 mb-2">
            Enter the 6-digit code sent to {email}
          </Text>

          <InputField
            label="Confirmation Code"
            placeholder="Enter code"
            icon={icons.lock}
            keyboardType="numeric"
            value={code}
            onChangeText={setCode}
          />

          <CustomButton title="Confirm Account" onPress={handleConfirm} className="mt-6" />
          <CustomButton title="Resend Code" onPress={handleResend} className="mt-2" bgVariant="secondary" />
        </View>
      </View>
    </ScrollView>
  );
};

export default ConfirmSignUp;
