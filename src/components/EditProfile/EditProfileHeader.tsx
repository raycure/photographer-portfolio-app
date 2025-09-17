import { View } from 'react-native';
import CircularPhoto from '../UI/CircularPhoto';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { images } from '@/src/constants/dummyImages';
import CustomButton from '../UI/CustomButton';
import CustomIcon from '../UI/CustomIcon';
import { useColors } from '@/src/hooks/useColors';

export default function EditProfileHeader() {
	const userInfoStore = useUserInfoStore();
	const colors = useColors();
	const imageId = userInfoStore.personalInfo.imageId;
	const imageLink = images.find((image) => image.imageId === imageId)?.link;
	return (
		<View>
			<CircularPhoto size='big' source={imageLink} />
			<CustomButton
				type='icon'
				icon={({ color }) => (
					<CustomIcon collectionKey='ad' size={22} name='edit' color={color} />
				)}
				outerContainerStyle={{ position: 'absolute', right: 4, bottom: 4 }}
				onPress={() => alert('Icon button pressed')}
				tintedBackground={{
					color: colors.primary900,
					opacity: 1,
					type: 'circular',
				}}
			/>
		</View>
	);
}
