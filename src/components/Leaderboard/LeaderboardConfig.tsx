import { CrownSVG } from '@/src/constants/svgs';
import { LeaderboardWinnersBlockStyles } from './LeaderboardStyles';
import { LeaderboardWinerConfig } from './LeaderboardTypes';
import CustomIcon from '../UI/CustomIcon';
export const LeaderboardWinnersConfig: LeaderboardWinerConfig[] = [
	{
		style: [
			LeaderboardWinnersBlockStyles.innerContainer,
			LeaderboardWinnersBlockStyles.sideContainers,
			LeaderboardWinnersBlockStyles.leftContainer,
		],
		rank: 2,
		photoSize: 'medium',
	},
	{
		icon: (
			<CustomIcon
				style={LeaderboardWinnersBlockStyles.crownIcon}
				size={60}
				svg={<CrownSVG />}
			/>
		),
		style: LeaderboardWinnersBlockStyles.innerContainer,
		rank: 1,
		photoSize: 'big',
	},
	{
		style: [
			LeaderboardWinnersBlockStyles.innerContainer,
			LeaderboardWinnersBlockStyles.sideContainers,
			LeaderboardWinnersBlockStyles.rightContainer,
		],
		rank: 3,
		photoSize: 'medium',
	},
];
