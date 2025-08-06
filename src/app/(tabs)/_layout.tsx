import React from 'react';
import { Tabs } from 'expo-router';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';
import CustomIcon from '@/src/components/UI/CustomIcon';
import { IconCollectionKey } from '@/src/constants/iconRegistry';
import { useColors } from '@/src/hooks/useColors';

export default function TabLayout() {
	const colors = useColors();
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
				tabBarActiveTintColor: colors.tint,
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
