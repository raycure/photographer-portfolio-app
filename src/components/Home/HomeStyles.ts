import { StyleSheet } from 'react-native';

export const HomeSwiperStyles = StyleSheet.create({
	outerContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	buttonsContainer: {
		flexDirection: 'row',
		gap: 14,
		position: 'absolute',
		bottom: 14,
		zIndex: 5,
	},
	card: { position: 'absolute', top: 28 },
	activeCard: { zIndex: 2 },
	nextCard: { zIndex: 1 },
});

export const SwiperButtonsStyles = StyleSheet.create({
	outerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		width: 56,
		height: 56,
	},
	likeIcon: { bottom: -2 },
});

export const NoEntriesStyles = StyleSheet.create({
	title: { fontSize: 24, fontWeight: '600' },
	outerContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		opacity: 0.9,
		flex: 1,
		gap: 8,
	},
	innerContainer: { padding: 24, borderRadius: 500, borderWidth: 3 },
});

export const HomeLayoutStyles = StyleSheet.create({
	outerContainer: { flex: 1, alignItems: 'center', padding: 16 },
});

export const HomeCardStyles = StyleSheet.create({
	image: { width: '100%' },
	profileInfoBlock: { position: 'absolute', bottom: 0 },
});
