import { useState } from 'react';
import { View } from 'react-native';
import InputArea from '../UI/InputArea';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { Social, socialMediaList } from '@/src/constants/socialMediaList';
import DropdownMenu from '../UI/DropdownMenu';
import { useForm } from '@/src/hooks/useForm';
import CustomButton from '../UI/CustomButton';
import { useModalStore } from '@/src/stores/ModalStore';
import { isValidUrl } from '@/src/utils/isValidUrl';
import { LinkAccountBlockStyles } from './ModalStyles';

export default function LinkAccountBlock() {
	const [selectedSocial, setSelectedSocial] = useState<Social | undefined>();
	const { formData: socialFormData, onInputChange } = useForm({
		username: '',
		social: selectedSocial,
		url: '',
	});
	const userInfoStore = useUserInfoStore();
	const notAddedSocialsList = socialMediaList.filter((account) => {
		const userSocials = userInfoStore.social.socialMedia;
		return !userSocials.find((social) => social.social === account.social);
	});
	const socialTitle = socialMediaList.find(
		(account) => selectedSocial === account.social
	)?.title;
	const styles = LinkAccountBlockStyles;
	return (
		<View>
			<View style={styles.innerContainer}>
				<DropdownMenu
					list={notAddedSocialsList}
					selectedOption={socialTitle}
					setSelectedOption={setSelectedSocial}
					getOptionValue={(item) => item.social}
					getOptionLabel={(item) => item.title}
				/>
				<InputArea
					placeholder='username'
					textStyle={styles.text}
					onChangeText={(text) => {
						const clippedText = text.replace(/@/g, '');
						onInputChange(clippedText, 'username');
					}}
					value={socialFormData.username}
					containerStyle={styles.usernameInput}
				/>
			</View>
			<InputArea
				placeholder='https://app/account-link'
				textStyle={styles.text}
				onChangeText={(text) => onInputChange(text, 'url')}
				value={socialFormData.url}
			/>
			<View style={styles.buttonContainer}>
				<CustomButton
					type='stretched'
					content='Cancel'
					onPress={() => useModalStore.getState().closeModal()}
				/>
				<CustomButton
					type='stretched'
					content='Save'
					disabled={
						!(
							selectedSocial &&
							isValidUrl(socialFormData.url) &&
							socialFormData.username.length > 0
						)
					}
					onPress={() => {
						if (!socialFormData.social) return;
						userInfoStore.addSocialAccount(
							socialFormData as {
								social: Social;
								username: string;
								url: string;
							}
						);
					}}
				/>
			</View>
		</View>
	);
}
