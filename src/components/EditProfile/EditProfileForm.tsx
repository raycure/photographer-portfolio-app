import { View } from 'react-native';
import InputArea from '../UI/InputArea';
import CustomIcon from '../UI/CustomIcon';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { EditProfileField, EditProfileFormProps } from './EditProfileTypes';
import { useTranslation } from 'react-i18next';

export default function EditProfileForm({
	editProfileData,
	onInputChange,
}: EditProfileFormProps) {
	const userInfoStore = useUserInfoStore();
	const { t } = useTranslation();
	const user = userInfoStore.personalInfo;
	const titles = t('Authentication.FormInputData.titles', {
		returnObjects: true,
	}) as string[];
	const editProfileConfig: EditProfileField[] = [
		{
			title: titles[0],
			placeholder: user.name,
			textContentType: undefined,
			key: 'name',
			leftIcon: { collectionKey: 'fa6', name: 'user-large' },
		},
		{
			title: titles[1],
			placeholder: user.username,
			textContentType: undefined,
			key: 'username',
			leftIcon: { collectionKey: 'fe', name: 'at-sign' },
		},
		{
			title: titles[2],
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
				/>
			))}
		</View>
	);
}
