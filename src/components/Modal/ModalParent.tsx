import { useModalStore } from '@/src/stores/ModalStore';
import { BlurView } from 'expo-blur';
import { ReactElement } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { CustomModalStyles } from './ModalStyles';

export default function ModalParent({ children }: { children: ReactElement }) {
	const styles = CustomModalStyles;
	const closeModal = () => useModalStore.getState().closeModal();
	return (
		<BlurView
			style={[styles.blurContainer]}
			tint='dark'
			intensity={0.5}
			experimentalBlurMethod='dimezisBlurView'
		>
			<View style={[StyleSheet.absoluteFill, styles.tintContainer]} />
			<Pressable style={StyleSheet.absoluteFill} onPress={closeModal} />
			{children}
		</BlurView>
	);
}
