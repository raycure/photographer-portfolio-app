import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColors } from '@/src/hooks/useColors';

export default function SecureLayout() {
	const colors = useColors();
	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: colors.background }}
			edges={['top']}
		>
			<Stack
				screenOptions={{
					headerShown: false,
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
		</SafeAreaView>
	);
}
