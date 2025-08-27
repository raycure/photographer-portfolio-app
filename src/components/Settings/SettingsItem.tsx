import { Pressable } from 'react-native';
import { Text, View } from '../Themed';
import TintedBackground from '../UI/TintedBackground';
import CustomIcon from '../UI/CustomIcon';
import { useColors } from '@/src/hooks/useColors';
import { SettingsItemStyles } from './SettingsStyles';
import { SettingsItemProps } from './SettingsTypes';

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
			{rightContent?.button && (
				<View style={styles.innerContainer}>
					<Text style={[{ color: colors.primary200 }, styles.sideTitle]}>
						{rightContent?.title}
					</Text>
					<CustomIcon
						color={colors.primary200}
						collectionKey='ion'
						name='chevron-forward'
						size={26}
					/>
				</View>
			)}
		</Pressable>
	);
}
