import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';
import CustomButton from '../UI/CustomButton';
import CustomIcon from '../UI/CustomIcon';
import useAspectRatio from '@/src/hooks/useAspectRatio';
import { images } from '@/src/constants/dummyImages';
import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import { useColors } from '@/src/hooks/useColors';
import RankIndicator from './RankIndicator';
import { useRouter } from 'expo-router';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { LeaderBoardListItemStyles } from './LeaderboardStyles';
import { LeaderBoardListItemProps } from './LeaderboardTypes';

export default function LeaderboardListItem({
	entryId,
}: LeaderBoardListItemProps) {
	const colors = useColors();
	const router = useRouter();
	const userInfoStore = useUserInfoStore();
	const entry = dummyChallengeData.entries.find((entry) => {
		return entry.entryId === entryId;
	});
	const imageLink = images.find((image) => {
		return image.imageId === entry?.imageId;
	})?.link;
	const aspectRatio = useAspectRatio(imageLink);
	const liked = entry?.likes.includes(userInfoStore.personalInfo.id!);
	const onPressLike = () => {
		if (liked) {
		} else {
		}
	};
	const onProfilePress = () => {
		router.push({
			pathname: '/(stack)/profilePublic',
			params: { userId: entry?.userId },
		});
	};
	const styles = LeaderBoardListItemStyles;
	return (
		<View
			style={[styles.outerContainer, { backgroundColor: colors.primary600 }]}
		>
			<RankIndicator rank={entry?.rank!} />
			<Image
				source={{
					uri: imageLink,
				}}
				style={{ aspectRatio, height: aspectRatio < 1 ? 100 : 70 }}
			/>
			<View style={styles.innerContainer}>
				<Pressable style={styles.textContainer} onPress={onProfilePress}>
					<Text style={[styles.title, { color: colors.tint }]}>
						{entry?.name}
					</Text>
					<Text style={[styles.text, { color: colors.primary100 }]}>
						@{entry?.username}
					</Text>
				</Pressable>
				<View style={styles.buttonContainer}>
					<Text style={[styles.likes, { color: colors.tint }]}>
						{entry?.likes.length}
					</Text>
					<CustomButton
						type='icon'
						onPress={onPressLike}
						icon={
							<CustomIcon
								size={20}
								collectionKey='oct'
								color={liked ? colors.accentRed : colors.tint}
								name={liked ? 'heart-fill' : 'heart'}
							/>
						}
					/>
				</View>
			</View>
		</View>
	);
}
