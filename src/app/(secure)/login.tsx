import AuthForm from '@/src/components/Authentication/AuthForm';
import { KeyboardAvoidingView, Platform } from 'react-native';

export default function LoginScreen() {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}
		>
			<AuthForm elements={['email', 'password']} type='login' />
		</KeyboardAvoidingView>
	);
}
