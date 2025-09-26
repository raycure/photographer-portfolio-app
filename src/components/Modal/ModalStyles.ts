import { Dimensions, StyleSheet } from 'react-native';
const screenWidth = Dimensions.get('screen').width;
export const CustomModalStyles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: 'transparent',
		gap: 16,
		paddingVertical: 16,
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	listContainer: { backgroundColor: 'transparent' },
	listItem: {
		backgroundColor: 'transparent',
		flexDirection: 'row',
		fontSize: 16,
	},
	title: {
		fontSize: 24,
		textAlign: 'center',
		paddingHorizontal: 10,
		fontWeight: '600',
	},
	text: { fontSize: 16, textAlign: 'center' },
	outerContainer: {
		paddingBottom: 16,
		paddingTop: 46,
		paddingHorizontal: 20,
		width: '85%',
		minHeight: 220,
		borderRadius: 30,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		gap: 12,
	},
	blurContainer: {
		position: 'absolute',
		flex: 1,
		width: '100%',
		height: '100%',
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

export const ModalWrapperStyles = StyleSheet.create({});

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
	buttonContainer: { flexDirection: 'row', justifyContent: 'center', gap: 16 },
});

export const LanguagesModalStyles = StyleSheet.create({
	container: {
		width: screenWidth,
		minHeight: 220,
		borderTopRightRadius: 28,
		borderTopLeftRadius: 28,
		padding: 16,
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
