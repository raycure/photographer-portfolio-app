import { BlurView } from 'expo-blur';
import { StyleSheet, useColorScheme } from 'react-native';
import { Text, View } from '../Themed';
import CloseButton from './CloseButton';
import Colors from '@/src/constants/Colors';
import CustomButton from './CustomButton';
import { useModalStore } from '@/src/stores/ModalStore';
export default function CustomModal() {
	const colorScheme = useColorScheme();
	const {
		visible,
		title,
		content,
		closeButtonActive,
		icon,
		buttons,
		list,
		closeModal,
	} = useModalStore();
	if (!visible) return null;
	return (
		<BlurView
			intensity={10}
			tint='dark'
			style={styles.blurContainer}
			experimentalBlurMethod='dimezisBlurView'
		>
			<View
				style={[
					styles.outerContainer,
					{ backgroundColor: Colors[colorScheme ?? 'dark'].primary300 },
				]}
			>
				<CloseButton
					style={!closeButtonActive ? { display: 'none' } : undefined}
					onPress={closeModal}
				/>
				{icon && icon}
				<Text
					style={[styles.title, { color: Colors[colorScheme ?? 'dark'].tint }]}
				>
					{title}
				</Text>
				<Text
					style={[
						styles.text,
						{ color: Colors[colorScheme ?? 'dark'].gray200 },
					]}
				>
					{content}
				</Text>
				{list && (
					<View style={styles.listContainer}>
						{list?.map((listItem, index) => (
							<Text
								key={index}
								style={[
									styles.listItem,
									{ color: Colors[colorScheme ?? 'dark'].gray200 },
								]}
							>
								{listItem.icon ? listItem.icon : '●  '}
								{listItem.content}
							</Text>
						))}
					</View>
				)}
				<View
					style={[
						styles.buttonContainer,
						buttons?.configuration === 'column' && {
							flexDirection: 'column',
							alignItems: 'center',
							paddingHorizontal: 20,
						},
					]}
				>
					{buttons?.list?.map((buttonProps, index) => (
						<CustomButton
							key={index}
							{...buttonProps}
							outerContainerStyle={
								buttons?.configuration !== 'column' ? { flex: 1 } : {}
							}
						/>
					))}
				</View>
			</View>
		</BlurView>
	);
}
const styles = StyleSheet.create({
	blurContainer: {
		position: 'absolute',
		flex: 1,
		width: '100%',
		height: '100%',
		zIndex: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
	outerContainer: {
		paddingHorizontal: 28,
		paddingBottom: 10,
		paddingTop: 46,
		width: '85%',
		minHeight: '30%',
		borderRadius: 18,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		gap: 12,
	},
	buttonContainer: {
		backgroundColor: 'transparent',
		gap: 16,
		paddingVertical: 16,
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	listContainer: { backgroundColor: 'transparent' },
	listItem: {
		backgroundColor: 'transparent',
		flexDirection: 'row',
		fontSize: 18,
	},
	title: {
		fontSize: 26,
		textAlign: 'center',
		paddingHorizontal: 10,
		fontWeight: 'bold',
	},
	text: { fontSize: 18, textAlign: 'center' },
});
