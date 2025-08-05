import { StyleSheet } from 'react-native';
import { View } from '@/src/components/Themed';

export default function MenuScreen() {
	return <View style={styles.outerContainer}></View>;
}

const styles = StyleSheet.create({
	outerContainer: { flex: 1 },
});
