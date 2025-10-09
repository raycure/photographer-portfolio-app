import { StyleSheet } from 'react-native';

export const HomeSwiperStyles = StyleSheet.create({
	outerContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	buttonsContainer: {
		flexDirection: 'row',
		gap: 14,
		position: 'absolute',
		bottom: 18,
		zIndex: 5,
	},
	card: { position: 'absolute' },
	activeCard: { zIndex: 2 },
	nextCard: { zIndex: 1 },
});
