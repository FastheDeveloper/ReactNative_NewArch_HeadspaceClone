import { Stack, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { meditations } from "../../data";

export default function MeditationDetails() {
  const { meditationid } = useLocalSearchParams<{ meditationid: string }>();
  const meditation = meditations.find((m) => m.id === Number(meditationid));

  if (!meditation) {
    return <Text> Meditation not found</Text>;
  }
  return (
    <>
      <Text className="mt-16"> {meditation?.title}</Text>
    </>
  );
}
