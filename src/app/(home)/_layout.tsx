import { Redirect, Stack } from "expo-router";
import ChatProvider from "../../providers/Chatprovider";
import { useAuth } from "../../providers/AuthProvider";


export default function HomeLayout(){
    const { user } = useAuth();
    if (!user){
        return <Redirect href="/(auth)/login" />
    }

    return (
        
        <ChatProvider>
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </ChatProvider>

    );
}