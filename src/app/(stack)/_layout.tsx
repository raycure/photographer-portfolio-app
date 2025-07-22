import React from 'react';
import { Stack } from 'expo-router';
import CustomHeader from '@/src/components/UI/CustomHeader';

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
				}}
			/>
			<Stack.Screen
				name='eventHistory'
				options={{
					title: 'EventHistory',
				}}
			/>
		</Stack>
	);
}
