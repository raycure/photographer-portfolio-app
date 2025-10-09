import { Animated, Dimensions, Pressable, View } from 'react-native';
import LanguagesModalItem from './LanguagesModalItem';
import { languages } from '@/src/constants/languages';
import LineSeperator from '../UI/LineSeperator';
import { useColors } from '@/src/hooks/useColors';
import { useInteractionStore } from '@/src/stores/InteractionStore';
import { getColorWithOpacity } from '@/src/utils/color';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import { LanguagesModalStyles } from './ModalStyles';
import { useEffect, useRef, useState } from 'react';
const screenHeight = Dimensions.get('screen').height;
export default function LanguagesModal() {
	const colors = useColors();
	const interactionStore = useInteractionStore();
	const userInfoStore = useUserInfoStore();
	const { open } = interactionStore.modalsInteracted.languages;

	const closeModal = () => {
		interactionStore.setModalOpen('languages', false);
	};

	const translateY = useRef(new Animated.Value(screenHeight)).current;
	const [visible, setVisible] = useState(open);

	useEffect(() => {
		if (open) {
			setVisible(true);
			Animated.spring(translateY, {
				toValue: 0,
				useNativeDriver: true,
				friction: 8,
			}).start();
		} else {
			Animated.timing(translateY, {
				toValue: screenHeight,
				duration: 300,
				useNativeDriver: true,
			}).start(() => setVisible(false));
		}
	}, [open]);

	if (!visible) return null;
	const styles = LanguagesModalStyles;
	return (
		<Pressable
			style={[
				styles.outerContainer,
				{ backgroundColor: getColorWithOpacity(colors.primary700, 0.5) },
			]}
			onPress={closeModal}
		>
			<Animated.View
				style={[
					styles.container,
					{ backgroundColor: colors.primary500, transform: [{ translateY }] },
				]}
			>
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
			</Animated.View>
		</Pressable>
	);
}
