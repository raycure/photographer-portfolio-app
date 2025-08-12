import { View } from '../Themed';
import LeaderboardHeader from './LeaderboardHeader';
import LeaderboardWinnersBlock from './LeaderboardWinnersBlock';
import LeaderboardList from './LeaderboardList';
import LeaderboardPersonalButton from './LeaderboardPersonalButton';
import { useState } from 'react';
import { LeaderboardLayoutStyles } from './LeaderboardStyles';

export default function LeaderboardLayout() {
	const [levelToggle, setLevelToggle] = useState<boolean>(false);
	const styles = LeaderboardLayoutStyles;
	return (
		<View style={styles.outerContainer}>
			<LeaderboardHeader
				levelToggle={levelToggle}
				setLevelToggle={setLevelToggle}
			/>
			<LeaderboardWinnersBlock />
			<LeaderboardPersonalButton />
			<LeaderboardList />
		</View>
	);
}
