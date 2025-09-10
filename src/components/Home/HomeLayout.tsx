import { StyleSheet } from 'react-native';
import { View } from '../Themed';
import HomeSwiper from './HomeSwiper';
import HomeCard from './HomeCard';

export default function HomeLayout() {
	return (
		<View style={styles.outerContainer}>
			<HomeSwiper />
		</View>
	);
}
const styles = StyleSheet.create({
	outerContainer: { flex: 1, alignItems: 'center', padding: 16 },
});
