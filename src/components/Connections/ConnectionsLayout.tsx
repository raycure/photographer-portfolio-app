import ConnectionsBar from './ConnectionsBar';
import ConnectionsList from './ConnectionsList';
import { View } from '../Themed';
import { useState } from 'react';
import { SelectionKey } from './ConnectionsTypes';
import { useLocalSearchParams } from 'expo-router';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { dummyUsers } from '@/src/constants/dummyUsers';
import { UserState } from '@/src/stores/StoreTypes';
import { ConnectionsLayoutStyles } from './ConnectionsStyles';

export default function ConnectionsLayout() {
	const [selection, setSelection] = useState<SelectionKey>('followers');
	const { userId } = useLocalSearchParams();
	const userInfoStore = useUserInfoStore();
	const isPersonal = userId === userInfoStore.personalInfo.id;
	const personalFollowing = userInfoStore.social.followingAccounts;
	const userData = dummyUsers.find((user) => {
		return user.personalInfo.id === userId;
	});
	const followerIds = userData?.social.followerAccounts ?? [];
	const followingIds = userData?.social.followingAccounts ?? [];
	const intersection = (a: string[], b: string[]) =>
		a.filter((id) => b.includes(id));

	const connections = isPersonal
		? intersection(personalFollowing, followerIds)
		: intersection(personalFollowing, followingIds); // friends : mutuals
	const resolveUsers = (ids: string[]): UserState[] =>
		ids
			.map((id) => dummyUsers.find((u) => u.personalInfo.id === id))
			.filter((u): u is UserState => u !== undefined);

	let data;

	if (selection === 'followers') {
		data = resolveUsers(followerIds);
	} else if (selection === 'following') {
		data = resolveUsers(followingIds);
	} else if (selection === 'friends') {
		data = resolveUsers(connections);
	}
	const styles = ConnectionsLayoutStyles;
	return (
		<View style={styles.outerContainer}>
			<ConnectionsBar
				selection={selection}
				setSelection={setSelection}
				isPersonal={isPersonal}
			/>
			<ConnectionsList data={data} />
		</View>
	);
}
