import { useColors } from '@/src/hooks/useColors';
import { View } from '../Themed';
import CustomButton from '../UI/CustomButton';
import CustomIcon from '../UI/CustomIcon';
import { actionButtonConfigs } from './ProfileConfig';
import { StyleSheet } from 'react-native';
import { ProfileActionBarStyles } from './ProfileStyles';
export default function ProfileActionsBar({
	isPersonal,
}: {
	isPersonal: boolean;
}) {
	const colors = useColors();
	const currentButtons = isPersonal
		? [...actionButtonConfigs.general, ...actionButtonConfigs.personal]
		: [...actionButtonConfigs.general, ...actionButtonConfigs.other];
	const styles = ProfileActionBarStyles;
	return (
		<View style={styles.outerContainer}>
			{currentButtons.map((button, index) => {
				return (
					<CustomButton
						key={index}
						type='icon'
						onPress={() => handleProfileAction(button.key)}
						style={styles.buttonStyle}
						tintedBackground={{
							color: button.backgroundColor
								? button.backgroundColor
								: colors.primary500,
							opacity: 1,
							type: 'rectangular',
						}}
						icon={({ color }) => (
							<CustomIcon
								collectionKey={button.collectionKey}
								name={button.name}
								color={color}
								size={24}
							/>
						)}
					/>
				);
			})}
		</View>
	);
}
const handleProfileAction = (key: string) => {
	const actionMap: Record<string, () => void> = {
		share: () => {},
		link: () => {},
		bookmarks: () => {},
		edit: () => {},
		follow: () => {},
		block: () => {},
	};

	const action = actionMap[key];
	if (action) action();
};
