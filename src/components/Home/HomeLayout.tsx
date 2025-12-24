import { View } from '../Themed';
import HomeSwiper from './HomeSwiper';
import { HomeLayoutStyles } from './HomeStyles';
import HomeHeader from './HomeHeader';
import { dummyChallengeData } from '@/src/constants/dummyChallengeData';

export default function HomeLayout() {
	const styles = HomeLayoutStyles;
	return (
		<View style={styles.outerContainer}>
			<HomeHeader theme={dummyChallengeData.challengeTheme} />
			<HomeSwiper entries={dummyChallengeData.entries} />
		</View>
	);
}
