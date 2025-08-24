import { Pressable, View } from 'react-native';
import { Text } from '../Themed';
import { useColors } from '@/src/hooks/useColors';
import { ConnectionsBarProps, SelectionKey } from './ConnectionsTypes';
import { selectionBarConfig } from './ConnectionsConfig';
import { ConnectionsBarStyles } from './ConnectionsStyles';

export default function ConnectionsBar({
	selection,
	setSelection,
}: ConnectionsBarProps) {
	const colors = useColors();
	const styles = ConnectionsBarStyles;
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
