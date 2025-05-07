import CustomButton from "@/components/CustomButton"
import { onboarding } from "@/constants"
import { router } from 'expo-router'
import { useRef, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Swiper from "react-native-swiper"

const Onboarding = () => {
const swiperRef= useRef<Swiper>(null);
const [activeIndex, setActiveIndex] = useState(0);

const isLastSlide = activeIndex === onboarding.length - 1;


  return (
    <SafeAreaView className='flex h-full items-center justify-between bg-white'>
      <TouchableOpacity
      onPress={() => {
        router.replace("/(auth)/sign-up")
      }}
      className='w-full flex justify-end items-end p-5'
      >
        <Text className='text-black text-md font-JakartaBold'>Skip</Text>
      </TouchableOpacity>

      <View className="flex-1 w-full px-5">
<Swiper
      ref={swiperRef}
      loop={false}
      dot={
      <View className='w-2 h-2 mx-1 bg-gray-300 rounded-full'/>
    }
      activeDot={
      <View className='w-2 h-2 mx-1 bg-[#0286FF] rounded-full'/>
    }

    onIndexChanged={(index)=> setActiveIndex(index)}
      >

       {onboarding.map((item, index) => (
        <View key={index} className='flex-1 items-center justify-center p-5'>
          
        <View className="relative w-[280px] h-[320px] items-center justify-center">
          <Image 
          source={item.image}
          className="w-[280px] h-[300px] rounded-2xl shadow-lg"
          resizeMode="cover"
          />
          <Image 
          source={item.buttonImage}
          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[100px] h-[30px]"
          resizeMode="contain"
          />
        </View>
          
          <View className="flex flex-row items-center justify-center w-full mt-10">          
          <Text className='text-black text-3xl font-bold text-center mt-8'>
          {item.title}
          </Text>
          </View>
            <Text className="text-base font-medium text-center text-[#858585] mt-3">{item.description}</Text>
        </View>
))}
</Swiper>
</View>
      <View className="mb-10 w-full flex items-center">
      <CustomButton 
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        className="w-11/12 mt-10 font-bold "
      />
      </View>
    </SafeAreaView>
  )
}

export default Onboarding