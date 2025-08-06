import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import AuthForm from '@/src/components/Authentication/AuthForm';

export default function RegisterScreen() {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.maxSize}
		>
			<AuthForm
				elements={['name', 'username', 'email', 'password']}
				type='register'
			/>
		</KeyboardAvoidingView>
	);
}
const styles = StyleSheet.create({ maxSize: { flex: 1 } });
