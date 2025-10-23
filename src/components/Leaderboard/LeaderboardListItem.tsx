import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';
import useAspectRatio from '@/src/hooks/useAspectRatio';
import { images } from '@/src/constants/dummyImages';
import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import { useColors } from '@/src/hooks/useColors';
import RankIndicator from './RankIndicator';
import { useRouter } from 'expo-router';
import {
	LeaderBoardGridItemStyles,
	LeaderBoardListItemStyles,
} from './LeaderboardStyles';
import { LeaderBoardListItemProps } from './LeaderboardTypes';
import CircularPhoto from '../UI/CircularPhoto';
import { dummyUsers } from '@/src/constants/dummyUsers';
import LeaderboardLikeButton from './LeaderboardLikeButton';

export default function LeaderboardListItem({
	entryId,
	topNine = false,
}: LeaderBoardListItemProps) {
	const colors = useColors();
	const router = useRouter();
	const entry = dummyChallengeData.entries.find((entry) => {
		return entry.entryId === entryId;
	});
	const imageLink = images.find((image) => {
		return image.imageId === entry?.imageId;
	})?.link;
	const aspectRatio = useAspectRatio(imageLink);
	const onProfilePress = () => {
		router.push({
			pathname: '/(stack)/profilePublic',
			params: { userId: entry?.userId },
		});
	};
	const onPhotoPress = () => {};
	if (topNine) {
		const styles = LeaderBoardGridItemStyles;
		const profilePicId = dummyUsers.find(
			(user) => entry?.userId === user.personalInfo.id
		)?.personalInfo.imageId;
		const profilePic = images.find(
			(image) => image.imageId === profilePicId
		)?.link;
		return (
			<Pressable style={styles.outerContainer} onPress={onPhotoPress}>
				<RankIndicator style={styles.rank} rank={entry?.rank[0]!} />
				<Image
					source={{
						uri: imageLink,
					}}
					style={[{ aspectRatio }, styles.image]}
				/>
				<View style={styles.innerContainer}>
					<Pressable onPress={onProfilePress}>
						<CircularPhoto
							size='xs'
							followActive={false}
							customSize={entry?.rank[0]! > 3 ? 32 : 42}
							source={profilePic}
							userId={entry?.userId!}
						/>
					</Pressable>
					<LeaderboardLikeButton
						size={entry?.rank[0]! > 3 ? 'small' : 'medium'}
						entryId={entryId}
					/>
				</View>
			</Pressable>
		);
	}
	const styles = LeaderBoardListItemStyles;
	return (
		<View
			style={[styles.outerContainer, { backgroundColor: colors.primary600 }]}
		>
			<RankIndicator rank={entry?.rank!} />
			<Pressable style={styles.textContainer} onPress={onPhotoPress}>
				<Image
					source={{
						uri: imageLink,
					}}
					style={{ aspectRatio, height: aspectRatio < 1 ? 100 : 70 }}
				/>
			</Pressable>
			<View style={styles.innerContainer}>
				<Pressable style={styles.textContainer} onPress={onProfilePress}>
					<Text style={[styles.title, { color: colors.tint }]}>
						{entry?.name}
					</Text>
					<Text style={[styles.text, { color: colors.primary100 }]}>
						@{entry?.username}
					</Text>
				</Pressable>
				<LeaderboardLikeButton size='big' entryId={entryId} />
			</View>
		</View>
	);
}
