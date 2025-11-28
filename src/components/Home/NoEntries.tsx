import { Text, View } from 'react-native';
import CustomIcon from '../UI/CustomIcon';
import { CameraOSVG } from '@/src/constants/svgs';
import { useColors } from '@/src/hooks/useColors';
import { NoEntriesStyles } from './HomeStyles';
import { useTranslation } from 'react-i18next';

export default function NoEntries() {
	const colors = useColors();
	const { t } = useTranslation();
	const styles = NoEntriesStyles;
	return (
		<View style={styles.outerContainer}>
			<View style={[styles.innerContainer, { borderColor: colors.tint }]}>
				<CustomIcon svg={<CameraOSVG color={colors.tint} />} size={60} />
			</View>
			<Text style={[styles.title, { color: colors.tint }]}>
				{t('Home.NoEntries')}
			</Text>
		</View>
	);
}
