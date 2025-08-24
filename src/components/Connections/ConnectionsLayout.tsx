import { StyleSheet } from 'react-native';
import ConnectionsBar from './ConnectionsBar';
import ConnectionsList from './ConnectionsList';
import { View } from '../Themed';
import { useState } from 'react';
import { SelectionKey } from './ConnectionsTypes';

export default function ConnectionsLayout() {
	const [selection, setSelection] = useState<SelectionKey>('followers');
	return (
		<View style={styles.outerContainer}>
			<ConnectionsBar selection={selection} setSelection={setSelection} />
			<ConnectionsList />
		</View>
	);
}
const styles = StyleSheet.create({ outerContainer: { flex: 1 } });
