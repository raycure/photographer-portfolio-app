import { Text, View } from '../Themed';
import SettingsItem from './SettingsItem';
import { SettingsBlocksConfig } from './SettingsConfig';
import { SettingsBlocksStyles } from './SettingsStyles';
import { useColors } from '@/src/hooks/useColors';

export default function SettingsLayout() {
	const data = SettingsBlocksConfig();
	const colors = useColors();
	const styles = SettingsBlocksStyles;
	return (
		<View style={styles.outerContainer}>
			{Object.entries(data).map(([sectionTitle, items]) => (
				<View style={styles.innerContainer} key={sectionTitle}>
					<Text style={[{ color: colors.gray300 }, styles.title]}>
						{sectionTitle}
					</Text>
					{items.map((item, index) => (
						<SettingsItem key={item.title + index} {...item} />
					))}
				</View>
			))}
		</View>
	);
}
