import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import { Text, View } from '../Themed';
import CloseButton from './CloseButton';
import CustomButton from './CustomButton';
import { useModalStore } from '@/src/stores/ModalStore';
import { useColors } from '@/src/hooks/useColors';
export default function CustomModal() {
	const colors = useColors();
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
					{ backgroundColor: colors.primary500 },
					list ? { paddingHorizontal: 30 } : { paddingHorizontal: 40 },
				]}
			>
				<CloseButton
					style={!closeButtonActive ? { display: 'none' } : undefined}
					onPress={closeModal}
				/>
				{icon && icon}
				<Text style={[styles.title, { color: colors.tint }]}>{title}</Text>
				<Text style={[styles.text, { color: colors.primary100 }]}>
					{content}
				</Text>
				{list && (
					<View style={styles.listContainer}>
						{list?.map((listItem, index) => (
							<Text
								key={index}
								style={[styles.listItem, { color: colors.gray200 }]}
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
								buttons?.configuration !== 'column' &&
								buttonProps.type === 'stretched'
									? { flex: 1 }
									: {}
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
		paddingBottom: 16,
		paddingTop: 46,
		width: '85%',
		minHeight: 200,
		borderRadius: 30,
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
