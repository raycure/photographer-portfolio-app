import React from 'react';
import { Stack } from 'expo-router';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';

export default function SecureLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: useClientOnlyValue(false, false),
			}}
		>
			<Stack.Screen
				name='index'
				options={{
					title: 'Register',
				}}
			/>
			<Stack.Screen
				name='login'
				options={{
					title: 'Login',
				}}
			/>
		</Stack>
	);
}
