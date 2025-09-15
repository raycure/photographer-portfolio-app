import { Pressable } from 'react-native';
import { Text, View } from '../Themed';
import TintedBackground from '../UI/TintedBackground';
import CustomIcon from '../UI/CustomIcon';
import { useColors } from '@/src/hooks/useColors';
import { SettingsItemStyles } from './SettingsStyles';
import { SettingsItemProps } from './SettingsTypes';
import ThemeSwitch from './ThemeSwitch';

export default function SettingsItem({
	icon,
	tintColor,
	title,
	rightContent,
	titleColor,
	onPress,
}: SettingsItemProps) {
	const colors = useColors();
	const styles = SettingsItemStyles;
	const hasButton = rightContent?.button;
	const hasSwitch = rightContent?.switch;
	const hasTitle = rightContent?.title;
	return (
		<Pressable onPress={onPress} style={({ pressed }) => styles.outerContainer}>
			<View style={styles.innerContainer}>
				<TintedBackground
					style={styles.tintedBackground}
					color={tintColor ? tintColor : colors.primary300}
					opacity={0.35}
				>
					<CustomIcon size={24} {...icon} />
				</TintedBackground>
				<Text style={[styles.title, titleColor && { color: titleColor }]}>
					{title}
				</Text>
			</View>
			{(hasButton || hasSwitch) && (
				<View style={styles.innerContainer}>
					{hasTitle && (
						<Text style={[{ color: colors.primary200 }, styles.sideTitle]}>
							{hasTitle}
						</Text>
					)}
					{hasButton && (
						<CustomIcon
							color={colors.primary200}
							collectionKey='ion'
							name='chevron-forward'
							size={26}
						/>
					)}
					{hasSwitch && <ThemeSwitch />}
				</View>
			)}
		</Pressable>
	);
}
