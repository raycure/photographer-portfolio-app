import React from 'react';
import { Stack } from 'expo-router';
import CustomHeader from '@/src/components/UI/CustomHeader';
import ChallengeHistoryButton from '@/src/components/ChallengeHistory/ChallengeHistoryHeaderButton';
import { ConnectionsHeader } from '@/src/components/Connections/ConnectionsHeader';
import LinkedAccountsHeader from '@/src/components/LinkedAccounts/LinkedAccountsHeader';

export default function StackLayout() {
	return (
		<Stack
			screenOptions={() => ({
				header: () => <CustomHeader />,
			})}
		>
			<Stack.Screen
				name='index'
				options={{
					title: 'Onboarding',
				}}
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
				name='profilePublic'
				options={{
					title: 'Profile Public',
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
				name='imageInfo'
				options={{
					title: 'Image Info',
					headerShown: false,
					presentation: 'transparentModal',
					contentStyle: { backgroundColor: 'transparent' },
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
				name='editAccount'
				options={{
					title: 'Edit Account',
				}}
			/>
		</Stack>
	);
}
