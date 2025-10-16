import { Dimensions, StyleSheet } from 'react-native';
const width = Dimensions.get('screen').width;
export const OnboardingCarouselItemStyles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		width: width,
		padding: 52,
		paddingTop: 120,
		alignItems: 'center',
		gap: 70,
	},
	innerContainer: { alignItems: 'center' },
	image: {
		width: '100%',
		aspectRatio: 1,
		borderRadius: 18,
	},
	messageContainer: {
		position: 'absolute',
		paddingHorizontal: 8,
		paddingVertical: 2,
		borderRadius: 12,
		backgroundColor: '#eaeaea',
	},
	messageContainerLeft: { left: -16, borderBottomRightRadius: 2 },
	messageContainerRight: { right: -16, borderBottomLeftRadius: 2 },
	title: { textAlign: 'center', fontSize: 34, fontWeight: '700' },
	text: { textAlign: 'center', fontSize: 18 },
});

export const OnboardingLayoutStyles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	carouselContainer: {
		flex: 1,
	},
	pagination: { position: 'absolute', top: 58 + width },
	button: {
		bottom: 80,
		position: 'absolute',
		width: width - 52,
		alignSelf: 'center',
	},
	link: {
		fontSize: 18,
		fontWeight: '500',
		bottom: 50,
		color: 'white',
		position: 'absolute',
		alignSelf: 'center',
	},
});
