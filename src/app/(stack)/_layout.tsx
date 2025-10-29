import React from 'react';
import { Stack } from 'expo-router';
import CustomHeader from '@/src/components/UI/CustomHeader';
import ChallengeHistoryButton from '@/src/components/ChallengeHistory/ChallengeHistoryHeaderButton';
import { ConnectionsHeader } from '@/src/components/Connections/ConnectionsHeader';
import LinkedAccountsHeader from '@/src/components/LinkedAccounts/LinkedAccountsHeader';
import ProfilePublicHeader from '@/src/components/Profile/ProfilePublicHeader';
import { UserID } from '@/src/stores/StoreTypes';

export default function StackLayout() {
	return (
		<Stack
			screenOptions={() => ({
				header: () => <CustomHeader />,
			})}
		>
			<Stack.Screen
				name='index'
				options={({ route }: { route: { params?: { userId?: UserID } } }) => ({
					title: 'Profile Public',
					header: () => (
						<CustomHeader
							rightElement={
								<ProfilePublicHeader userId={route.params?.userId} />
							}
						/>
					),
				})}
			/>
			<Stack.Screen
				name='challengeHistory'
				options={{
					title: 'Challenge History',
					header: () => (
						<CustomHeader rightElement={<ChallengeHistoryButton />} />
					),
				}}
			/>
			<Stack.Screen
				name='connections'
				options={{
					title: 'Connections',
					header: () => <CustomHeader rightElement={<ConnectionsHeader />} />,
				}}
			/>
			<Stack.Screen
				name='linkedAccounts'
				options={{
					title: 'Linked Accounts',
					header: () => (
						<CustomHeader rightElement={<LinkedAccountsHeader />} />
					),
				}}
			/>
			<Stack.Screen
				name='editProfile'
				options={{
					title: 'Edit Profile',
				}}
			/>
		</Stack>
	);
}
