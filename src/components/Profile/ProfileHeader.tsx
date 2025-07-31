import { Image } from 'react-native';
import { Text, View } from '../Themed';
import CustomIcon from '../UI/CustomIcon';
import CustomButton from '../UI/CustomButton';
import FollowersButton from '../UI/FollowersButton';
import { headerStyles } from './ProfileStyles';
import { useColors } from '@/src/hooks/useColors';
import { useRouter } from 'expo-router';
import { useContext } from 'react';
import UserContext from '@/src/context/UserContext';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import ProfileActionsBar from './ProfileActionsBar';

export default function ProfileHeader() {
	const router = useRouter();
	const colors = useColors();
	const data = useContext(UserContext);
	const userInfoStore = useUserInfoStore();
	const onMenuClick = () => {
		router.push('/(stack)/menu');
	};
	const isPersonal = data.personalInfo.id === userInfoStore.personalInfo.id;
	return (
		<View style={headerStyles.outerContainer}>
			<View>
				{data.personalInfo.premium && (
					<CustomIcon
						style={headerStyles.premiumIcon}
						collectionKey='fa6'
						name='crown'
						size={24}
						color={colors.accentOrange}
					/>
				)}
				<Image
					style={headerStyles.profilePicture}
					source={{
						uri: 'https://reactnative.dev/img/tiny_logo.png',
					}}
				/>
			</View>
			<View style={headerStyles.infoContainer}>
				<View style={headerStyles.spaceBetweenContainer}>
					<Text style={headerStyles.title}>{data.personalInfo.name}</Text>
					<CustomButton
						type='icon'
						icon={({ color }) => (
							<CustomIcon
								collectionKey='ion'
								name='menu-outline'
								color={color}
								size={34}
							/>
						)}
						onPress={onMenuClick}
					/>
				</View>
				<View style={[headerStyles.spaceBetweenContainer, { top: -4 }]}>
					<Text style={[headerStyles.text, { color: colors.gray200 }]}>
						@{data.personalInfo.username}
					</Text>
					<FollowersButton />
				</View>
				<ProfileActionsBar isPersonal={isPersonal} />
			</View>
		</View>
	);
}
