import { StyleSheet, View } from 'react-native';
import HomeCard from './HomeCard';
import SwiperButtons from './SwiperButtons';

export default function HomeSwiper() {
	return (
		<View style={styles.outerContainer}>
			<HomeCard imageId='image_333' />
			<View style={styles.buttonsContainer}>
				<SwiperButtons likeButton={false} />
				<SwiperButtons />
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonsContainer: {
		flexDirection: 'row',
		gap: 14,
		position: 'absolute',
		bottom: 18,
	},
});
