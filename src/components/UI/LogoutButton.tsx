import { Pressable, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Text } from '../Themed';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { useColors } from '@/src/hooks/useColors';
type LogoutButtonProps = { style?: ViewStyle; textStyle?: TextStyle };
export default function LogoutButton({ style, textStyle }: LogoutButtonProps) {
	const userInfoStore = useUserInfoStore();
	const colors = useColors();
	const onLogoutPressed = () => {
		userInfoStore.logout();
	};

	return (
		<Pressable style={[styles.outerContainer, style]} onPress={onLogoutPressed}>
			<Text
				lightColor={colors.primary100}
				darkColor={colors.primary100}
				style={[styles.text, textStyle]}
			>
				Logout
			</Text>
		</Pressable>
	);
}
const styles = StyleSheet.create({
	outerContainer: {},
	text: { fontSize: 18 },
});
