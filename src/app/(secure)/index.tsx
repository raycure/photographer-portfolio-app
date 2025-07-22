import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import RegisterForm from '@/src/components/Authentication/RegisterForm';

export default function LoginScreen() {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}
		>
			<RegisterForm />
		</KeyboardAvoidingView>
	);
}
