import { View } from 'react-native';
import { Text } from '../Themed';
import { useColors } from '@/src/hooks/useColors';
import CustomIcon from '../UI/CustomIcon';
import { CameraSVG, StarSVG, TrophySVG } from '@/src/constants/svgs';
import TintedBackground from '../UI/TintedBackground';
import FillingBar from '../UI/FillingBar';
import { getLevelInfo } from '@/src/utils/getLevel';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { ProfileStatisticsStyles } from './ProfileStyles';
import SubtitleTitlePair from '../UI/SubtitleTitlePair';

export default function ProfileStatistics() {
	const colors = useColors();
	const levelInfo = getLevelInfo();
	const attendedChallenges = useUserInfoStore().stats.attendedChallenges;
	const wins = attendedChallenges?.filter((challenge) => {
		return challenge.rank <= 3;
	});
	const rightSideBlocksConfig = [
		{
			icon: <TrophySVG width={32} height={32} />,
			iconWrapperColor: colors.iconBackgroundOrange,
			title3: 'Zaferler',
			title2: `${wins?.length} yarışma`,
		},
		{
			icon: <CameraSVG width={36} height={36} />,
			iconWrapperColor: colors.iconBackgroundBlue,
			title3: 'Yarışmalar',
			title2: `${attendedChallenges?.length} katılım`,
		},
	];
	const styles = ProfileStatisticsStyles;
	return (
		<View style={styles.outerContainer}>
			<View
				style={[
					{ backgroundColor: colors.primary400 },
					styles.blockContainer,
					styles.bigBlockContainer,
				]}
			>
				<TintedBackground type='circular' color={colors.iconBackgroundYellow}>
					<CustomIcon svg={<StarSVG width={44} height={44} />} />
				</TintedBackground>
				<Text style={styles.title1}>Level</Text>
				<View style={{ alignSelf: 'stretch' }}>
					<View style={styles.levelInfoContainer}>
						<Text style={styles.levelMainText}>{levelInfo.level}</Text>
						<Text style={[{ color: colors.primary100 }, styles.title3]}>
							{levelInfo.remainingExp}/{levelInfo.requiredExpForNextLevel} exp
						</Text>
					</View>
					<FillingBar percentage={levelInfo.progressToNextLevel} />
				</View>
			</View>
			<View style={styles.innerContainer}>
				{rightSideBlocksConfig.map((block, index) => (
					<View
						key={index}
						style={[
							{ backgroundColor: colors.primary400 },
							styles.blockContainer,
							styles.sideBlockContainers,
						]}
					>
						<TintedBackground type='circular' color={block.iconWrapperColor}>
							<CustomIcon size={40} svg={block.icon} />
						</TintedBackground>
						<SubtitleTitlePair
							title={block.title2}
							subtitle={block.title3}
							size='small'
							titleStyle={styles.title2}
							subtitleStyle={styles.title3}
						/>
					</View>
				))}
			</View>
		</View>
	);
}
