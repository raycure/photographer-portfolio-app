import { images } from '@/src/constants/dummyImages';
import { ImageID, UserID } from '@/src/stores/StoreTypes';
import useAspectRatio from '@/src/hooks/useAspectRatio';
import { Image, StyleSheet, View } from 'react-native';
import ProfileInfo from './ProfileInfo';

export default function HomeCard({
	imageId,
	userId,
}: {
	imageId: ImageID;
	userId: UserID;
}) {
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
			<ProfileInfo
				style={styles.profileInfoBlock}
				userId={userId}
				blur={true}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	image: { width: '100%' },
	profileInfoBlock: { position: 'absolute', bottom: 0 },
});
