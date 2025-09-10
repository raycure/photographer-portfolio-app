import { Pressable, Text } from 'react-native';
import { View } from '../Themed';
import { NotificationsLayoutStyles } from './NotificationsStyles';
import { useRouter } from 'expo-router';

export default function NotificationsLayout() {
	const styles = NotificationsLayoutStyles;
	const router = useRouter();
	return (
		<View style={styles.outerContainer}>
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
