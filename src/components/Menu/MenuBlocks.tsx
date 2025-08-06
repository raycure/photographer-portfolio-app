import { Text, View } from '../Themed';
import MenuItem from './MenuItem';
import { MenuBlocksConfig } from './MenuConfig';
import { MenuBlocksStyles } from './MenuStyles';
import { useColors } from '@/src/hooks/useColors';

export default function MenuBlocks() {
	const data = MenuBlocksConfig();
	const colors = useColors();
	const styles = MenuBlocksStyles;
	return (
		<View>
			{Object.entries(data).map(([sectionTitle, items]) => (
				<View style={styles.innerContainer} key={sectionTitle}>
					<Text style={[{ color: colors.primary100 }, styles.title]}>
						{sectionTitle}
					</Text>
					{items.map((item, index) => (
						<MenuItem
							key={item.title + index}
							title={item.title}
							icon={item.icon}
							rightContent={item.rightContent && item.rightContent}
							onPress={item.onPress}
							tintColor={item.tintColor && item.tintColor}
							titleColor={item.titleColor && item.titleColor}
						/>
					))}
				</View>
			))}
		</View>
	);
}
