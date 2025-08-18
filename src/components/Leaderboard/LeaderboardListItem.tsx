import LeaderboardPhoto from './LeaderboardPhoto';
import RankIndicator from './RankIndicator';

export default function LeaderboardListItem() {
	return (
		<>
			<LeaderboardPhoto size='small' />
			<RankIndicator rank={1} directionUp={false} />
		</>
	);
}
