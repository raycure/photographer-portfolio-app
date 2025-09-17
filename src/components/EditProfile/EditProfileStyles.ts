import { StyleSheet } from 'react-native';

export const EditProfileLayoutStyles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		gap: 20,
	},
	innerContainer: {
		padding: 14,
		borderRadius: 12,
		alignSelf: 'stretch',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 12,
	},
});
