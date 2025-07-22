import { KeyboardAvoidingView, Platform } from 'react-native';

export default function LoginScreen() {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}
		></KeyboardAvoidingView>
	);
}
