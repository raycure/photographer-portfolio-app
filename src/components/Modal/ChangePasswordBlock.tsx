import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import InputArea from '../UI/InputArea';
import CustomIcon from '../UI/CustomIcon';
import { useState } from 'react';
import { useForm } from '@/src/hooks/useForm';
import { useColors } from '@/src/hooks/useColors';
import { useTranslation } from 'react-i18next';
import CustomButton from '../UI/CustomButton';
import { useModalStore } from '@/src/stores/ModalStore';

export default function ChangePasswordBlock() {
	const [passwordSecure, setPasswordSecure] = useState<boolean>(true);
	const { t } = useTranslation();
	const { formData: changePasswordData, onInputChange } = useForm({
		oldPassword: '',
		newPassword: '',
	});
	const onPasswordUpdate = () => {
		useModalStore.getState().closeModal();
	};
	const color = useColors();
	return (
		<View>
			<InputArea
				title={t('Modals.ChangePassword.OldPassword.title')}
				value={changePasswordData.oldPassword}
				placeholder={t('Modals.ChangePassword.OldPassword.placeholder')}
				textContentType='password'
				onChangeText={(text) => onInputChange(text, 'oldPassword')}
				containerStyle={{ backgroundColor: color.primary600 }}
				rightElement={({ color }: { color: any }) => (
					<Pressable onPress={() => setPasswordSecure(!passwordSecure)}>
						<CustomIcon
							collectionKey='ad'
							name={passwordSecure ? 'eyeo' : 'eye'}
							color={color}
						/>
					</Pressable>
				)}
			/>
			<InputArea
				title={t('Modals.ChangePassword.NewPassword.title')}
				value={changePasswordData.newPassword}
				placeholder={t('Modals.ChangePassword.NewPassword.placeholder')}
				textContentType='password'
				containerStyle={{ backgroundColor: color.primary600 }}
				onChangeText={(text) => onInputChange(text, 'newPassword')}
				rightElement={({ color }: { color: any }) => (
					<Pressable onPress={() => setPasswordSecure(!passwordSecure)}>
						<CustomIcon
							collectionKey='ad'
							name={passwordSecure ? 'eyeo' : 'eye'}
							color={color}
						/>
					</Pressable>
				)}
			/>
			<View style={buttonContainerStyle}>
				<CustomButton
					type='stretched'
					content={t('UI.Buttons.Cancel')}
					onPress={() => useModalStore.getState().closeModal()}
				/>
				<CustomButton
					type='stretched'
					content={t('UI.Buttons.Change')}
					onPress={onPasswordUpdate}
				/>
			</View>
		</View>
	);
}
const buttonContainerStyle: StyleProp<ViewStyle> = {
	flexDirection: 'row',
	gap: 8,
	justifyContent: 'space-evenly',
	paddingTop: 12,
	paddingBottom: 8,
};
