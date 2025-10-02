import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { useState } from 'react';
import { Switch } from 'react-native';

export default function ThemeSwitch() {
	const userInfoStore = useUserInfoStore();
	const isDarkEnabled = userInfoStore.preferences.darkTheme;
	const toggleSwitch = () => {
		userInfoStore.changeTheme();
	};
	return (
		<Switch
			trackColor={{ true: '#767577', false: '#81b0ff' }}
			thumbColor={isDarkEnabled ? '#f4f3f4' : '#f5dd4b'}
			ios_backgroundColor='#3e3e3e'
			onValueChange={toggleSwitch}
			value={isDarkEnabled}
		/>
	);
}
