import { Pressable } from 'react-native';
import CustomIcon from '../UI/CustomIcon';
import { languages } from '@/src/constants/languages';
import { Text } from '../Themed';
import { useColors } from '@/src/hooks/useColors';
import { LanguagesModalItemProps } from './ModalTypes';
import { LanguagesModalItemStyles } from './ModalStyles';

export default function LanguagesModalItem({
	onPress,
	language,
}: LanguagesModalItemProps) {
	const colors = useColors();
	const languageData = languages.find((item) => item.language === language);
	const styles = LanguagesModalItemStyles;
	return (
		<Pressable
			style={({ pressed }) =>
				pressed
					? [styles.outerContainer, { backgroundColor: colors.primary400 }]
					: styles.outerContainer
			}
			onPress={onPress}
		>
			<CustomIcon svg={languageData!.icon} />
			<Text style={styles.text}>{languageData!.title}</Text>
		</Pressable>
	);
}
