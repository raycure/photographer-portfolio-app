import { StyleSheet } from 'react-native';

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
		borderTopWidth: 1,
	},
	text: { fontSize: 16 },
	username: { fontWeight: '700' },
	circularContainer: {
		width: 48,
		height: 48,
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
