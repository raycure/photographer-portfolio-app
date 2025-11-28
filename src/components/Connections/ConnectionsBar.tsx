import { Pressable, View } from 'react-native';
import { Text } from '../Themed';
import { useColors } from '@/src/hooks/useColors';
import {
	ConnectionsBarProps,
	SelectionBarConfig,
	SelectionKey,
} from './ConnectionsTypes';
import { ConnectionsBarStyles } from './ConnectionsStyles';
import { useTranslation } from 'react-i18next';

export default function ConnectionsBar({
	selection,
	setSelection,
	isPersonal,
}: ConnectionsBarProps) {
	const colors = useColors();
	const { t } = useTranslation();
	const styles = ConnectionsBarStyles;
	const selectionBarConfig: SelectionBarConfig = {
		followers: {
			title: t('Connections.BarTitles.Followers'),
		},
		following: {
			title: t('Connections.BarTitles.Following'),
		},
		friends: {
			title: isPersonal
				? t('Connections.BarTitles.Friends')
				: t('Connections.BarTitles.Mutuals'),
		},
	};
	return (
		<View style={[styles.outerContainer, { borderColor: colors.primary400 }]}>
			{(Object.keys(selectionBarConfig) as SelectionKey[]).map((key) => {
				const handleSelection = () => {
					setSelection(key);
				};
				const item = selectionBarConfig[key];
				const active = key === selection;
				return (
					<Pressable
						onPress={handleSelection}
						style={[
							styles.buttonContainer,
							active ? styles.buttonContainerActive : null,
							{ borderColor: colors.tint },
						]}
						key={key}
					>
						<Text
							style={[
								styles.label,
								active ? { color: colors.tint } : { color: colors.primary200 },
							]}
						>
							{item.title}
						</Text>
					</Pressable>
				);
			})}
		</View>
	);
}
