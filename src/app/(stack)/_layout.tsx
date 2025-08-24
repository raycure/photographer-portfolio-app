import React from 'react';
import { Stack } from 'expo-router';
import CustomHeader from '@/src/components/UI/CustomHeader';
import LogoutButton from '@/src/components/UI/LogoutButton';
import ChallengeHistoryButton from '@/src/components/ChallengeHistory/ChallengeHistoryHeaderButton';
import { ConnectionsHeader } from '@/src/components/Connections/ConnectionsHeader';

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
					title: 'ChallengeHistory',
					header: () => (
						<CustomHeader rightElement={<ChallengeHistoryButton />} />
					),
				}}
			/>
			<Stack.Screen
				name='profilePublic'
				options={{
					title: 'ProfilePublic',
				}}
			/>
			<Stack.Screen
				name='connections'
				options={{
					title: 'Connections',
					header: () => <CustomHeader rightElement={<ConnectionsHeader />} />,
				}}
			/>
		</Stack>
	);
}
