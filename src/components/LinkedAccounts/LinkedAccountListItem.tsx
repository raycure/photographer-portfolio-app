import { Linking, Pressable, Text, View } from 'react-native';
import CustomIcon from '../UI/CustomIcon';
import { socialMediaList } from '@/src/constants/socialMediaList';
import { useColors } from '@/src/hooks/useColors';
import { LinkedAccountListItemStyles } from './LinkedAccountsStyles';
import {
	LinkedAccountListItemProps,
	ParentViewProps,
} from './LinkedAccountsTypes';
import { useUserInfoStore } from '@/src/stores/UserInfoStore';

const styles = LinkedAccountListItemStyles;
const ParentView = ({ children, onPress, data }: ParentViewProps) => {
	if (data.isPersonal) {
		return <View style={styles.outerContainer}>{children}</View>;
	}
	return (
		<Pressable onPress={() => onPress(data.url)} style={styles.outerContainer}>
			{children}
		</Pressable>
	);
};
export default function LinkedAccountListItem({
	data,
}: LinkedAccountListItemProps) {
	const colors = useColors();
	const userInfoStore = useUserInfoStore();
	const icon = socialMediaList.find(
		(item) => item.social === data.social
	)?.icon;
	const onDeletePressed = () => {
		userInfoStore.deleteSocialAccount({ social: data.social });
	};
	const onLinkPress = async (url: string) => {
		const supported = await Linking.canOpenURL(url);
		if (supported) {
			await Linking.openURL(url);
		} else {
			alert("Don't know how to open URL: " + url);
		}
	};
	return (
		<ParentView onPress={onLinkPress} data={data}>
			<CustomIcon size={40} svg={icon} />
			<Text style={[styles.text, { color: colors.tint }]}>
				@{data.username}
			</Text>
			{data.isPersonal && (
				<Pressable onPress={onDeletePressed}>
					<CustomIcon
						size={24}
						collectionKey='oct'
						name='trash'
						color={colors.accentRed}
					/>
				</Pressable>
			)}
		</ParentView>
	);
}
