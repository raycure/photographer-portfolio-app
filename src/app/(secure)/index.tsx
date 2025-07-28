import { KeyboardAvoidingView, Platform } from 'react-native';
import AuthForm from '@/src/components/Authentication/AuthForm';

export default function RegisterScreen() {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}
		>
			<AuthForm
				elements={['name', 'username', 'email', 'password']}
				type='register'
			/>
		</KeyboardAvoidingView>
	);
}
