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
import { getLevelInfo } from '@/src/utils/getLevel';

export default function ProfileHeader() {
	const router = useRouter();
	const colors = useColors();
	const data = useContext(UserContext);
	const userInfoStore = useUserInfoStore();
	const levelInfo = getLevelInfo();
	const onMenuClick = () => {
		router.push('/(stack)/menu');
	};
	const isPersonal = data.personalInfo.id === userInfoStore.personalInfo.id;
	const styles = headerStyles;
	return (
		<View style={styles.outerContainer}>
			<View>
				{data.personalInfo.premium && (
					<CustomIcon
						style={styles.premiumIcon}
						collectionKey='fa6'
						name='crown'
						size={24}
						color={colors.accentOrange}
					/>
				)}
				<Image
					style={styles.profilePicture}
					source={{
						uri: 'https://reactnative.dev/img/tiny_logo.png',
					}}
				/>
			</View>
			<View style={styles.infoContainer}>
				<View style={styles.spaceBetweenContainer}>
					<Text style={styles.title}>{data.personalInfo.name}</Text>
					{isPersonal ? (
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
					) : (
						<Text style={styles.levelText}>Lv. {levelInfo.level}</Text>
					)}
				</View>
				<View style={[styles.spaceBetweenContainer, styles.lowerContainer]}>
					<Text style={[styles.text, { color: colors.gray200 }]}>
						@{data.personalInfo.username}
					</Text>
					<FollowersButton />
				</View>
				<ProfileActionsBar isPersonal={isPersonal} />
			</View>
		</View>
	);
}
