import { View } from 'react-native';
import { SubtitleTitlePairStyles } from './UIStyles';
import { useColors } from '@/src/hooks/useColors';
import { Text } from '../Themed';
import { SubtitleTitlePairProps } from './UITypes';

export default function SubtitleTitlePair({
	title,
	subtitle,
	size = 'medium',
	titleStyle,
	subtitleStyle,
}: SubtitleTitlePairProps) {
	const colors = useColors();
	const styles = SubtitleTitlePairStyles;
	return (
		<View style={styles.outerContainer}>
			<Text
				numberOfLines={1}
				adjustsFontSizeToFit
				style={[
					size === 'big'
						? styles.subtitleBig
						: size === 'medium'
						? styles.subtitleMedium
						: styles.subtitleSmall,
					{ color: colors.primary100 },
					subtitleStyle,
				]}
			>
				{subtitle}
			</Text>
			<Text
				adjustsFontSizeToFit
				style={[
					size === 'big'
						? styles.titleBig
						: size === 'medium'
						? styles.titleMedium
						: styles.titleSmall,
					titleStyle,
				]}
			>
				{title}
			</Text>
		</View>
	);
}
