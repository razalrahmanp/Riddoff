
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import { icons, images } from '@/constants';




const ConfirmSignUp = () => {
  
  

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
