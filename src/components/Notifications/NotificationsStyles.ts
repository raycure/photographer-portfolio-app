import { Dimensions, StyleSheet } from 'react-native';
const screenWidth = Dimensions.get('screen').width;
export const NotificationsLayoutStyles = StyleSheet.create({
	outerContainer: { flex: 1 },
});

export const NotificationItemStyles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'row',
		paddingVertical: 6,
		paddingHorizontal: 12,
		gap: 8,
		alignItems: 'center',
		marginTop: 1,
	},
	text: { fontSize: 16, maxWidth: screenWidth - 60 },
	username: { fontWeight: '700' },
	circularContainer: {
		width: 48,
		height: 48,
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export const NotificationsHeaderStyles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 6,
		paddingHorizontal: 16,
	},
	title: { fontSize: 24 },
	button: { paddingInline: 16, borderRadius: 8 },
	buttonText: { fontSize: 16 },
});
