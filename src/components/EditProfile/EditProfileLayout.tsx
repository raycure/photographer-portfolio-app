import { StyleSheet } from 'react-native';
import { View } from '../Themed';
import EditProfileHeader from './EditProfileHeader';
import EditProfileForm from './EditProfileForm';
import { useForm } from '@/src/hooks/useForm';
import { useColors } from '@/src/hooks/useColors';
import CustomButton from '../UI/CustomButton';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { useRouter } from 'expo-router';
import { useMemo } from 'react';
import { EditProfileData } from './EditProfileTypes';
import { EditProfileLayoutStyles } from './EditProfileStyles';

export default function EditProfileLayout() {
	const colors = useColors();
	const userInfoStore = useUserInfoStore();
	const router = useRouter();
	const user = userInfoStore.personalInfo;
	const { formData: EditProfileData, onInputChange } = useForm<EditProfileData>(
		{
			name: '',
			username: '',
			email: '',
			imageId: '',
		}
	);
	const initialData = {
		name: user.name,
		username: user.username,
		email: user.email,
		imageId: user.imageId,
	};
	const changes = useMemo(() => {
		const diff: Partial<EditProfileData> = {};
		(Object.keys(EditProfileData) as (keyof EditProfileData)[]).forEach(
			(key) => {
				if (
					EditProfileData[key] !== initialData[key] &&
					EditProfileData[key].trim() !== ''
				) {
					diff[key] = EditProfileData[key];
				}
			}
		);
		return diff;
	}, [EditProfileData]);

	const onSavePressed = () => {
		if (Object.keys(changes).length > 0) {
			userInfoStore.setPersonalInfo(changes);
		} else {
			console.log('No changes made.');
		}
	};
	const styles = EditProfileLayoutStyles;
	return (
		<View style={styles.outerContainer}>
			<EditProfileHeader />
			<View
				style={[styles.innerContainer, { backgroundColor: colors.primary600 }]}
			>
				<EditProfileForm
					editProfileData={EditProfileData}
					onInputChange={onInputChange}
				/>
				<View
					style={[
						styles.buttonContainer,
						{ backgroundColor: colors.primary600 },
					]}
				>
					<CustomButton
						type='stretched'
						outerContainerStyle={{ marginVertical: 8 }}
						content='Cancel'
						onPress={() => router.back()}
						textColor='white'
					/>
					<CustomButton
						type='stretched'
						outerContainerStyle={{ marginVertical: 8 }}
						content='Save'
						onPress={onSavePressed}
						textColor='white'
						disabled={Object.keys(changes).length === 0}
					/>
				</View>
			</View>
		</View>
	);
}
