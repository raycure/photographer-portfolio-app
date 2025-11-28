import { Pressable, View } from 'react-native';
import { Text } from '../Themed';
import { router } from 'expo-router';
import { InlineLinkTextProps } from './AuthTypes';
import { useColors } from '@/src/hooks/useColors';
import { InlineLinkTextStyles } from './AuthStyles';
import { useTranslation } from 'react-i18next';

export default function InlineLinkText({ type }: InlineLinkTextProps) {
	const { t } = useTranslation();
	const colors = useColors();
	const styles = InlineLinkTextStyles;
	return (
		<View style={styles.outerContainer}>
			<Text style={{ color: colors.gray500 }}>
				{type === 'register'
					? t('Authentication.Register.navigatorText')
					: t('Authentication.Login.navigatorText')}
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
					{type === 'register'
						? t('Authentication.Register.navigatorTitle')
						: t('Authentication.Login.navigatorTitle')}
				</Text>
			</Pressable>
		</View>
	);
}
