import { Dimensions, StyleSheet } from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const CustomButtonStyles = StyleSheet.create({
	innerContainer: {
		paddingInline: 40,
		paddingVertical: 12,
		borderRadius: 12,
		alignItems: 'center',
	},
	text: { fontSize: 18, fontWeight: 'bold' },
	gradientIconContainer: {
		paddingInline: 10,
		paddingVertical: 6,
		borderRadius: 8,
		alignItems: 'center',
	},
	iconWrapper: { backgroundColor: 'transparent', marginRight: 6 },
	stretched: { alignSelf: 'stretch' },
});

export const InputAreaStyles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'column',
		marginBlock: 6,
		backgroundColor: 'transparent',
		width: '100%',
	},
	innerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 10,
		overflow: 'hidden',
		marginBlock: 4,
		paddingInline: 14,
		paddingVertical: 4,
		borderWidth: 2,
		width: '100%',
	},
	inputArea: {
		flex: 1,
		paddingInline: 16,
		fontSize: 18,
	},
	rightElementWrapper: {
		position: 'absolute',
		right: 12,
		backgroundColor: 'transparent',
	},
	leftElementWrapper: { backgroundColor: 'transparent', marginRight: 6 },
	title: { fontWeight: '500', fontSize: 18 },
});

export const FollowersButtonStyles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: 4,
		justifyContent: 'center',
		alignItems: 'center',
	},
	bigText: { fontSize: 24 },
	mediumText: { fontSize: 18 },
	smallText: { fontSize: 16 },
	textGeneral: { fontWeight: 'bold' },
});
export const InputHighlightBarStyles = StyleSheet.create({
	outerContainer: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'baseline',
		gap: 8,
		top: -8,
	},
	singularBar: {
		width: '25%',
		height: 6,
		backgroundColor: 'white',
		borderRadius: 6,
	},
	highlightText: { textAlign: 'center', margin: 'auto', fontWeight: 'bold' },
});

export const TintedBackgroundStyles = StyleSheet.create({
	circularContainer: {
		borderRadius: 500,
	},
	rectangularContainer: {
		borderRadius: 8,
	},
	container: {
		padding: 8,
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
	},
});

export const FillingBarStyles = StyleSheet.create({
	backgroundBar: {
		alignSelf: 'stretch',
		borderRadius: 100,
	},
	activeBar: { zIndex: 1, borderRadius: 100 },
});

export const CloseButtonStyles = StyleSheet.create({
	outerContainer: { position: 'absolute', left: 20, top: 20, zIndex: 100 },
});

export const CustomHeaderStyles = StyleSheet.create({
	outerContainer: {
		width: '100%',
		height: 35,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 12,
		paddingRight: 20,
	},
});

export const LineSeperatorStyles = StyleSheet.create({
	mainOrientation: {
		marginVertical: 8,
		height: 1,
		alignSelf: 'stretch',
	},
	turnedOrientation: { marginVertical: 8, width: 1, flexGrow: 1 },
});

export const SubtitleTitlePairStyles = StyleSheet.create({
	outerContainer: {},
	subtitleBig: { fontSize: 22 },
	subtitleMedium: { fontSize: 18 },
	subtitleSmall: { fontSize: 14 },
	titleBig: { fontSize: 26 },
	titleMedium: { fontSize: 22 },
	titleSmall: { fontSize: 16 },
});

export const CircularPhotoStyles = StyleSheet.create({
	imageBig: {
		width: (windowWidth * 3) / 9,
		height: (windowWidth * 3) / 9,
	},
	imageMedium: {
		width: 68,
		height: 68,
	},
	imageSmall: {
		width: 58,
		height: 58,
	},
	imageXL: { width: (windowWidth * 4) / 9, height: (windowWidth * 4) / 9 },
	imageXS: { width: 48, height: 48 },
	image: {
		borderRadius: 1000,
		overflow: 'hidden',
	},
});
