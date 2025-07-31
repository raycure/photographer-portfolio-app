import { Text, View } from '../Themed';
import CloseButton from './CloseButton';
import CustomButton from './CustomButton';
import { useModalStore } from '@/src/stores/ModalStore';
import { useColors } from '@/src/hooks/useColors';
import ModalWrapper from './ModalWrapper';
import { CustomNotifyModalStyles } from './UIStyles';
export default function CustomNotifyModal() {
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
	const styles = CustomNotifyModalStyles;
	return (
		<ModalWrapper>
			<CloseButton
				style={!closeButtonActive ? { display: 'none' } : undefined}
				onPress={closeModal}
			/>
			{icon && icon}
			<Text style={[styles.title, { color: colors.tint }]}>{title}</Text>
			<Text style={[styles.text, { color: colors.primary100 }]}>{content}</Text>
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
		</ModalWrapper>
	);
}
