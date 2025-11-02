import { View } from 'react-native';
import CustomButton from '../UI/CustomButton';
import CustomIcon from '../UI/CustomIcon';
import SubtitleTitlePair from '../UI/SubtitleTitlePair';
import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import { useRouter } from 'expo-router';
import { LeaderboardHeaderStyles } from './LeaderboardStyles';

export default function LeaderboardHeader() {
	const router = useRouter();
	const challengeTheme = dummyChallengeData.challengeTheme;
	const onHistoryButtonPress = () => {
		router.push('/(stack)/challengeHistory');
	};
	const styles = LeaderboardHeaderStyles;
	return (
		<View style={styles.outerContainer}>
			<SubtitleTitlePair subtitle='Theme' title={challengeTheme} />
			<CustomButton
				type='icon'
				onPress={onHistoryButtonPress}
				icon={({ color }) => (
					<CustomIcon
						collectionKey='ion'
						name='information-circle-outline'
						color={color}
						size={28}
					/>
				)}
			/>
		</View>
	);
}
