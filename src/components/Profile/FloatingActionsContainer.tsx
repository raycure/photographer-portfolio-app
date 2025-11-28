import { Animated, View } from 'react-native';
import FloatingButton from './FloatingButton';
import { useContext, useEffect, useRef, useState } from 'react';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import UserContext from '@/src/context/UserContext';
import { FloatingActionsConfig } from './ProfileConfig';
import { FloatingActionsContainerStyles } from './ProfileStyles';

export default function FloatingActionsContainer() {
	const [floatingActionsActive, SetFloatingActionsActive] = useState(false);
	const userInfoStore = useUserInfoStore();
	const data = useContext(UserContext);
	const isPersonal = data.personalInfo.id === userInfoStore.personalInfo.id;
	const floatingActionsConfig = FloatingActionsConfig();
	const buttons = isPersonal
		? [...floatingActionsConfig.general, ...floatingActionsConfig.personal]
		: [...floatingActionsConfig.general, ...floatingActionsConfig.other];

	const animations = useRef(buttons.map(() => new Animated.Value(0))).current;

	useEffect(() => {
		if (floatingActionsActive) {
			Animated.stagger(
				50,
				animations.map((anim) =>
					Animated.spring(anim, {
						toValue: 1,
						useNativeDriver: true,
						friction: 4,
					})
				)
			).start();
		} else {
			Animated.stagger(
				40,
				animations.map((anim) =>
					Animated.spring(anim, {
						toValue: 0,
						//duration: 1000,
						friction: 4,
						useNativeDriver: true,
					})
				)
			).start();
		}
	}, [floatingActionsActive]);

	const styles = FloatingActionsContainerStyles;
	return (
		<View style={styles.outerContainer}>
			<FloatingButton
				onPress={() => SetFloatingActionsActive(!floatingActionsActive)}
				size='big'
				icon={{ collectionKey: 'fe', name: 'plus', size: 28 }}
			/>
			{buttons.map((button, index) => {
				const scale = animations[index];
				const animatedStyle = {
					transform: [{ scale }],
					opacity: scale,
				};
				return (
					<Animated.View key={index} style={animatedStyle}>
						<FloatingButton
							onPress={button.onPress}
							icon={button.icon}
							size='medium'
						/>
					</Animated.View>
				);
			})}
		</View>
	);
}
