import Colors from '../constants/Colors';
import { useUserInfoStore } from '../stores/UserInfoStore';

export function useColors() {
	const userInfoStore = useUserInfoStore();
	const isDarkColorScheme = userInfoStore.preferences.darkTheme;
	const colorScheme = isDarkColorScheme ? 'dark' : 'light';
	return Colors[colorScheme];
}
