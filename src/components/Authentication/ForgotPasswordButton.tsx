import { Pressable } from 'react-native';
import { Text } from '../Themed';
import { ForgotPasswordButtonStyles } from './AuthStyles';

export default function ForgotPasswordButton() {
	const handleForgotButtonPress = () => {};
	const styles = ForgotPasswordButtonStyles;
	return (
		<Pressable
			style={({ pressed }) => pressed && styles.buttonPressed}
			onPress={handleForgotButtonPress}
		>
			<Text style={styles.text}>Forgot password</Text>
		</Pressable>
	);
}
