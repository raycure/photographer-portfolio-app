import { Pressable, Text } from 'react-native';
import { View } from '../Themed';
import HomeSwiper from './HomeSwiper';
import { useInteractionStore } from '@/src/stores/InteractionStore';
import { HomeLayoutStyles } from './HomeStyles';

export default function HomeLayout() {
	const interactionStore = useInteractionStore();
	const styles = HomeLayoutStyles;
	return (
		<View style={styles.outerContainer}>
			<HomeSwiper />
			<Pressable onPress={() => interactionStore.resetStore()}>
				<Text>test</Text>
			</Pressable>
		</View>
	);
}
