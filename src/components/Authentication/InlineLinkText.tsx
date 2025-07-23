import { Pressable, useColorScheme, View } from 'react-native';
import { Text } from '../Themed';
import { Link, router } from 'expo-router';
import Colors from '@/src/constants/Colors';
import { FormProps } from './Types';
type InlineLinkTextProps = {
	type: FormProps['type'];
};
export default function InlineLinkText({ type }: InlineLinkTextProps) {
	const colorScheme = useColorScheme();
	return (
		<View style={{ flexDirection: 'row', gap: 4, margin: 20 }}>
			<Text style={{ color: Colors[colorScheme ?? 'dark'].gray400 }}>
				{type === 'register'
					? 'Already have an account?'
					: "Don't have an account?"}
			</Text>
			<Pressable
				onPress={() => {
					if (type === 'register') {
						router.navigate('/(secure)/login');
					} else {
						router.back();
					}
				}}
			>
				<Text style={{ color: Colors[colorScheme ?? 'dark'].tint }}>
					{type === 'register' ? 'Login' : 'Register'}
				</Text>
			</Pressable>
		</View>
	);
}
