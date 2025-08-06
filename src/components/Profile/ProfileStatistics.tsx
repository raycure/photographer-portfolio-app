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

export default function ProfileStatistics() {
	const colors = useColors();
	const levelInfo = getLevelInfo();
	const userInfoStore = useUserInfoStore();

	const rightSideBlocksConfig = [
		{
			icon: <TrophySVG width={32} height={32} />,
			iconWrapperColor: colors.iconBackgroundOrange,
			title3: 'Zaferler',
			title2: `${userInfoStore.stats.wins?.length} yarışma`,
		},
		{
			icon: <CameraSVG width={36} height={36} />,
			iconWrapperColor: colors.iconBackgroundBlue,
			title3: 'Yarışmalar',
			title2: `${userInfoStore.stats.attendedChallenges?.length} katılım`,
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
						<View>
							<Text style={[{ color: colors.primary100 }, styles.title3]}>
								{block.title3}
							</Text>
							<Text
								numberOfLines={1}
								adjustsFontSizeToFit
								style={styles.title2}
							>
								{block.title2}
							</Text>
						</View>
					</View>
				))}
			</View>
		</View>
	);
}
