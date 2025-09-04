import { StyleSheet, View } from 'react-native';
import FloatingButton from './FloatingButton';
import { StarSVG } from '@/src/constants/svgs';

export default function FloatingActionsContainer() {
	return (
		<View style={styles.outerContainer}>
			<FloatingButton icon={{ svg: <StarSVG /> }} />
		</View>
	);
}
const styles = StyleSheet.create({
	outerContainer: { position: 'absolute', right: 0, bottom: 0, padding: 8 },
});
