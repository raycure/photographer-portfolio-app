import AuthForm from '@/src/components/Authentication/AuthForm';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

export default function LoginScreen() {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.maxSize}
		>
			<AuthForm elements={['email', 'password']} type='login' />
		</KeyboardAvoidingView>
	);
}
const styles = StyleSheet.create({ maxSize: { flex: 1 } });
