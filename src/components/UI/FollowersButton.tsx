import { Pressable } from 'react-native';
import CustomIcon from './CustomIcon';
import { Text } from '../Themed';
import { useContext, useState } from 'react';
import { useColors } from '@/src/hooks/useColors';
import UserContext from '@/src/context/UserContext';
import { FollowersButtonStyles } from './UIStyles';
import { useRouter } from 'expo-router';
import { FollowersButtonProps } from './UITypes';
import { dummyUsers } from '@/src/constants/dummyUsers';

export default function FollowersButton({
	size = 'medium',
	userId,
}: FollowersButtonProps) {
	const [pressed, setPressed] = useState<boolean>(false);
	const colors = useColors();
	const userContext = useContext(UserContext);
	const router = useRouter();
	const user = userId
		? dummyUsers.find((user) => user.personalInfo.id === userId)
		: userContext;
	if (!user) {
		return null; // todo fallback
	}
	const followers = user.social.followerAccounts;
	const followersCount = followers.length;
	const styles = FollowersButtonStyles;
	const onFollowersButtonPress = () => {
		router.push({
			pathname: '/(stack)/connections',
			params: { userId: user.personalInfo.id },
		});
	};
	return (
		<Pressable
			style={styles.container}
			onPressIn={() => setPressed(true)}
			onPressOut={() => setPressed(false)}
			onPress={onFollowersButtonPress}
		>
			<CustomIcon
				collectionKey='oct'
				name='person'
				size={size === 'big' ? 24 : size === 'medium' ? 18 : 16}
				color={!pressed ? colors.gray100 : colors.gray300}
			/>
			<Text
				lightColor={!pressed ? colors.gray100 : colors.gray300}
				darkColor={!pressed ? colors.gray100 : colors.gray300}
				style={[
					styles.textGeneral,
					size === 'big'
						? styles.bigText
						: size === 'medium'
						? styles.mediumText
						: styles.smallText,
				]}
			>
				{followersCount}
			</Text>
		</Pressable>
	);
}
