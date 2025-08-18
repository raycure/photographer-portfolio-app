import { Pressable, View } from 'react-native';
import { Text } from '../Themed';
import { router } from 'expo-router';
import { InlineLinkTextProps } from './AuthTypes';
import { useColors } from '@/src/hooks/useColors';
import { InlineLinkTextStyles } from './AuthStyles';

export default function InlineLinkText({ type }: InlineLinkTextProps) {
	const colors = useColors();
	const styles = InlineLinkTextStyles;
	return (
		<View style={styles.outerContainer}>
			<Text style={{ color: colors.gray500 }}>
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
