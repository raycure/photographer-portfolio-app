import { ImageID } from '@/src/stores/StoreTypes';
import { CustomIconProps } from '../UI/UITypes';
import { TextInputProps } from 'react-native';

export type EditProfileData = {
	name: string;
	username: string;
	email: string;
	imageId: ImageID;
};

export type EditProfileField = {
	title: string;
	placeholder?: string;
	textContentType?: TextInputProps['textContentType'];
	key: keyof EditProfileData;
	leftIcon: CustomIconProps;
};
export type EditProfileFormProps = {
	editProfileData: EditProfileData;
	onInputChange: (text: string, key: keyof EditProfileData) => void;
};
