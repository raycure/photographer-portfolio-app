import { View } from 'react-native';
import FloatingButton from './FloatingButton';
import { useContext, useState } from 'react';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';
import UserContext from '@/src/context/UserContext';
import { FloatingActionsConfig } from './ProfileConfig';
import { FloatingActionsContainerStyles } from './ProfileStyles';

export default function FloatingActionsContainer() {
	const [floatingActionsActive, SetFloatingActionsActive] = useState(false);
	const userInfoStore = useUserInfoStore();
	const data = useContext(UserContext);
	const isPersonal = data.personalInfo.id === userInfoStore.personalInfo.id;
	const currentButtons = isPersonal
		? [...FloatingActionsConfig.general, ...FloatingActionsConfig.personal]
		: [...FloatingActionsConfig.general, ...FloatingActionsConfig.other];
	const styles = FloatingActionsContainerStyles;
	return (
		<View style={styles.outerContainer}>
			<FloatingButton
				onPress={() => SetFloatingActionsActive(!floatingActionsActive)}
				size='big'
				icon={{ collectionKey: 'fe', name: 'plus', size: 28 }}
			/>
			{floatingActionsActive &&
				currentButtons.map((button, index) => {
					return (
						<FloatingButton
							key={index}
							onPress={button.onPress}
							icon={button.icon}
						/>
					);
				})}
		</View>
	);
}
