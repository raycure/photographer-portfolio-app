import { Pressable, View } from 'react-native';
import InputArea from '../UI/InputArea';
import CustomIcon from '../UI/CustomIcon';
import { useState } from 'react';
import { useForm } from '@/src/hooks/useForm';
import { useColors } from '@/src/hooks/useColors';

export default function ChangePasswordBlock() {
	const [passwordSecure, setPasswordSecure] = useState<boolean>(true);
	const { formData: changePasswordData, onInputChange } = useForm({
		oldPassword: '',
		newPassword: '',
	});
	const color = useColors();
	return (
		<View>
			<InputArea
				title='Old password'
				value={changePasswordData.oldPassword}
				placeholder='Your old password'
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
				title='New password'
				value={changePasswordData.newPassword}
				placeholder='Your new password'
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
		</View>
	);
}
