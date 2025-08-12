import { View } from 'react-native';
import SubtitleTitlePair from '../UI/SubtitleTitlePair';
import { dummyChallengeData } from '@/src/constants/dummyChallengeData';
import CustomButton from '../UI/CustomButton';
import CustomIcon from '../UI/CustomIcon';
import { useColors } from '@/src/hooks/useColors';
import { LeaderboardHeaderStyles } from './LeaderboardStyles';
import { LeaderboardToggleProps } from './LeaderboardTypes';

export default function LeaderboardHeader({
	levelToggle,
	setLevelToggle,
}: LeaderboardToggleProps) {
	const title = dummyChallengeData.challengeTheme;
	const colors = useColors();
	const onHistoryPress = () => {};
	const onLeaderboardToggle = () => {
		setLevelToggle(!levelToggle);
	};
	const styles = LeaderboardHeaderStyles;
	return (
		<View style={styles.outerContainer}>
			<SubtitleTitlePair
				title={title}
				subtitle='Theme'
				titleStyle={styles.title}
			/>
			<View style={styles.buttonsContainer}>
				<CustomButton
					onPress={onHistoryPress}
					type='icon'
					icon={({ color }) => (
						<CustomIcon
							size={24}
							collectionKey='oct'
							name='history'
							color={color}
						/>
					)}
				/>
				<CustomButton
					onPress={onLeaderboardToggle}
					type='icon'
					icon={
						<CustomIcon
							size={26}
							style={styles.toggleIcon}
							collectionKey={levelToggle ? 'fa6' : 'oct'}
							name={levelToggle ? 'trophy' : 'star-fill'}
							color={colors.accentYellow}
						/>
					}
					outerContainerStyle={styles.toggleButton}
					gradientBackground={{
						orientation: 'diagonal-r',
						colors: ['#71d8b1ff', '#4973cdff'],
					}}
				/>
			</View>
		</View>
	);
}
