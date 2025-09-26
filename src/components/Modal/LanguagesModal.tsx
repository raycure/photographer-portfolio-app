import { Pressable, View } from 'react-native';
import LanguagesModalItem from './LanguagesModalItem';
import { languages } from '@/src/constants/languages';
import LineSeperator from '../UI/LineSeperator';
import { useColors } from '@/src/hooks/useColors';
import { useInteractionStore } from '@/src/stores/InteractionStore';
import { getColorWithOpacity } from '@/src/utils/color';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { LanguagesModalStyles } from './ModalStyles';

export default function LanguagesModal() {
	const colors = useColors();
	const interactionStore = useInteractionStore();
	const userInfoStore = useUserInfoStore();
	if (!interactionStore.modalsInteracted.languages.open) {
		return null;
	}
	const closeModal = () => {
		interactionStore.setModalOpen('languages', false);
	};
	const styles = LanguagesModalStyles;
	return (
		<Pressable
			style={[
				styles.outerContainer,
				{ backgroundColor: getColorWithOpacity(colors.primary700, 0.5) },
			]}
			onPress={closeModal}
		>
			<View style={[styles.container, { backgroundColor: colors.primary500 }]}>
				{languages.map((item, index) => {
					const onLanguagePress = () => {
						userInfoStore.setLanguage(item.language);
						closeModal();
					};
					return (
						<View key={item.language}>
							<LanguagesModalItem
								language={item.language}
								onPress={onLanguagePress}
							/>
							{index <= languages.length - 2 && (
								<LineSeperator color={colors.primary300} />
							)}
						</View>
					);
				})}
			</View>
		</Pressable>
	);
}
