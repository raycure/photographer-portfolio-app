import { Pressable, Text } from 'react-native';
import { View } from '../Themed';
import HomeSwiper from './HomeSwiper';
import { useInteractionStore } from '@/src/stores/InteractionStore';
import { useRouter } from 'expo-router';
import { HomeLayoutStyles } from './HomeStyles';

export default function HomeLayout() {
	const interactionStore = useInteractionStore();
	const router = useRouter();
	const styles = HomeLayoutStyles;
	return (
		<View style={styles.outerContainer}>
			<HomeSwiper />
			<Pressable onPress={() => interactionStore.resetStore()}>
				<Text>test</Text>
			</Pressable>
			<Pressable onPress={() => router.push('/(secure)/login')}>
				<Text>test</Text>
			</Pressable>
			<Pressable onPress={() => router.push('/(stack)')}>
				<Text>test</Text>
			</Pressable>
		</View>
	);
}
