import { AttendedChallenges } from '@/src/stores/StoreTypes';
import { Pressable } from 'react-native';
import CustomIcon from '../UI/CustomIcon';
import { images } from '@/src/constants/dummyImages';
import { useColors } from '@/src/hooks/useColors';
import { GalleryGridItemStyles } from './ProfileStyles';
import { Image } from 'expo-image';
import { useInteractionStore } from '@/src/stores/InteractionStore';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { pickImageFromGallery } from '@/src/utils/pickImage';
import { useState } from 'react';
import { useModalStore } from '@/src/stores/ModalStore';
import { useTranslation } from 'react-i18next';

export default function GalleryGridItem({
	data,
}: {
	data: AttendedChallenges | 'add';
}) {
	const colors = useColors();
	const [image, setImage] = useState<string | null>(null);
	const { t } = useTranslation();
	const interactionStore = useInteractionStore();
	const userInfoStore = useUserInfoStore();
	const openModal = useModalStore((state) => state.openModal);
	const onAddButtonPress = async () => {
		const isPremium = userInfoStore.personalInfo.premium;
		if (isPremium) {
			const uri = await pickImageFromGallery({ aspect: [1, 1] });
			if (uri) {
				setImage(uri);
			}
		} else {
			openModal({
				title: t('Modals.AddPremiumPicture.title'),
				content: t('Modals.AddPremiumPicture.content'),
				buttons: {
					configuration: 'row',
					list: [
						{
							type: 'general',
							content: t('UI.Buttons.Purchase'),
							onPress: () => useModalStore.getState().closeModal(),
						},
					],
				},
			});
		}
	};
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
		interactionStore.setModalOpen('imageInfo', true, { entryId: data.entryId });
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
				contentFit='cover'
			/>
		</Pressable>
	);
}
