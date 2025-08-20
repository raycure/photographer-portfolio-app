import { View } from '../Themed';
import LeaderboardHeader from './LeaderboardHeader';
import LeaderboardList from './LeaderboardList';
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
			<LeaderboardList />
		</View>
	);
}
