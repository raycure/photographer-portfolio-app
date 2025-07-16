import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/components/useColorScheme';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';
import CustomIcon from '@/src/components/UI/CustomIcon';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
	const colorScheme = useColorScheme();
	const tabsContent = [
		{
			name: 'index',
			title: 'Home',
			iconInfo: {
				collectionName: Ionicons,
				name: 'home-outline',
				activeName: 'home',
			},
		},
		{
			name: 'leaderboard',
			title: 'Leaderboard',
			iconInfo: {
				collectionName: AntDesign,
				name: 'staro',
				activeName: 'star',
			},
		},
		{
			name: 'profile',
			title: 'Profile',
			iconInfo: {
				collectionName: FontAwesome,
				name: 'user-o',
				activeName: 'user',
			},
		},
	];

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
				headerShown: useClientOnlyValue(false, false),
			}}
		>
			{tabsContent.map((tab) => {
				return (
					<Tabs.Screen
						name={tab.name}
						options={{
							title: tab.title,
							tabBarIcon: ({ color, focused }) => (
								<CustomIcon
									collectionName={tab.iconInfo.collectionName}
									name={focused ? tab.iconInfo.activeName : tab.iconInfo.name}
									active={focused}
									color={color}
								/>
							),
						}}
					/>
				);
			})}
		</Tabs>
	);
}
