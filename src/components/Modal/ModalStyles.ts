import { Dimensions, StyleSheet } from 'react-native';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
export const CustomModalStyles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: 'transparent',
		gap: 16,
		paddingVertical: 12,
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	listContainer: { backgroundColor: 'transparent', gap: 6 },
	listItem: {
		backgroundColor: 'transparent',
		flexDirection: 'row',
		fontSize: 16,
	},
	title: {
		fontSize: 22,
		textAlign: 'center',
		fontWeight: '600',
		width: 240,
	},
	text: { fontSize: 18, textAlign: 'center' },
	outerContainer: {
		paddingBottom: 16,
		paddingTop: 20,
		paddingHorizontal: 28,
		width: '85%',
		minHeight: 180,
		borderRadius: 24,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		gap: 12,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 4,
	},
	blurContainer: {
		position: 'absolute',
		flex: 1,
		width: '100%',
		height: screenHeight,
		zIndex: 300,
		justifyContent: 'center',
		alignItems: 'center',
	},
	columnButtonContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	stretchedButton: { flex: 1 },
});

export const LinkAccountBlockStyles = StyleSheet.create({
	innerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
		marginBottom: 6,
	},
	buttonContainer: {
		justifyContent: 'center',
		flexDirection: 'row',
		gap: 12,
		margin: 6,
	},
	usernameInput: { width: 0, flexGrow: 1 },
	text: { fontSize: 16 },
});

export const LinkedAccountsBlockStyles = StyleSheet.create({
	lineSeperator: { marginVertical: 0 },
	outerContainer: { width: '100%' },
});

export const ReportAccountStyles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 16,
		paddingTop: 20,
	},
});
export const ReportIssueModalStyles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 16,
		paddingTop: 20,
	},
});

export const LanguagesModalStyles = StyleSheet.create({
	container: {
		width: screenWidth,
		minHeight: 240,
		borderTopRightRadius: 28,
		borderTopLeftRadius: 28,
		padding: 16,
		paddingBottom: 36,
		bottom: -20,
	},
	outerContainer: {
		flex: 1,
		height: '100%',
		zIndex: 100,
		justifyContent: 'flex-end',
		position: 'absolute',
		bottom: 0,
	},
});

export const LanguagesModalItemStyles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 4,
		paddingHorizontal: 8,
		gap: 12,
		borderRadius: 8,
	},
	text: { fontSize: 18, fontWeight: '500' },
});

export const ImageInfoModalStyles = StyleSheet.create({
	outerContainer: {
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 8,
		padding: 16,
		position: 'absolute',
		zIndex: 100,
	},
	innerContainer: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	statsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 1,
		gap: 4,
	},
	statsOuterContainer: {
		alignItems: 'flex-end',
	},
	image: { width: screenWidth - 32 },
	text: { fontSize: 16, fontWeight: '600' },
	downloadButton: { position: 'absolute', right: 4, top: 4, zIndex: 1 },
});
