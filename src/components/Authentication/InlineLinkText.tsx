import { Pressable, View } from 'react-native';
import { Text } from '../Themed';
import { router } from 'expo-router';
import { FormProps } from './Types';
import { useColors } from '@/src/hooks/useColors';
type InlineLinkTextProps = {
	type: FormProps['type'];
};
export default function InlineLinkText({ type }: InlineLinkTextProps) {
	const colors = useColors();
	return (
		<View style={{ flexDirection: 'row', gap: 4, margin: 20 }}>
			<Text style={{ color: colors.gray400 }}>
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
				<Text style={{ color: colors.tint }}>
					{type === 'register' ? 'Login' : 'Register'}
				</Text>
			</Pressable>
		</View>
	);
}
