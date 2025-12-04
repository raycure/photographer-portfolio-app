import { ImageSourcePropType, View } from 'react-native';
import CircularPhoto from '../UI/CircularPhoto';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { images } from '@/src/constants/dummyImages';
import CustomButton from '../UI/CustomButton';
import CustomIcon from '../UI/CustomIcon';
import { useColors } from '@/src/hooks/useColors';
import { EditProfileHeaderProps } from './EditProfileTypes';
import { pickImageFromGallery } from '@/src/utils/pickImage';

export default function EditProfileHeader({
	profileImage,
	setProfileImage,
}: EditProfileHeaderProps) {
	const userInfoStore = useUserInfoStore();
	const colors = useColors();
	const imageId = userInfoStore.personalInfo.imageId;
	const imageLink: ImageSourcePropType | undefined = profileImage
		? { uri: profileImage }
		: images.find((image) => image.imageId === imageId)?.link
		? { uri: images.find((image) => image.imageId === imageId)!.link }
		: undefined;

	const onEditPhotoPress = async () => {
		const uri = await pickImageFromGallery({ aspect: [1, 1] });
		if (uri) {
			setProfileImage(uri);
		}
	};
	return (
		<View>
			<CircularPhoto
				userId={userInfoStore.personalInfo.id!}
				size='big'
				source={imageLink}
			/>
			<CustomButton
				type='icon'
				icon={({ color }) => (
					<CustomIcon collectionKey='ad' size={22} name='edit' color={color} />
				)}
				outerContainerStyle={{ position: 'absolute', right: 4, bottom: 4 }}
				onPress={onEditPhotoPress}
				tintedBackground={{
					color: colors.primary900,
					opacity: 1,
					type: 'circular',
				}}
			/>
		</View>
	);
}
