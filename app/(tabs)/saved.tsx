import { icons } from "@/constants/icons";
import { Image, Text, View } from "react-native";

const Saved = () => {
  return (
    <View className="flex-1 bg-primary px-10">
      <View className="flex-1 items-center justify-center flex-col gap-5">
        <Image source={icons.save} className="size-20" tintColor="#fff" />
        <Text className="text-gray-500 text-base">Saved</Text>
      </View>
      <Text>Saved</Text>
    </View>
  );
};

export default Saved;
