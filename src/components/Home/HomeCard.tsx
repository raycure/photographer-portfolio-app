import { images } from '@/src/constants/dummyImages';
import { ImageID } from '@/src/stores/StoreTypes';
import getAspectRatio from '@/src/utils/getAspectRatio';
import { Image, StyleSheet } from 'react-native';

export default function HomeCard({ imageId }: { imageId: ImageID }) {
	const imageLink = images.find((image) => {
		return image.imageId === imageId;
	})?.link;
	return (
		<Image
			source={{
				uri: imageLink,
			}}
			style={[styles.image, { aspectRatio: getAspectRatio(imageLink) }]}
		/>
	);
}
const styles = StyleSheet.create({
	image: { width: '100%' },
});
