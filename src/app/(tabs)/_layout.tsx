import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/components/useColorScheme';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';
import CustomIcon from '@/src/components/UI/CustomIcon';
import { IconCollectionKey } from '@/src/constants/iconRegistry';

export default function TabLayout() {
	const colorScheme = useColorScheme();
	const tabsContent: {
		name: string;
		title: string;
		iconInfo: {
			collectionKey: IconCollectionKey;
			name: string;
			activeName?: string;
		};
	}[] = [
		{
			name: 'index',
			title: 'Home',
			iconInfo: {
				collectionKey: 'ion',
				name: 'home-outline',
				activeName: 'home',
			},
		},
		{
			name: 'leaderboard',
			title: 'Leaderboard',
			iconInfo: {
				collectionKey: 'ad',
				name: 'staro',
				activeName: 'star',
			},
		},
		{
			name: 'profile',
			title: 'Profile',
			iconInfo: {
				collectionKey: 'fa',
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
			{tabsContent.map((tab, index) => {
				return (
					<Tabs.Screen
						key={index}
						name={tab.name}
						options={{
							title: tab.title,
							tabBarIcon: ({ color, focused }) => (
								<CustomIcon
									collectionKey={tab.iconInfo.collectionKey}
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
