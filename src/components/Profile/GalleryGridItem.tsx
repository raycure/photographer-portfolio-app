import { Wins } from '@/src/stores/StoreTypes';
import {
	Dimensions,
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import CustomIcon from '../UI/CustomIcon';
import { images } from '@/src/constants/dummyImages';
import { useColors } from '@/src/hooks/useColors';
const windowWidth = Dimensions.get('window').width;

export default function GalleryGridItem({ data }: { data: Wins | 'add' }) {
	const colors = useColors();
	const onAddButtonPress = () => {};
	const onPhotoPress = () => {};

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
const styles = StyleSheet.create({
	outerContainer: {
		width: (windowWidth - 2) / 3,
		height: ((windowWidth - 2) * 4) / 9,
	},
	addButton: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 6,
		borderWidth: 4,
		borderStyle: 'dashed',
		borderColor: 'white',
	},
});
