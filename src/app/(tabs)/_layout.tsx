import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/components/useColorScheme';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';
import CustomIcon from '@/src/components/UI/Icon';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
				headerShown: useClientOnlyValue(false, false),
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color, focused }) => (
						<CustomIcon
							setName={Ionicons}
							name={focused ? 'home' : 'home-outline'}
							active={focused}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='leaderboard'
				options={{
					title: 'Leaderboard',
					tabBarIcon: ({ color, focused }) => (
						<CustomIcon
							setName={AntDesign}
							name={focused ? 'star' : 'staro'}
							active={focused}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: 'Profile',
					tabBarIcon: ({ color, focused }) => (
						<CustomIcon
							setName={FontAwesome}
							name={focused ? 'user' : 'user-o'}
							active={focused}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
