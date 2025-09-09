import React from 'react';
import { Tabs } from 'expo-router';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';
import CustomIcon from '@/src/components/UI/CustomIcon';
import { useColors } from '@/src/hooks/useColors';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CustomIconProps } from '@/src/components/UI/UITypes';
import {
	BellOSVG,
	BellSVG,
	HomeOSVG,
	HomeSVG,
	LeaderboardOSVG,
	LeaderboardSVG,
	SettingsOSVG,
	SettingsSVG,
	UserOSVG,
	UserSVG,
} from '@/src/constants/svgs';

export default function TabLayout() {
	const colors = useColors();
	const tabsContent: {
		name: string;
		title: string;
		icon: CustomIconProps;
		focusedIcon: CustomIconProps;
	}[] = [
		{
			name: 'leaderboard',
			title: 'Leaderboard',
			icon: { svg: <LeaderboardOSVG color={colors.tint} /> },
			focusedIcon: { svg: <LeaderboardSVG /> },
		},
		{
			name: 'notifications',
			title: 'Notifications',
			icon: { svg: <BellOSVG color={colors.tint} /> },
			focusedIcon: { svg: <BellSVG /> },
		},
		{
			name: 'index',
			title: 'Home',
			icon: { svg: <HomeOSVG color={colors.tint} /> },
			focusedIcon: { svg: <HomeSVG /> },
		},
		{
			name: 'profile',
			title: 'Profile',
			icon: { svg: <UserOSVG color={colors.tint} /> },
			focusedIcon: { svg: <UserSVG /> },
		},
		{
			name: 'settings',
			title: 'Settings',
			icon: { svg: <SettingsOSVG color={colors.tint} /> },
			focusedIcon: { svg: <SettingsSVG /> },
		},
	];

	return (
		<Tabs
			initialRouteName='index'
			screenOptions={{
				tabBarActiveTintColor: colors.tint,
				headerShown: useClientOnlyValue(false, false),
				tabBarButton: ({ onPress, children, style, accessibilityState }) => (
					<Pressable
						onPress={onPress}
						android_ripple={undefined}
						style={style}
						accessibilityState={accessibilityState}
					>
						{children}
					</Pressable>
				),
			}}
		>
			{tabsContent.map((tab, index) => {
				return (
					<Tabs.Screen
						key={index}
						name={tab.name}
						options={{
							title: tab.title,
							tabBarShowLabel: false,
							tabBarIcon: ({ color, focused }) => {
								const iconProps = focused ? tab.focusedIcon : tab.icon;
								return (
									<View
										style={[
											styles.unfocusedButton,
											focused && {
												backgroundColor: colors.tint,
												...styles.focusedButton,
											},
										]}
									>
										<CustomIcon size={30} {...iconProps} color={color} />
									</View>
								);
							},
						}}
					/>
				);
			})}
		</Tabs>
	);
}
const styles = StyleSheet.create({
	focusedButton: {
		width: 54,
		height: 54,
		borderRadius: 30,
		bottom: 10,
	},
	unfocusedButton: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});
