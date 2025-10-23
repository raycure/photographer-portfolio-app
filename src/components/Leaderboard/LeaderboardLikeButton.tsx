import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { Text, View } from 'react-native';
import CustomButton from '../UI/CustomButton';
import CustomIcon from '../UI/CustomIcon';
import { useColors } from '@/src/hooks/useColors';
import { LeaderboardLikeButtonStyles } from './LeaderboardStyles';
import { LeaderboardLikeButtonProps } from './LeaderboardTypes';

export default function LeaderboardLikeButton({
	entryId,
	size = 'medium',
}: LeaderboardLikeButtonProps) {
	const userInfoStore = useUserInfoStore();
	const colors = useColors();
	const entry = dummyChallengeData.entries.find((entry) => {
		return entry.entryId === entryId;
	});
	const liked = entry?.likes.includes(userInfoStore.personalInfo.id!);
	const onPressLike = () => {
		if (liked) {
		} else {
		}
	};
	const styles = LeaderboardLikeButtonStyles;
	return (
		<View style={styles.outerContainer}>
			<Text
				style={[
					{ color: colors.tint },
					size === 'big' ? styles.textBig : styles.textMedium,
				]}
			>
				{entry?.likes.length}
			</Text>
			<CustomButton
				type='icon'
				onPress={onPressLike}
				icon={
					<CustomIcon
						size={size === 'big' ? 20 : size === 'medium' ? 18 : 16}
						collectionKey='oct'
						color={liked ? colors.accentRed : colors.tint}
						name={liked ? 'heart-fill' : 'heart'}
					/>
				}
			/>
		</View>
	);
}
