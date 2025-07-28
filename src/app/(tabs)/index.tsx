import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '@/src/components/Themed';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function TabOneScreen() {
	const [passwordSecure, setPasswordSecure] = useState<boolean>(false);
	const router = useRouter();
	return (
		<View style={styles.container}>
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
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
