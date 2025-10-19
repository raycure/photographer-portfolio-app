import { images } from '@/src/constants/dummyImages';
import useAspectRatio from '@/src/hooks/useAspectRatio';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

export default function LeaderboardGridItem({ imageId }) {
	const imageLink = images.find((image) => {
		return image.imageId === imageId;
	})?.link;
	const aspectRatio = useAspectRatio(imageLink);
	return (
		<View>
			<Image
				source={{
					uri: imageLink,
				}}
				style={[styles.image, { aspectRatio }]}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	image: { width: '100%' },
});
