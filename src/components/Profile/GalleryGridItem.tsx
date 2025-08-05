import { Wins } from '@/src/stores/StoreTypes';
import { Image, Pressable } from 'react-native';
import CustomIcon from '../UI/CustomIcon';
import { images } from '@/src/constants/dummyImages';
import { useColors } from '@/src/hooks/useColors';
import { GalleryGridItemStyles } from './ProfileStyles';

export default function GalleryGridItem({ data }: { data: Wins | 'add' }) {
	const colors = useColors();
	const onAddButtonPress = () => {};
	const onPhotoPress = () => {};
	const styles = GalleryGridItemStyles;
	if (data === 'add') {
		return (
			<Pressable
				onPress={onAddButtonPress}
				style={[
					styles.outerContainer,
					styles.addButton,
					{ borderColor: colors.primary100 },
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
	return (
		<Pressable onPress={onPhotoPress} style={styles.outerContainer}>
			<Image
				source={{
					uri: images.find((image) => {
						return image.imageId === data?.imageId;
					})?.link,
				}}
				style={{ resizeMode: 'cover', flex: 1 }}
			/>
		</Pressable>
	);
}
