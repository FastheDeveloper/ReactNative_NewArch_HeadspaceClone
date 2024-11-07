import { Text, View,FlatList } from "react-native";
import { Meditation } from "../types";

interface MeditationListItemProps {
    meditation: Meditation;
  }
  
export default function MeditationListItem({meditation}:MeditationListItemProps){
    return(
        <View className="p-5  border-2 rounded-2xl border-gray-300" >
        <Text className="font-semibold text-2xl">{meditation.title}</Text>
      </View>
    )
}

