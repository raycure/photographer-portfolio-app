import { Text, View } from '../Themed';
import { useModalStore } from '@/src/stores/ModalStore';
import { useColors } from '@/src/hooks/useColors';
import { CustomModalStyles } from './ModalStyles';
import CloseButton from '../UI/CloseButton';
import CustomButton from '../UI/CustomButton';
import { BlurView } from 'expo-blur';

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
		extra,
		closeModal,
	} = useModalStore();
	if (!visible) return null;
	const styles = CustomModalStyles;
	return (
		<BlurView
			intensity={8}
			tint='dark'
			style={styles.blurContainer}
			experimentalBlurMethod='dimezisBlurView'
		>
			<View
				style={[styles.outerContainer, { backgroundColor: colors.primary600 }]}
			>
				<CloseButton
					style={!closeButtonActive ? { display: 'none' } : undefined}
					onPress={closeModal}
				/>
				{icon && icon}
				{title && (
					<Text style={[styles.title, { color: colors.tint }]}>{title}</Text>
				)}
				{content && (
					<Text style={[styles.text, { color: colors.primary100 }]}>
						{content}
					</Text>
				)}
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
				{extra && extra}
				{buttons && (
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
						{buttons.list?.map((buttonProps, index) => (
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
				)}
			</View>
		</BlurView>
	);
}
