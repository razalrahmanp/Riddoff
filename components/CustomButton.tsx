import { ButtonProps } from "@/types/type";
import { Text } from "@react-navigation/elements";
import { TouchableOpacity } from "react-native";


const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
    switch (variant) {
      case "secondary":
        return "bg-gray-500";
      case "danger":
        return "bg-red-500";
      case "success":
        return "bg-green-500";
      case "outline":
        return "bg-transparent border-neutral-300 border-[0.5px]";
      default:
        return "bg-[#0286FF]";
    }
  };


  const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
    switch (variant) {
      case "primary":
        return "text-white";
      case "secondary":
        return "text-gray-100";
      case "danger":
        return "text-red-100";
      case "success":
        return "text-green-100";
      default:
        return "text-white";
    }
  };
  
  const CustomButton = ({
    onPress,
    title,
    bgVariant = "primary",
    textVariant = "default",
    IconLeft,
    IconRight,
    className,
    ...props
  }: ButtonProps) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        className={`flex flex-row h-[50px] p-5 rounded-full justify-center items-center shadow-md shadow-neutral-400/70 
          ${getBgVariantStyle(bgVariant)} ${className}`}
        {...props}
      >
        {IconLeft && <IconLeft />}
        <Text className={`text-base font-semibold
          ${getTextVariantStyle(textVariant)}`}>
          {title}
        </Text>
        {IconRight && <IconRight />}
      </TouchableOpacity>
    );
  };
  
  export default CustomButton;