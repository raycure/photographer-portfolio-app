import { StyleSheet } from 'react-native';

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
		fontSize: 18,
	},
	title: {
		fontSize: 26,
		textAlign: 'center',
		paddingHorizontal: 10,
		fontWeight: 'bold',
	},
	text: { fontSize: 18, textAlign: 'center' },
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
	blurContainer: {
		position: 'absolute',
		flex: 1,
		width: '100%',
		height: '100%',
		zIndex: 300,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export const ModalWrapperStyles = StyleSheet.create({});
