import { Pressable, StyleSheet, Text } from 'react-native';
import { View } from '../Themed';
import { useRouter } from 'expo-router';
import HomeSwiper from './HomeSwiper';

export default function HomeLayout() {
	const router = useRouter();
	return (
		<View style={styles.outerContainer}>
			<HomeSwiper />
			<Pressable onPress={() => router.push('/(secure)')}>
				<Text>login</Text>
			</Pressable>
			<Pressable
				onPress={() => {
					router.push('/(stack)');
				}}
			>
				<Text>button</Text>
			</Pressable>
		</View>
	);
}
const styles = StyleSheet.create({
	outerContainer: { flex: 1, alignItems: 'center', padding: 16 },
});
