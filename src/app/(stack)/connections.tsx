import ConnectionsLayout from '@/src/components/Connections/ConnectionsLayout';
import { View } from '@/src/components/Themed';
import { StyleSheet } from 'react-native';

export default function ConnectionsScreen() {
	return (
		<View style={styles.outerContainer}>
			<ConnectionsLayout />
		</View>
	);
}
const styles = StyleSheet.create({
	outerContainer: { flex: 1 },
});
