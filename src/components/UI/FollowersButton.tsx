import { Pressable } from 'react-native';
import CustomIcon from './CustomIcon';
import { Text } from '../Themed';
import { useContext, useState } from 'react';
import { useColors } from '@/src/hooks/useColors';
import UserContext from '@/src/context/UserContext';
import { FollowersButtonStyles } from './UIStyles';
type FollowersButtonProps = {
	size?: 'big' | 'medium' | 'small';
};
export default function FollowersButton({
	size = 'medium',
}: FollowersButtonProps) {
	const [pressed, setPressed] = useState<boolean>(false);
	const colors = useColors();
	const user = useContext(UserContext);
	const followers = user.social.followerAccounts;
	const followersCount = followers.length;
	const styles = FollowersButtonStyles;
	return (
		<Pressable
			style={styles.container}
			onPressIn={() => setPressed(true)}
			onPressOut={() => setPressed(false)}
		>
			<CustomIcon
				collectionKey='oct'
				name='person'
				size={size === 'big' ? 24 : size === 'medium' ? 22 : 16}
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
