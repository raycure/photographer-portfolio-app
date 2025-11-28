import { Pressable } from 'react-native';
import { Text } from '../Themed';
import { ForgotPasswordButtonStyles } from './AuthStyles';
import { useTranslation } from 'react-i18next';

export default function ForgotPasswordButton() {
	const { t } = useTranslation();
	const handleForgotButtonPress = () => {};
	const styles = ForgotPasswordButtonStyles;
	return (
		<Pressable
			style={({ pressed }) => pressed && styles.buttonPressed}
			onPress={handleForgotButtonPress}
		>
			<Text style={styles.text}>
				{t('Authentication.Login.forgotPasswordButton')}
			</Text>
		</Pressable>
	);
}
