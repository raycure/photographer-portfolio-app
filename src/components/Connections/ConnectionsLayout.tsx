import { StyleSheet, View } from 'react-native';
import ConnectionsSelectionBar from './ConnectionsSelectionBar';
import ConnectionsList from './ConnectionsList';

export default function ConnectionsLayout() {
	return (
		<View>
			<ConnectionsSelectionBar />
			<ConnectionsList />
		</View>
	);
}
const styles = StyleSheet.create({});
