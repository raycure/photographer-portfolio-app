import React from 'react';
import { Stack } from 'expo-router';
import { useColorScheme } from '@/src/components/useColorScheme';
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
					title: 'Login',
				}}
			/>
			<Stack.Screen
				name='register'
				options={{
					title: 'Register',
				}}
			/>
		</Stack>
	);
}
