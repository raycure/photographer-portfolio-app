import { Pressable } from 'react-native';
import { Text } from '../Themed';

export default function ForgotPasswordButton() {
	const handleForgotButtonPress = () => {};
	return (
		<Pressable onPress={handleForgotButtonPress}>
			<Text style={{ textAlign: 'right', top: -10 }}>Forgot password</Text>
		</Pressable>
	);
}
