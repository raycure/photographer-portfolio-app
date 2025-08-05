import { StyleSheet } from 'react-native';

export const CustomNotifyModalStyles = StyleSheet.create({
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
		fontSize: 18,
	},
	title: {
		fontSize: 26,
		textAlign: 'center',
		paddingHorizontal: 10,
		fontWeight: 'bold',
	},
	text: { fontSize: 18, textAlign: 'center' },
});

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
		marginBlock: 6,
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
});

export const FollowersButtonStyles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: 4,
		justifyContent: 'center',
		alignItems: 'center',
	},
	bigText: { fontSize: 24 },
	mediumText: { fontSize: 20 },
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

export const ModalWrapperStyles = StyleSheet.create({
	blurContainer: {
		position: 'absolute',
		flex: 1,
		width: '100%',
		height: '100%',
		zIndex: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
	outerContainer: {
		paddingBottom: 16,
		paddingTop: 46,
		width: '85%',
		minHeight: 200,
		borderRadius: 30,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		gap: 12,
	},
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
	},
});
