import { View } from 'react-native';
import CustomButton from '../UI/CustomButton';
import CustomIcon from '../UI/CustomIcon';
import SubtitleTitlePair from '../UI/SubtitleTitlePair';
import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import { useRouter } from 'expo-router';
import { LeaderboardHeaderStyles } from './LeaderboardStyles';
import { useTranslation } from 'react-i18next';

export default function LeaderboardHeader() {
	const router = useRouter();
	const { t } = useTranslation();
	const challengeTheme = dummyChallengeData.challengeTheme;
	const onHistoryButtonPress = () => {
		router.push('/(stack)/challengeHistory');
	};
	const styles = LeaderboardHeaderStyles;
	return (
		<View style={styles.outerContainer}>
			<SubtitleTitlePair
				subtitle={t('ChallengeHistory.theme')}
				title={challengeTheme}
			/>
			<CustomButton
				type='icon'
				onPress={onHistoryButtonPress}
				icon={({ color }) => (
					<CustomIcon
						collectionKey='oct'
						name='history'
						color={color}
						size={22}
					/>
				)}
			/>
		</View>
	);
}
