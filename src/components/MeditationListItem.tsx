import { Text, View, FlatList } from "react-native";
import { Meditation } from "../types";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface MeditationListItemProps {
  meditation: Meditation;
}

export default function MeditationListItem({
  meditation,
}: MeditationListItemProps) {
  return (
    <View className="flex-row items-center gap-4">
      <View className="bg-green-700 rounded-full p-2">
        <FontAwesome name="check" size={16} color={"white"} />
      </View>
      <View className="p-5 py-8 border-2 rounded-2xl border-gray-300 flex-1">
        <Text className="font-semibold text-2xl mb-2">{meditation.title}</Text>

        <View className="flex-row items-center gap-1">
          <FontAwesome6 name="clock" size={16} color="dimgray" />
          <Text className="text-gray-600">{meditation.duration}</Text>
        </View>
      </View>
    </View>
  );
}
