import { images } from '@/src/constants/dummyImages';
import { ImageID, UserID } from '@/src/stores/StoreTypes';
import useAspectRatio from '@/src/hooks/useAspectRatio';
import { Image, View } from 'react-native';
import ProfileInfo from './ProfileInfo';
import { HomeCardStyles } from './HomeStyles';

export default function HomeCard({
	imageId,
	userId,
	ratio,
}: {
	imageId: ImageID;
	userId: UserID;
	ratio: [number, number];
}) {
	const imageLink = images.find((image) => {
		return image.imageId === imageId;
	})?.link;
	const aspectRatio = ratio[0] / ratio[1];
	const styles = HomeCardStyles;
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
