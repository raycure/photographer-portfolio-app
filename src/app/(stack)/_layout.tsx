import React from 'react';
import { Stack } from 'expo-router';
import CustomHeader from '@/src/components/UI/CustomHeader';
import LogoutButton from '@/src/components/UI/LogoutButton';
import ChallengeHistoryInfoButton from '@/src/components/ChallengeHistory/ChallengeHistoryInfoButton';

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
				name='menu'
				options={{
					title: 'Menu',
					header: () => <CustomHeader rightElement={<LogoutButton />} />,
				}}
			/>
			<Stack.Screen
				name='challengeHistory'
				options={{
					title: 'ChallengeHistory',
					header: () => (
						<CustomHeader rightElement={<ChallengeHistoryInfoButton />} />
					),
				}}
			/>
			<Stack.Screen
				name='profilePublic'
				options={{
					title: 'ProfilePublic',
				}}
			/>
		</Stack>
	);
}
