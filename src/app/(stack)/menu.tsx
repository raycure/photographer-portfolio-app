import { StyleSheet } from 'react-native';
import { View } from '@/src/components/Themed';
import MenuBlocks from '@/src/components/Menu/MenuBlocks';

export default function MenuScreen() {
	return (
		<View style={styles.outerContainer}>
			<MenuBlocks />
		</View>
	);
}

const styles = StyleSheet.create({
	outerContainer: { flex: 1, padding: 16 },
});
