import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function CreatePostScreen() {
  const cameraRef = useRef<Camera | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      setPhotoUri(uri);
    }
  };

  if (hasPermission === null) return <View className="flex-1 bg-black" />;
  if (hasPermission === false) return <Text className="text-center mt-10">No access to camera</Text>;

  return (
    <View className="flex-1 bg-black">
      {photoUri ? (
        <Image source={{ uri: photoUri }} className="flex-1 w-full h-full" resizeMode="cover" />
      ) : (
        <Camera 
        ref={cameraRef} 
        className="flex-1 w-full"
        type={Camera.Constants.Type.back} 
        />
      )}

      <View className="absolute top-12 left-4">
        {photoUri && (
          <TouchableOpacity onPress={() => setPhotoUri(null)}>
            <Ionicons name="chevron-back" size={32} color="white" />
          </TouchableOpacity>
        )}
      </View>

      <View className="absolute bottom-10 w-full flex-row justify-around items-center px-6">
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="image-outline" size={28} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={takePicture} className="w-16 h-16 bg-red-600 rounded-full border-[5px] border-white" />

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="flash-outline" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
