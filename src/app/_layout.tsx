import { Slot,Stack } from "expo-router";
import "../../global.css";
export default function RootLayout(){
    return (<Stack> 
        <Stack.Screen name="index" options={{title:'Meditations'}}/>
        <Stack.Screen name="meditation/[meditationid]" options={{title:'Details',headerShown:false, animation:'slide_from_bottom'}}/>
    </Stack>)
}