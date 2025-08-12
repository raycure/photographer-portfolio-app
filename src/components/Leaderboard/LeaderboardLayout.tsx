import { StyleSheet } from 'react-native';
import { View } from '../Themed';
import LeaderboardHeader from './LeaderboardHeader';
import LeaderboardWinnersBlock from './LeaderboardWinnersBlock';
import LeaderboardList from './LeaderboardList';

export default function LeaderboardLayout() {
	return (
		<View style={styles.outerContainer}>
			<LeaderboardHeader />
			<LeaderboardWinnersBlock />
			<LeaderboardList />
		</View>
	);
}
const styles = StyleSheet.create({
	outerContainer: { flex: 1, padding: 16 },
});
