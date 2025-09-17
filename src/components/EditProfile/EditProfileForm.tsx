import { View } from 'react-native';
import InputArea from '../UI/InputArea';
import CustomIcon from '../UI/CustomIcon';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { useColors } from '@/src/hooks/useColors';
import { EditProfileField, EditProfileFormProps } from './EditProfileTypes';

export default function EditProfileForm({
	editProfileData,
	onInputChange,
}: EditProfileFormProps) {
	const userInfoStore = useUserInfoStore();
	const colors = useColors();
	const user = userInfoStore.personalInfo;
	const editProfileConfig: EditProfileField[] = [
		{
			title: 'Name',
			placeholder: user.name,
			textContentType: undefined,
			key: 'name',
			leftIcon: { collectionKey: 'fa6', name: 'user-large' },
		},
		{
			title: 'Username',
			placeholder: user.username,
			textContentType: undefined,
			key: 'username',
			leftIcon: { collectionKey: 'fe', name: 'at-sign' },
		},
		{
			title: 'Email',
			placeholder: user.email,
			textContentType: undefined,
			key: 'email',
			leftIcon: { collectionKey: 'fa', name: 'envelope' },
		},
	];
	return (
		<View>
			{editProfileConfig.map((item, index) => (
				<InputArea
					key={index}
					title={item.title}
					value={editProfileData[item.key]}
					placeholder={item.placeholder}
					textContentType={item.textContentType}
					onChangeText={(text) => onInputChange(text, item.key)}
					leftElement={({ color }) => (
						<CustomIcon {...item.leftIcon} color={color} size={22} />
					)}
					containerStyle={{ backgroundColor: colors.primary800 }}
				/>
			))}
		</View>
	);
}
