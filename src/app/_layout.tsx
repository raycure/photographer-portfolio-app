import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import CustomModal from '../components/Modal/CustomModal';
import { useUserInfoStore } from '../stores/UserInfoStore';
import { useInteractionStore } from '../stores/InteractionStore';

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
	initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const userInfoStore = useUserInfoStore();
	const interactionsStore = useInteractionStore();
	const isDarkColorScheme = userInfoStore.preferences.darkTheme;
	const isLoggedIn = !!userInfoStore.personalInfo.id;
	const hasSeenOnboarding = interactionsStore.modalsInteracted.onboarding.seen;
	const getInitialRoute = () => {
		if (!hasSeenOnboarding) return '(onboarding)';
		if (!isLoggedIn) return '(secure)';
		return '(tabs)';
	};
	return (
		<ThemeProvider value={isDarkColorScheme ? DarkTheme : DefaultTheme}>
			<CustomModal />
			<Stack initialRouteName={getInitialRoute()}>
				<Stack.Protected guard={isLoggedIn}>
					<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
					<Stack.Screen name='(stack)' options={{ headerShown: false }} />
				</Stack.Protected>
				<Stack.Protected guard={!hasSeenOnboarding}>
					<Stack.Screen name='(onboarding)' options={{ headerShown: false }} />
				</Stack.Protected>
				<Stack.Protected guard={!isLoggedIn}>
					<Stack.Screen name='(secure)' options={{ headerShown: false }} />
				</Stack.Protected>
			</Stack>
		</ThemeProvider>
	);
}
