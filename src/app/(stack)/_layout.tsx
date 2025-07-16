import React from 'react';
import { Stack } from 'expo-router';

import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/components/useColorScheme';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Stack
			screenOptions={{
				headerShown: useClientOnlyValue(false, false),
			}}
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
				}}
			/>
			<Stack.Screen
				name='eventHistory'
				options={{
					title: 'EventHistory',
				}}
			/>
			<Stack.Screen
				name='(secure)'
				options={{
					title: 'Authentication',
				}}
			/>
		</Stack>
	);
}
