import { StyleSheet } from 'react-native';

export const ForgotPasswordButtonStyles = StyleSheet.create({
	text: { textAlign: 'right', top: -6 },
	buttonPressed: { opacity: 0.3 },
});

export const AuthFormStyles = StyleSheet.create({
	container: {
		padding: 18,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: { fontSize: 26, fontWeight: '400' },
	text: { fontSize: 18 },
	customButton: { marginVertical: 20 },
	passwordSecure: {
		letterSpacing: 4,
	},
	innerContainer: { paddingVertical: 10 },
});

export const InlineLinkTextStyles = StyleSheet.create({
	outerContainer: { flexDirection: 'row', gap: 4, margin: 20 },
});

export const LoginExternalServicesStyles = StyleSheet.create({
	innerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
		justifyContent: 'center',
	},
	outerContainer: {
		gap: 12,
	},
});
