import { View } from 'react-native';
import { Text } from '../Themed';
import { useColors } from '@/src/hooks/useColors';
import CustomIcon from '../UI/CustomIcon';
import { CameraSVG, StarSVG, TrophySVG } from '@/src/constants/svgs';
import TintedBackground from '../UI/TintedBackground';
import FillingBar from '../UI/FillingBar';
import { getLevelInfo } from '@/src/utils/getLevel';
import { ProfileStatisticsStyles } from './ProfileStyles';
import SubtitleTitlePair from '../UI/SubtitleTitlePair';
import { useContext } from 'react';
import UserContext from '@/src/context/UserContext';
import { useTranslation } from 'react-i18next';

export default function ProfileStatistics() {
	const colors = useColors();
	const { t } = useTranslation();
	const user = useContext(UserContext);
	const levelInfo = getLevelInfo(user.stats.experiencePoints!);
	const attendedChallenges = user.stats.attendedChallenges;
	const wins = attendedChallenges?.filter((challenge) => {
		return challenge.rank <= 3;
	});
	const rightSideBlocksConfig = [
		{
			icon: <TrophySVG width={26} height={26} />,
			iconWrapperColor: colors.iconBackgroundOrange,
			title3: t('Profile.titleOne'),
			title2: wins?.length + ' ' + t('Profile.subtitleOne'),
		},
		{
			icon: <CameraSVG width={28} height={28} />,
			iconWrapperColor: colors.iconBackgroundBlue,
			title3: t('Profile.titleTwo'),
			title2: attendedChallenges?.length + ' ' + t('Profile.subtitleTwo'),
		},
	];
	const styles = ProfileStatisticsStyles;
	return (
		<View style={styles.outerContainer}>
			<View
				style={[
					{ backgroundColor: colors.primary500 },
					styles.blockContainer,
					styles.bigBlockContainer,
				]}
			>
				<TintedBackground
					opacity={0.5}
					type='circular'
					color={colors.iconBackgroundYellow}
				>
					<CustomIcon svg={<StarSVG width={34} height={34} />} />
				</TintedBackground>
				<Text style={styles.title1}>{t('Profile.mainTitle')}</Text>
				<View style={{ alignSelf: 'stretch' }}>
					<View style={styles.levelInfoContainer}>
						<Text style={styles.title1}>{levelInfo.level}</Text>
						<Text style={[{ color: colors.primary100 }, styles.title3]}>
							{levelInfo.remainingExp}/{levelInfo.requiredExpForNextLevel} exp
						</Text>
					</View>
					<FillingBar
						thickness={8}
						percentage={levelInfo.progressToNextLevel}
					/>
				</View>
			</View>
			<View style={styles.innerContainer}>
				{rightSideBlocksConfig.map((block, index) => (
					<View
						key={index}
						style={[
							{ backgroundColor: colors.primary500 },
							styles.blockContainer,
							styles.sideBlockContainers,
						]}
					>
						<TintedBackground
							opacity={0.5}
							type='circular'
							color={block.iconWrapperColor}
						>
							<CustomIcon size={28} svg={block.icon} />
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
