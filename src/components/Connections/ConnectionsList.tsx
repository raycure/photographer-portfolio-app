import { FlatList, View } from 'react-native';
import ConnectionsListItem from './ConnectionsListItem';
import { UserState } from '@/src/stores/StoreTypes';
import { ConnectionsListStyles } from './ConnectionsStyles';

export default function ConnectionsList({ data }: { data?: UserState[] }) {
	const styles = ConnectionsListStyles;
	return (
		<FlatList
			data={data}
			renderItem={({ item }) => (
				<ConnectionsListItem userpresonalInfo={item.personalInfo} />
			)}
			keyExtractor={(item) => item.personalInfo.username!}
			ListFooterComponent={<View style={styles.listFooter} />}
		/>
	);
}
