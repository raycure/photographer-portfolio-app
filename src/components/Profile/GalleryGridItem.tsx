import { AttendedChallenges } from '@/src/stores/StoreTypes';
import { Image, Pressable } from 'react-native';
import CustomIcon from '../UI/CustomIcon';
import { images } from '@/src/constants/dummyImages';
import { useColors } from '@/src/hooks/useColors';
import { GalleryGridItemStyles } from './ProfileStyles';
import { useRouter } from 'expo-router';

export default function GalleryGridItem({
	data,
}: {
	data: AttendedChallenges | 'add';
}) {
	const colors = useColors();
	const router = useRouter();

	const onAddButtonPress = () => {};
	const styles = GalleryGridItemStyles;
	if (data === 'add') {
		return (
			<Pressable
				onPress={onAddButtonPress}
				style={({ pressed }) => [
					styles.addButton,
					{
						backgroundColor: colors.primary500,
					},
				]}
			>
				<CustomIcon
					collectionKey='ad'
					color={colors.primary100}
					name='plussquareo'
					size={36}
				/>
			</Pressable>
		);
	}
	const imageLink = images.find((image) => {
		return image.imageId === data?.imageId;
	})?.link;
	const onImagePress = () => {
		router.push({
			pathname: '/(stack)/imageInfo',
			params: { entryId: data.entryId },
		});
	};
	return (
		<Pressable
			onPress={onImagePress}
			style={({ pressed }) => styles.outerContainer}
		>
			<Image
				source={{
					uri: imageLink,
				}}
				style={styles.image}
			/>
		</Pressable>
	);
}
