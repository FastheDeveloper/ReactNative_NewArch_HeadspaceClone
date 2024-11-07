import { Link, router, Stack, useLocalSearchParams } from "expo-router";
import { Text, View, Pressable } from "react-native";
import { meditations } from "../../data";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Slider from "@react-native-community/slider";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";

export default function MeditationDetails() {
  const { meditationid } = useLocalSearchParams<{ meditationid: string }>();
  const meditation = meditations.find((m) => m.id === Number(meditationid));
  const { top, bottom } = useSafeAreaInsets();
  const player=useAudioPlayer(require('../../../assets/meditations/audio1.mp3'))
  const status=useAudioPlayerStatus(player)

  const formatSeconds=(milliseconds:number)=>{
    const minutes=Math.floor(milliseconds/60000)
    const seconds=Math.floor((milliseconds%60000)/1000);
    return `${minutes}:${seconds.toString().padStart(2,'0')}`
  }
  if (!meditation) {
    return <Text> Meditation not found</Text>;
  }
  return (
    <SafeAreaView className="bg-orange-400 flex-1 p-2 justify-between">
      <View className="flex-1">
        <View className=" flex-1">
          <View className="flex-row items-center justify-between p-10">
            <AntDesign name="info" size={30} color={"black"} />
            <View className="bg-zinc-800 p-2">
              <Text className=" text-white font-semibold ">
                {" "}
                Todays Meditation
              </Text>
            </View>
            <Link href={"../"} asChild>
              <AntDesign
                name="close"
                size={30}
                color={"black"}
                // onPress={()=>router.back()}
              />
            </Link>
          </View>
          <Text className=" text-zinc-800 text-center font-semibold text-3xl">
            {meditation?.title}
          </Text>
        </View>

        {/* PlayPause */}

        <Pressable onPress={()=>player.playing ?player.pause() :player.play()} className="bg-zinc-800 self-center w-20 aspect-square rounded-full justify-center items-center">
          <FontAwesome6 name={status.playing? "pause":"play"} size={30} color={"white"} />
        </Pressable>

        {/* footer Player */}
        <View className=" flex-1 justify-end gap-5">
          <View className="p-5">
            <View className="justify-between flex-row">
              <MaterialIcons name="airplay" size={30} color={"bg-zinc-800"} />
              <MaterialCommunityIcons
                name="cog"
                size={30}
                color={"bg-zinc-800"}
              />
            </View>
          </View>

          {/* Playback indicator */}
          <View>
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={0}
              maximumValue={1}
              value={status.currentTime/status.duration}
              onSlidingComplete={(value)=>player.seekTo(value*status.duration)}
              minimumTrackTintColor="#3A3937"
              maximumTrackTintColor="#3A393735"
              thumbTintColor="#3A3937"
              
            />
          </View>
          <View className="flex-row justify-between">
            <Text>{formatSeconds(status.currentTime)}</Text>
            <Text>{formatSeconds(status.duration)}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
