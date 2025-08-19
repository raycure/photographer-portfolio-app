import { Dimensions, StyleSheet } from 'react-native';
const windowWidth = Dimensions.get('window').width;
export const LeaderboardHeaderStyles = StyleSheet.create({
	outerContainer: {
		alignSelf: 'stretch',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	buttonsContainer: {
		flexDirection: 'row',
		gap: 8,
		alignItems: 'flex-end',
	},
	title: { maxWidth: 280 },
	toggleIcon: { height: 28 },
	toggleButton: { width: 50 },
});

export const LeaderboardLayoutStyles = StyleSheet.create({
	outerContainer: { flex: 1, padding: 16, gap: 4 },
});

export const LeaderboardWinnersBlockStyles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	innerContainer: {
		gap: 4,
		zIndex: 10,
		alignItems: 'center',
	},
	textContainer: { alignItems: 'center' },
	sideContainers: { zIndex: 0, marginTop: 80 },
	rightContainer: { left: -44 },
	leftContainer: { right: -44 },
	crownIcon: { bottom: -6 },
	username: { fontSize: 14, fontStyle: 'italic' },
	likes: { fontSize: 22, fontWeight: 'bold' },
});

export const LeaderboardPhotoStyles = StyleSheet.create({
	imageBig: {
		width: (windowWidth * 4) / 9,
		height: (windowWidth * 4) / 9,
		borderWidth: 5,
	},
	imageMedium: {
		width: (windowWidth * 3) / 9,
		height: (windowWidth * 3) / 9,
		borderWidth: 4,
	},
	imageSmall: {
		width: 80,
		height: 80,
		borderWidth: 2,
	},
	image: {
		borderRadius: 1000,
		overflow: 'hidden',
	},
});

export const RankIndicatorStyles = StyleSheet.create({
	outerContainerRow: { flexDirection: 'row', gap: 16, alignItems: 'center' },
	outerContainerColumn: { alignItems: 'center', marginBottom: 6 },
	tintedBackgound: { padding: 5 },
	number: { fontWeight: 'bold', fontSize: 20 },
	numberColumn: { fontSize: 24 },
	iconUpRow: { top: -1 },
	iconDownRow: { transform: [{ rotateX: '180deg' }], top: 2 },
	iconDown: { transform: [{ rotateX: '180deg' }] },
});

export const LeaderboardPersonalButtonStyles = StyleSheet.create({
	buttonWrapper: {
		borderRadius: 14,
		overflow: 'hidden',
	},
	buttonPressed: { opacity: 0.7 },
	outerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 16,
		paddingVertical: 10,
		justifyContent: 'space-between',
	},
	textContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},
	username: { fontSize: 16, color: 'white', fontWeight: 'bold' },
	likes: { fontSize: 18, fontWeight: 'bold' },
	text: { fontSize: 18, fontWeight: 'bold', color: 'white' },
});

export const LeaderboardListIItemStyles = StyleSheet.create({
	outerContainer: { flexDirection: 'row', paddingBlock: 4, gap: 10 },
	innerContainer: {
		borderBottomWidth: 1,
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	row: { flexDirection: 'row' },
	textContainer: { gap: 4 },
	titleContainer: { gap: 8 },
	title: { fontSize: 20, fontWeight: 'bold' },
	subtitle: { fontSize: 16, fontStyle: 'italic', fontWeight: 'bold' },
});
